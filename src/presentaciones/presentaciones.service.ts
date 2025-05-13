import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreatePresentacionDto,
  UpdatePresentacionDto,
} from './dto/presentacion.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PresentacionesService {
  constructor(private prisma: PrismaService) {}

  async create(createPresentacionDto: CreatePresentacionDto) {
    // Construimos el objeto data explícitamente
    const data = {
      nombre: createPresentacionDto.nombre,
      descripcion: createPresentacionDto.descripcion,
    };

    return this.prisma.presentaciones.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.presentaciones.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.presentaciones.count(),
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
    const presentacion = await this.prisma.presentaciones.findUnique({
      where: { id },
    });

    if (!presentacion) {
      throw new NotFoundException(`Presentación con ID ${id} no encontrada`);
    }

    return presentacion;
  }

  async update(id: number, updatePresentacionDto: UpdatePresentacionDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updatePresentacionDto.nombre !== undefined) {
        data.nombre = updatePresentacionDto.nombre;
      }
      if (updatePresentacionDto.descripcion !== undefined) {
        data.descripcion = updatePresentacionDto.descripcion;
      }

      return await this.prisma.presentaciones.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`Presentación con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.presentaciones.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Presentación con ID ${id} no encontrada`);
    }
  }
}
