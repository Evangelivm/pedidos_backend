import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGastoDto, UpdateGastoDto } from './dto/gasto.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class GastosService {
  constructor(private prisma: PrismaService) {}

  async create(createGastoDto: CreateGastoDto) {
    // Construimos el objeto data explícitamente
    const gastoData = {
      fecha: new Date(createGastoDto.fecha),
      concepto: createGastoDto.concepto,
      monto: createGastoDto.monto,
      tipo: createGastoDto.tipo,
      categoria: createGastoDto.categoria,
      comprobante: createGastoDto.comprobante,
      notas: createGastoDto.notas,
    };

    // Create expense and add movement to cash register in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create expense
      const gasto = await prisma.gastos.create({
        data: gastoData,
      });

      // Add movement to cash register if it's open
      const cajaAbierta = await prisma.caja_diaria.findFirst({
        where: {
          estado: 'ABIERTA',
        },
        orderBy: {
          fecha: 'desc',
        },
      });

      if (cajaAbierta) {
        await prisma.movimientos_caja.create({
          data: {
            caja_id: cajaAbierta.id,
            fecha_hora: new Date(),
            tipo: 'EGRESO',
            concepto: createGastoDto.concepto,
            monto: createGastoDto.monto,
            referencia_id: gasto.id,
            referencia_tipo: 'GASTO',
          },
        });

        // Update cash register totals
        await prisma.caja_diaria.update({
          where: { id: cajaAbierta.id },
          data: {
            total_gastos: {
              increment: createGastoDto.monto,
            },
          },
        });
      }

      return gasto;
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.gastos.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.gastos.count(),
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

  async findByFecha(fecha: string, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0, 0, 0, 0);

    const fechaFin = new Date(fecha);
    fechaFin.setHours(23, 59, 59, 999);

    const [items, total] = await Promise.all([
      this.prisma.gastos.findMany({
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
      }),
      this.prisma.gastos.count({
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

  async findByTipo(tipo: 'FIJO' | 'VARIABLE', paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.gastos.findMany({
        where: {
          tipo,
        },
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.gastos.count({
        where: {
          tipo,
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
    const gasto = await this.prisma.gastos.findUnique({
      where: { id },
    });

    if (!gasto) {
      throw new NotFoundException(`Gasto con ID ${id} no encontrado`);
    }

    return gasto;
  }

  async update(id: number, updateGastoDto: UpdateGastoDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updateGastoDto.fecha !== undefined) {
        data.fecha = new Date(updateGastoDto.fecha);
      }
      if (updateGastoDto.concepto !== undefined) {
        data.concepto = updateGastoDto.concepto;
      }
      if (updateGastoDto.monto !== undefined) {
        data.monto = updateGastoDto.monto;
      }
      if (updateGastoDto.tipo !== undefined) {
        data.tipo = updateGastoDto.tipo;
      }
      if (updateGastoDto.categoria !== undefined) {
        data.categoria = updateGastoDto.categoria;
      }
      if (updateGastoDto.comprobante !== undefined) {
        data.comprobante = updateGastoDto.comprobante;
      }
      if (updateGastoDto.notas !== undefined) {
        data.notas = updateGastoDto.notas;
      }

      return await this.prisma.gastos.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`Gasto con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      const gasto = await this.prisma.gastos.findUnique({
        where: { id },
      });

      if (!gasto) {
        throw new NotFoundException(`Gasto con ID ${id} no encontrado`);
      }

      // Delete expense and update cash register in a transaction
      return this.prisma.$transaction(async (prisma) => {
        // Delete expense
        await prisma.gastos.delete({
          where: { id },
        });

        // Remove movement from cash register if it exists
        const movimiento = await prisma.movimientos_caja.findFirst({
          where: {
            referencia_id: id,
            referencia_tipo: 'GASTO',
          },
        });

        if (movimiento) {
          // Update cash register totals
          await prisma.caja_diaria.update({
            where: { id: movimiento.caja_id },
            data: {
              total_gastos: {
                decrement: movimiento.monto,
              },
            },
          });

          // Delete movement
          await prisma.movimientos_caja.delete({
            where: { id: movimiento.id },
          });
        }

        return { id, message: 'Gasto eliminado correctamente' };
      });
    } catch (error) {
      throw new NotFoundException(`Gasto con ID ${id} no encontrado`);
    }
  }
}
