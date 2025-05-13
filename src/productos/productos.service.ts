import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProductosService {
  constructor(private prisma: PrismaService) {}

  async create(createProductoDto: CreateProductoDto) {
    // Construimos el objeto data explícitamente
    const data = {
      codigo: createProductoDto.codigo,
      descripcion: createProductoDto.descripcion,
      categoria_id: createProductoDto.categoria_id,
      presentacion_id: createProductoDto.presentacion_id,
      precio_sugerido: createProductoDto.precio_sugerido,
      precio_minimo: createProductoDto.precio_minimo,
      stock: createProductoDto.stock,
      stock_minimo: createProductoDto.stock_minimo,
      imagen: createProductoDto.imagen,
      activo: createProductoDto.activo,
    };

    return this.prisma.productos.create({
      data,
      include: {
        categorias: true,
        presentaciones: true,
      },
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.productos.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          categorias: true,
          presentaciones: true,
        },
      }),
      this.prisma.productos.count(),
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

  async findByCategoria(categoriaId: number, paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    // const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.productos.findMany({
        where: {
          categoria_id: categoriaId,
        },
        // skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
        include: {
          categorias: true,
          presentaciones: true,
        },
      }),
      this.prisma.productos.count({
        where: {
          categoria_id: categoriaId,
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

  async findByCodigo(codigo: string) {
    const producto = await this.prisma.productos.findFirst({
      where: { codigo },
      include: {
        categorias: true,
        presentaciones: true,
      },
    });

    if (!producto) {
      throw new NotFoundException(
        `Producto con código ${codigo} no encontrado`,
      );
    }

    return producto;
  }

  async findOne(id: number) {
    const producto = await this.prisma.productos.findUnique({
      where: { id },
      include: {
        categorias: true,
        presentaciones: true,
      },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updateProductoDto.codigo !== undefined) {
        data.codigo = updateProductoDto.codigo;
      }
      if (updateProductoDto.descripcion !== undefined) {
        data.descripcion = updateProductoDto.descripcion;
      }
      if (updateProductoDto.categoria_id !== undefined) {
        data.categoria_id = updateProductoDto.categoria_id;
      }
      if (updateProductoDto.presentacion_id !== undefined) {
        data.presentacion_id = updateProductoDto.presentacion_id;
      }
      if (updateProductoDto.precio_sugerido !== undefined) {
        data.precio_sugerido = updateProductoDto.precio_sugerido;
      }
      if (updateProductoDto.precio_minimo !== undefined) {
        data.precio_minimo = updateProductoDto.precio_minimo;
      }
      if (updateProductoDto.stock !== undefined) {
        data.stock = updateProductoDto.stock;
      }
      if (updateProductoDto.stock_minimo !== undefined) {
        data.stock_minimo = updateProductoDto.stock_minimo;
      }
      if (updateProductoDto.imagen !== undefined) {
        data.imagen = updateProductoDto.imagen;
      }
      if (updateProductoDto.activo !== undefined) {
        data.activo = updateProductoDto.activo;
      }

      return await this.prisma.productos.update({
        where: { id },
        data,
        include: {
          categorias: true,
          presentaciones: true,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.productos.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
  }
}
