import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  AbrirCajaDto,
  CerrarCajaDto,
  MovimientoCajaDto,
} from './dto/caja-diaria.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class CajaDiariaService {
  constructor(private prisma: PrismaService) {}

  async abrirCaja(abrirCajaDto: AbrirCajaDto) {
    const fecha = new Date(abrirCajaDto.fecha);
    fecha.setHours(0, 0, 0, 0);

    // Check if there's already an open cash register
    const cajaAbierta = await this.prisma.caja_diaria.findFirst({
      where: {
        estado: 'ABIERTA',
      },
    });

    if (cajaAbierta) {
      throw new BadRequestException(
        'Ya existe una caja abierta. Cierre la caja actual antes de abrir una nueva.',
      );
    }

    // Check if there's already a cash register for this date
    const cajaExistente = await this.prisma.caja_diaria.findUnique({
      where: {
        fecha,
      },
    });

    if (cajaExistente) {
      throw new BadRequestException(
        `Ya existe una caja para la fecha ${fecha.toISOString().split('T')[0]}`,
      );
    }

    // Create cash register
    return this.prisma.caja_diaria.create({
      data: {
        fecha,
        apertura: abrirCajaDto.apertura,
        notas: abrirCajaDto.notas,
      },
    });
  }

  async cerrarCaja(id: number, cerrarCajaDto: CerrarCajaDto) {
    // Get cash register
    const caja = await this.prisma.caja_diaria.findUnique({
      where: { id },
      include: {
        movimientos_caja: true,
      },
    });

    if (!caja) {
      throw new NotFoundException(`Caja con ID ${id} no encontrada`);
    }

    if (caja.estado === 'CERRADA') {
      throw new BadRequestException('La caja ya está cerrada');
    }

    // Calculate difference
    const totalIngresos = caja.movimientos_caja
      .filter((m) => m.tipo === 'INGRESO')
      .reduce((sum, m) => sum + Number(m.monto), 0);

    const totalEgresos = caja.movimientos_caja
      .filter((m) => m.tipo === 'EGRESO')
      .reduce((sum, m) => sum + Number(m.monto), 0);

    const saldoTeorico = Number(caja.apertura) + totalIngresos - totalEgresos;
    const diferencia = Number(cerrarCajaDto.cierre) - saldoTeorico;

    // Close cash register
    return this.prisma.caja_diaria.update({
      where: { id },
      data: {
        cierre: cerrarCajaDto.cierre,
        diferencia,
        estado: 'CERRADA',
        notas: cerrarCajaDto.notas,
      },
    });
  }

  async agregarMovimiento(id: number, movimientoCajaDto: MovimientoCajaDto) {
    // Get cash register
    const caja = await this.prisma.caja_diaria.findUnique({
      where: { id },
    });

    if (!caja) {
      throw new NotFoundException(`Caja con ID ${id} no encontrada`);
    }

    if (caja.estado === 'CERRADA') {
      throw new BadRequestException(
        'No se puede agregar movimientos a una caja cerrada',
      );
    }

    // Create movement and update cash register in a transaction
    return this.prisma.$transaction(async (prisma) => {
      // Create movement
      const movimiento = await prisma.movimientos_caja.create({
        data: {
          caja_id: id,
          fecha_hora: new Date(),
          tipo: movimientoCajaDto.tipo,
          concepto: movimientoCajaDto.concepto,
          monto: movimientoCajaDto.monto,
          referencia_tipo: movimientoCajaDto.referencia_tipo,
        },
      });

      // Update cash register totals
      if (movimientoCajaDto.tipo === 'INGRESO') {
        await prisma.caja_diaria.update({
          where: { id },
          data: {
            total_ventas: {
              increment: movimientoCajaDto.monto,
            },
          },
        });
      } else {
        await prisma.caja_diaria.update({
          where: { id },
          data: {
            total_gastos: {
              increment: movimientoCajaDto.monto,
            },
          },
        });
      }

      return movimiento;
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.caja_diaria.findMany({
        skip,
        take: limit,
        orderBy: orderBy ? { [orderBy]: orderDirection } : { fecha: 'desc' },
      }),
      this.prisma.caja_diaria.count(),
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

  async findActual() {
    const caja = await this.prisma.caja_diaria.findFirst({
      where: {
        estado: 'ABIERTA',
      },
      orderBy: {
        fecha: 'desc',
      },
      include: {
        movimientos_caja: true,
      },
    });

    if (!caja) {
      throw new NotFoundException('No hay ninguna caja abierta');
    }

    return caja;
  }

  async findByFecha(fecha: string) {
    const fechaBusqueda = new Date(fecha);
    fechaBusqueda.setHours(0, 0, 0, 0);

    const caja = await this.prisma.caja_diaria.findUnique({
      where: {
        fecha: fechaBusqueda,
      },
      include: {
        movimientos_caja: true,
      },
    });

    if (!caja) {
      throw new NotFoundException(`No se encontró caja para la fecha ${fecha}`);
    }

    return caja;
  }

  async findOne(id: number) {
    const caja = await this.prisma.caja_diaria.findUnique({
      where: { id },
      include: {
        movimientos_caja: true,
      },
    });

    if (!caja) {
      throw new NotFoundException(`Caja con ID ${id} no encontrada`);
    }

    return caja;
  }

  async findMovimientos(id: number, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    // Check if cash register exists
    const caja = await this.prisma.caja_diaria.findUnique({
      where: { id },
    });

    if (!caja) {
      throw new NotFoundException(`Caja con ID ${id} no encontrada`);
    }

    const [items, total] = await Promise.all([
      this.prisma.movimientos_caja.findMany({
        where: {
          caja_id: id,
        },
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { fecha_hora: 'desc' },
      }),
      this.prisma.movimientos_caja.count({
        where: {
          caja_id: id,
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
}
