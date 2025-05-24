import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateEntradaMercaderiaDto,
  UpdateEntradaMercaderiaDto,
} from './dto/entrada-mercaderia.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class EntradasMercaderiaService {
  constructor(private prisma: PrismaService) {}

  async create(createEntradaMercaderiaDto: CreateEntradaMercaderiaDto) {
    const { detalle, ...entradaData } = createEntradaMercaderiaDto;

    // Validar productos existentes
    for (const item of detalle) {
      const producto = await this.prisma.productos.findUnique({
        where: { id: item.producto_id },
      });

      if (!producto) {
        throw new BadRequestException(
          `Producto con ID ${item.producto_id} no encontrado`,
        );
      }
    }

    // Crear entrada y actualizar stock en transacción
    return this.prisma.$transaction(async (prisma) => {
      const entradaCreateData = {
        fecha: new Date(entradaData.fecha),
        proveedor: entradaData.proveedor,
        numero_factura: entradaData.numero_factura,
        total: entradaData.total,
        notas: entradaData.notas,
      };

      const entrada = await prisma.entradas_mercaderia.create({
        data: entradaCreateData,
      });

      for (const item of detalle) {
        const detalleData = {
          entrada_id: entrada.id,
          producto_id: item.producto_id,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario,
          subtotal: item.subtotal,
        };

        await prisma.detalle_entradas_mercaderia.create({
          data: detalleData,
        });

        await prisma.productos.update({
          where: { id: item.producto_id },
          data: {
            stock: {
              increment: item.cantidad,
            },
          },
        });
      }

      return await prisma.entradas_mercaderia.findUnique({
        where: { id: entrada.id },
        include: {
          detalle_entradas_mercaderia: {
            include: {
              productos: true,
            },
          },
        },
      });
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.entradas_mercaderia.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          detalle_entradas_mercaderia: {
            include: {
              productos: true,
            },
          },
        },
      }),
      this.prisma.entradas_mercaderia.count(),
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

  async findByProveedor(proveedor: string, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.entradas_mercaderia.findMany({
        where: {
          proveedor: {
            contains: proveedor,
          },
        },
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          detalle_entradas_mercaderia: {
            include: {
              productos: true,
            },
          },
        },
      }),
      this.prisma.entradas_mercaderia.count({
        where: {
          proveedor: {
            contains: proveedor,
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

  async findByFecha(fecha: string, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0, 0, 0, 0);

    const fechaFin = new Date(fecha);
    fechaFin.setHours(23, 59, 59, 999);

    const [items, total] = await Promise.all([
      this.prisma.entradas_mercaderia.findMany({
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
          detalle_entradas_mercaderia: {
            include: {
              productos: true,
            },
          },
        },
      }),
      this.prisma.entradas_mercaderia.count({
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
    const entrada = await this.prisma.entradas_mercaderia.findUnique({
      where: { id },
      include: {
        detalle_entradas_mercaderia: {
          include: {
            productos: true,
          },
        },
      },
    });

    if (!entrada) {
      throw new NotFoundException(
        `Entrada de mercadería con ID ${id} no encontrada`,
      );
    }

    return entrada;
  }

  async update(
    id: number,
    updateEntradaMercaderiaDto: UpdateEntradaMercaderiaDto,
  ) {
    try {
      const data: any = {};

      if (updateEntradaMercaderiaDto.fecha !== undefined) {
        data.fecha = new Date(updateEntradaMercaderiaDto.fecha);
      }
      if (updateEntradaMercaderiaDto.proveedor !== undefined) {
        data.proveedor = updateEntradaMercaderiaDto.proveedor;
      }
      if (updateEntradaMercaderiaDto.numero_factura !== undefined) {
        data.numero_factura = updateEntradaMercaderiaDto.numero_factura;
      }
      if (updateEntradaMercaderiaDto.total !== undefined) {
        data.total = updateEntradaMercaderiaDto.total;
      }
      if (updateEntradaMercaderiaDto.notas !== undefined) {
        data.notas = updateEntradaMercaderiaDto.notas;
      }

      return await this.prisma.entradas_mercaderia.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(
        `Entrada de mercadería con ID ${id} no encontrada`,
      );
    }
  }

  async remove(id: number) {
    try {
      const entrada = await this.prisma.entradas_mercaderia.findUnique({
        where: { id },
        include: {
          detalle_entradas_mercaderia: true,
        },
      });

      if (!entrada) {
        throw new NotFoundException(
          `Entrada de mercadería con ID ${id} no encontrada`,
        );
      }

      return this.prisma.$transaction(async (prisma) => {
        for (const item of entrada.detalle_entradas_mercaderia) {
          await prisma.productos.update({
            where: { id: item.producto_id },
            data: {
              stock: {
                decrement: item.cantidad,
              },
            },
          });
        }

        return await prisma.entradas_mercaderia.delete({
          where: { id },
        });
      });
    } catch (error) {
      throw new NotFoundException(
        `Entrada de mercadería con ID ${id} no encontrada`,
      );
    }
  }
}
