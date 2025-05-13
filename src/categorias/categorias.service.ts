import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    // Aseguramos que nombre existe ya que Zod ya validó que está presente
    const data = {
      nombre: createCategoriaDto.nombre,
      descripcion: createCategoriaDto.descripcion,
    };

    return this.prisma.categorias.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.categorias.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.categorias.count(),
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
    const categoria = await this.prisma.categorias.findUnique({
      where: { id },
    });

    if (!categoria) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }

    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    try {
      return await this.prisma.categorias.update({
        where: { id },
        data: updateCategoriaDto,
      });
    } catch (error) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.categorias.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
  }
}
