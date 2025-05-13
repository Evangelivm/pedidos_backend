import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProveedorDto, UpdateProveedorDto } from './dto/proveedor.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ProveedoresService {
  constructor(private prisma: PrismaService) {}

  async create(createProveedorDto: CreateProveedorDto) {
    // Construimos el objeto data explícitamente
    const data = {
      nombre: createProveedorDto.nombre,
      ruc: createProveedorDto.ruc,
      direccion: createProveedorDto.direccion,
      telefono: createProveedorDto.telefono,
      email: createProveedorDto.email,
      contacto: createProveedorDto.contacto,
      notas: createProveedorDto.notas,
      activo: createProveedorDto.activo,
    };

    return this.prisma.proveedores.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.proveedores.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.proveedores.count(),
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

  async findByRuc(ruc: string) {
    const proveedor = await this.prisma.proveedores.findFirst({
      where: { ruc },
    });

    if (!proveedor) {
      throw new NotFoundException(`Proveedor con RUC ${ruc} no encontrado`);
    }

    return proveedor;
  }

  async findOne(id: number) {
    const proveedor = await this.prisma.proveedores.findUnique({
      where: { id },
    });

    if (!proveedor) {
      throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    }

    return proveedor;
  }

  async update(id: number, updateProveedorDto: UpdateProveedorDto) {
    try {
      // Construimos el objeto data explícitamente
      const data: any = {};

      if (updateProveedorDto.nombre !== undefined) {
        data.nombre = updateProveedorDto.nombre;
      }
      if (updateProveedorDto.ruc !== undefined) {
        data.ruc = updateProveedorDto.ruc;
      }
      if (updateProveedorDto.direccion !== undefined) {
        data.direccion = updateProveedorDto.direccion;
      }
      if (updateProveedorDto.telefono !== undefined) {
        data.telefono = updateProveedorDto.telefono;
      }
      if (updateProveedorDto.email !== undefined) {
        data.email = updateProveedorDto.email;
      }
      if (updateProveedorDto.contacto !== undefined) {
        data.contacto = updateProveedorDto.contacto;
      }
      if (updateProveedorDto.notas !== undefined) {
        data.notas = updateProveedorDto.notas;
      }
      if (updateProveedorDto.activo !== undefined) {
        data.activo = updateProveedorDto.activo;
      }

      return await this.prisma.proveedores.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.proveedores.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Proveedor con ID ${id} no encontrado`);
    }
  }
}
