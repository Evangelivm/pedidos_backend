import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePagoDto, UpdatePagoDto } from './dto/pago.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PagosService {
  constructor(private prisma: PrismaService) {}

  async create(createPagoDto: CreatePagoDto) {
    // Verify order exists
    const pedido = await this.prisma.pedidos.findUnique({
      where: { id: createPagoDto.pedido_id },
      include: {
        pagos: true,
      },
    });

    if (!pedido) {
      throw new BadRequestException(
        `Pedido con ID ${createPagoDto.pedido_id} no encontrado`,
      );
    }

    // Calculate total paid
    const totalPagado =
      pedido.pagos.reduce((sum, pago) => sum + Number(pago.monto), 0) +
      Number(createPagoDto.monto);

    // Construimos el objeto data explícitamente
    const pagoData = {
      pedido_id: createPagoDto.pedido_id,
      fecha: new Date(createPagoDto.fecha),
      monto: createPagoDto.monto,
      metodo_pago: createPagoDto.metodo_pago,
      referencia: createPagoDto.referencia,
      notas: createPagoDto.notas,
    };

    // Create payment and update order status in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create payment
      const pago = await prisma.pagos.create({
        data: pagoData,
        include: {
          pedidos: true,
        },
      });

      // Update order status if fully paid
      if (totalPagado >= Number(pedido.total)) {
        await prisma.pedidos.update({
          where: { id: createPagoDto.pedido_id },
          data: {
            estado: 'PAGADO',
          },
        });
      }

      // Add movement to cash register if it's open
      const cajaAbierta = await prisma.caja_diaria.findFirst({
        where: {
          estado: 'ABIERTA',
        },
        orderBy: {
          fecha: 'desc',
        },
      });

      if (cajaAbierta && createPagoDto.metodo_pago === 'EFECTIVO') {
        await prisma.movimientos_caja.create({
          data: {
            caja_id: cajaAbierta.id,
            fecha_hora: new Date(),
            tipo: 'INGRESO',
            concepto: `Pago de pedido #${pedido.numero}`,
            monto: createPagoDto.monto,
            referencia_id: pago.id,
            referencia_tipo: 'VENTA',
          },
        });

        // Update cash register totals
        await prisma.caja_diaria.update({
          where: { id: cajaAbierta.id },
          data: {
            total_ventas: {
              increment: createPagoDto.monto,
            },
          },
        });
      }

      return pago;
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.pagos.findMany({
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
      this.prisma.pagos.count(),
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
    return this.prisma.pagos.findMany({
      where: {
        pedido_id: pedidoId,
      },
      include: {
        pedidos: true,
      },
    });
  }

  async findByFecha(fecha: string, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0, 0, 0, 0);

    const fechaFin = new Date(fecha);
    fechaFin.setHours(23, 59, 59, 999);

    const [items, total] = await Promise.all([
      this.prisma.pagos.findMany({
        where: {
          fecha: {
            gte: fechaInicio,
            lte: fechaFin,
          },
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
      this.prisma.pagos.count({
        where: {
          fecha: {
            gte: fechaInicio,
            lte: fechaFin,
          },
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
    const pago = await this.prisma.pagos.findUnique({
      where: { id },
      include: {
        pedidos: {
          include: {
            clientes: true,
          },
        },
      },
    });

    if (!pago) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }

    return pago;
  }

  async update(id: number, updatePagoDto: UpdatePagoDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updatePagoDto.fecha !== undefined) {
        data.fecha = new Date(updatePagoDto.fecha);
      }
      if (updatePagoDto.monto !== undefined) {
        data.monto = updatePagoDto.monto;
      }
      if (updatePagoDto.metodo_pago !== undefined) {
        data.metodo_pago = updatePagoDto.metodo_pago;
      }
      if (updatePagoDto.referencia !== undefined) {
        data.referencia = updatePagoDto.referencia;
      }
      if (updatePagoDto.notas !== undefined) {
        data.notas = updatePagoDto.notas;
      }

      return await this.prisma.pagos.update({
        where: { id },
        data,
        include: {
          pedidos: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      const pago = await this.prisma.pagos.findUnique({
        where: { id },
        include: {
          pedidos: true,
        },
      });

      if (!pago) {
        throw new NotFoundException(`Pago con ID ${id} no encontrado`);
      }

      // Delete payment and update order status in a transaction
      return this.prisma.$transaction(async (prisma) => {
        // Delete payment
        await prisma.pagos.delete({
          where: { id },
        });

        // Get remaining payments
        const pagosRestantes = await prisma.pagos.findMany({
          where: {
            pedido_id: pago.pedido_id,
          },
        });

        // Calculate total paid
        const totalPagado = pagosRestantes.reduce(
          (sum, p) => sum + Number(p.monto),
          0,
        );

        // Update order status if not fully paid
        if (totalPagado < Number(pago.pedidos.total)) {
          await prisma.pedidos.update({
            where: { id: pago.pedido_id },
            data: {
              estado: 'PENDIENTE',
            },
          });
        }

        // Remove movement from cash register if it exists
        const movimiento = await prisma.movimientos_caja.findFirst({
          where: {
            referencia_id: id,
            referencia_tipo: 'VENTA',
          },
        });

        if (movimiento) {
          // Update cash register totals
          await prisma.caja_diaria.update({
            where: { id: movimiento.caja_id },
            data: {
              total_ventas: {
                decrement: movimiento.monto,
              },
            },
          });

          // Delete movement
          await prisma.movimientos_caja.delete({
            where: { id: movimiento.id },
          });
        }

        return { id, message: 'Pago eliminado correctamente' };
      });
    } catch (error) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }
  }
}
