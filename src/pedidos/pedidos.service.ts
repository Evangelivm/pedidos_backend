import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoDto, UpdatePedidoDto } from './dto/pedido.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const { detalle, ...pedidoData } = createPedidoDto;

    // Verify client exists
    const cliente = await this.prisma.clientes.findUnique({
      where: { id: pedidoData.cliente_id },
    });

    if (!cliente) {
      throw new BadRequestException(
        `Cliente con ID ${pedidoData.cliente_id} no encontrado`,
      );
    }

    // Verify products exist and have enough stock
    for (const item of detalle) {
      const producto = await this.prisma.productos.findUnique({
        where: { id: item.producto_id },
      });

      if (!producto) {
        throw new BadRequestException(
          `Producto con ID ${item.producto_id} no encontrado`,
        );
      }

      if (producto.stock < item.cantidad) {
        throw new BadRequestException(
          `Stock insuficiente para el producto ${producto.descripcion}`,
        );
      }
    }

    // Construimos el objeto data explícitamente
    const pedidoCreateData = {
      numero: pedidoData.numero,
      fecha: new Date(pedidoData.fecha),
      cliente_id: pedidoData.cliente_id,
      subtotal: pedidoData.subtotal,
      igv: pedidoData.igv,
      total: pedidoData.total,
      estado: pedidoData.estado,
      notas: pedidoData.notas,
    };

    // Create order with details in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create order
      const pedido = await prisma.pedidos.create({
        data: pedidoCreateData,
      });

      // Create order details
      for (const item of detalle) {
        const detalleData = {
          pedido_id: pedido.id,
          producto_id: item.producto_id,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario,
          subtotal: item.subtotal,
        };

        await prisma.detalle_pedidos.create({
          data: detalleData,
        });

        // Update product stock
        await prisma.productos.update({
          where: { id: item.producto_id },
          data: {
            stock: {
              decrement: item.cantidad,
            },
          },
        });
      }

      // Return order with its details using the transactional prisma instance
      const pedidoConDetalle = await prisma.pedidos.findUnique({
        where: { id: pedido.id },
        include: {
          clientes: true,
          detalle_pedidos: {
            include: {
              productos: true,
            },
          },
          pagos: true,
          despachos: true,
        },
      });

      if (!pedidoConDetalle) {
        throw new NotFoundException(`Pedido con ID ${pedido.id} no encontrado`);
      }

      return pedidoConDetalle;
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.pedidos.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          clientes: true,
          detalle_pedidos: {
            include: {
              productos: {
                include: {
                  presentaciones: {
                    select: {
                      id: true,
                      nombre: true,
                    },
                  },
                },
              },
            },
          },
          pagos: true,
          despachos: true,
        },
      }),
      this.prisma.pedidos.count(),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findByCliente(clienteId: number, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.pedidos.findMany({
        where: {
          cliente_id: clienteId,
        },
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          clientes: true,
          detalle_pedidos: {
            include: {
              productos: true,
            },
          },
        },
      }),
      this.prisma.pedidos.count({
        where: {
          cliente_id: clienteId,
        },
      }),
    ]);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findByNumero(numero: string) {
    const pedido = await this.prisma.pedidos.findUnique({
      where: { numero },
      include: {
        clientes: true,
        detalle_pedidos: {
          include: {
            productos: true,
          },
        },
        pagos: true,
        despachos: true,
      },
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido con número ${numero} no encontrado`);
    }

    return pedido;
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedidos.findUnique({
      where: { id: id },
      include: {
        clientes: true,
        detalle_pedidos: {
          include: {
            productos: {
              include: {
                presentaciones: {
                  select: {
                    id: true,
                    nombre: true,
                  },
                },
              },
            },
          },
        },
        pagos: true,
        despachos: true,
      },
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }

    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const pedido = await this.prisma.pedidos.findUnique({
      where: { id },
      include: { detalle_pedidos: true },
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }

    return this.prisma.$transaction(async (tx) => {
      // 1. Restaurar stock de los productos antiguos
      if (pedido.detalle_pedidos.length > 0) {
        for (const item of pedido.detalle_pedidos) {
          await tx.productos.update({
            where: { id: item.producto_id },
            data: { stock: { increment: item.cantidad } },
          });
        }
      }

      // 2. Actualizar campos principales
      const { detalle, ...data } = updatePedidoDto;
      const updatedPedido = await tx.pedidos.update({
        where: { id },
        data,
      });

      // 3. Verificar y actualizar nuevo detalle
      if (detalle) {
        // Verificar productos y stock
        for (const item of detalle) {
          const producto = await tx.productos.findUnique({
            where: { id: item.producto_id },
          });

          if (!producto) {
            throw new BadRequestException(
              `Producto con ID ${item.producto_id} no encontrado`,
            );
          }

          if (producto.stock < item.cantidad) {
            throw new BadRequestException(
              `Stock insuficiente para el producto ${producto.descripcion}`,
            );
          }
        }

        // Eliminar detalles antiguos
        await tx.detalle_pedidos.deleteMany({ where: { pedido_id: id } });

        // Crear nuevos detalles y actualizar stock
        for (const item of detalle) {
          await tx.detalle_pedidos.create({
            data: {
              pedido_id: id,
              producto_id: item.producto_id,
              cantidad: item.cantidad,
              precio_unitario: item.precio_unitario,
              subtotal: item.subtotal,
            },
          });

          await tx.productos.update({
            where: { id: item.producto_id },
            data: { stock: { decrement: item.cantidad } },
          });
        }
      }

      return tx.pedidos.findUnique({
        where: { id },
        include: {
          detalle_pedidos: { include: { productos: true } },
          clientes: true,
        },
      });
    });
  }

  async remove(id: number) {
    try {
      // Get order details to restore stock
      const pedido = await this.prisma.pedidos.findUnique({
        where: { id },
        include: {
          detalle_pedidos: true,
        },
      });

      if (!pedido) {
        throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
      }

      // Delete order and restore stock in a transaction
      return this.prisma.$transaction(async (prisma) => {
        // Restore product stock
        for (const item of pedido.detalle_pedidos) {
          await prisma.productos.update({
            where: { id: item.producto_id },
            data: {
              stock: {
                increment: item.cantidad,
              },
            },
          });
        }

        // Delete order (cascade will delete details)
        return await prisma.pedidos.delete({
          where: { id },
        });
      });
    } catch (error) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
  }
}
