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

      // Return order with details
      return this.findOne(pedido.id);
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
              productos: true,
            },
          },
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
      where: { id },
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
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }

    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updatePedidoDto.fecha !== undefined) {
        data.fecha = new Date(updatePedidoDto.fecha);
      }
      if (updatePedidoDto.cliente_id !== undefined) {
        data.cliente_id = updatePedidoDto.cliente_id;
      }
      if (updatePedidoDto.subtotal !== undefined) {
        data.subtotal = updatePedidoDto.subtotal;
      }
      if (updatePedidoDto.igv !== undefined) {
        data.igv = updatePedidoDto.igv;
      }
      if (updatePedidoDto.total !== undefined) {
        data.total = updatePedidoDto.total;
      }
      if (updatePedidoDto.estado !== undefined) {
        data.estado = updatePedidoDto.estado;
      }
      if (updatePedidoDto.notas !== undefined) {
        data.notas = updatePedidoDto.notas;
      }

      return await this.prisma.pedidos.update({
        where: { id },
        data,
        include: {
          clientes: true,
          detalle_pedidos: {
            include: {
              productos: true,
            },
          },
        },
      });
    } catch (error) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
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
