import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDespachoDto, UpdateDespachoDto } from './dto/despacho.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class DespachosService {
  constructor(private prisma: PrismaService) {}

  async create(createDespachoDto: CreateDespachoDto) {
    // Verify order exists
    const pedido = await this.prisma.pedidos.findUnique({
      where: { id: createDespachoDto.pedido_id },
    });

    if (!pedido) {
      throw new BadRequestException(
        `Pedido con ID ${createDespachoDto.pedido_id} no encontrado`,
      );
    }

    // Construimos el objeto data explícitamente
    const data = {
      pedido_id: createDespachoDto.pedido_id,
      fecha: new Date(createDespachoDto.fecha),
      direccion_entrega: createDespachoDto.direccion_entrega,
      contacto_entrega: createDespachoDto.contacto_entrega,
      telefono_entrega: createDespachoDto.telefono_entrega,
      estado: createDespachoDto.estado,
      notas: createDespachoDto.notas,
    };

    // Create dispatch
    const despacho = await this.prisma.despachos.create({
      data,
      include: {
        pedidos: true,
      },
    });

    // Update order status if needed
    if (createDespachoDto.estado === 'ENTREGADO') {
      await this.prisma.pedidos.update({
        where: { id: createDespachoDto.pedido_id },
        data: {
          estado: 'DESPACHADO',
        },
      });
    }

    return despacho;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.despachos.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          pedidos: {
            include: {
              clientes: true,
            },
          },
        },
      }),
      this.prisma.despachos.count(),
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

  async findByPedido(pedidoId: number) {
    return this.prisma.despachos.findMany({
      where: {
        pedido_id: pedidoId,
      },
      include: {
        pedidos: {
          include: {
            clientes: true,
          },
        },
      },
    });
  }

  async findByEstado(
    estado: 'PENDIENTE' | 'EN_RUTA' | 'ENTREGADO' | 'CANCELADO',
    paginationDto: PaginationDto,
  ) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.despachos.findMany({
        where: {
          estado,
        },
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          pedidos: {
            include: {
              clientes: true,
            },
          },
        },
      }),
      this.prisma.despachos.count({
        where: {
          estado,
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

  async findOne(id: number) {
    const despacho = await this.prisma.despachos.findUnique({
      where: { id },
      include: {
        pedidos: {
          include: {
            clientes: true,
            detalle_pedidos: {
              include: {
                productos: true,
              },
            },
          },
        },
      },
    });

    if (!despacho) {
      throw new NotFoundException(`Despacho con ID ${id} no encontrado`);
    }

    return despacho;
  }

  async update(id: number, updateDespachoDto: UpdateDespachoDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updateDespachoDto.fecha !== undefined) {
        data.fecha = new Date(updateDespachoDto.fecha);
      }
      if (updateDespachoDto.direccion_entrega !== undefined) {
        data.direccion_entrega = updateDespachoDto.direccion_entrega;
      }
      if (updateDespachoDto.contacto_entrega !== undefined) {
        data.contacto_entrega = updateDespachoDto.contacto_entrega;
      }
      if (updateDespachoDto.telefono_entrega !== undefined) {
        data.telefono_entrega = updateDespachoDto.telefono_entrega;
      }
      if (updateDespachoDto.estado !== undefined) {
        data.estado = updateDespachoDto.estado;
      }
      if (updateDespachoDto.notas !== undefined) {
        data.notas = updateDespachoDto.notas;
      }

      const despacho = await this.prisma.despachos.update({
        where: { id },
        data,
        include: {
          pedidos: true,
        },
      });

      // Update order status if needed
      if (updateDespachoDto.estado === 'ENTREGADO') {
        await this.prisma.pedidos.update({
          where: { id: despacho.pedido_id },
          data: {
            estado: 'DESPACHADO',
          },
        });
      }

      return despacho;
    } catch (error) {
      throw new NotFoundException(`Despacho con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.despachos.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Despacho con ID ${id} no encontrado`);
    }
  }
}
