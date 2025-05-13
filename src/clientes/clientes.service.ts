import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClienteDto, UpdateClienteDto } from './dto/cliente.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    // Construimos el objeto data explícitamente
    const data = {
      nombre: createClienteDto.nombre,
      tipo_documento: createClienteDto.tipo_documento,
      numero_documento: createClienteDto.numero_documento,
      direccion: createClienteDto.direccion,
      telefono: createClienteDto.telefono,
      email: createClienteDto.email,
      notas: createClienteDto.notas,
      activo: createClienteDto.activo,
    };

    return this.prisma.clientes.create({
      data,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit, orderBy, orderDirection } = paginationDto;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.clientes.findMany({
        skip,
        take: limit,
        orderBy: orderBy
          ? { [orderBy]: orderDirection }
          : { id: orderDirection },
      }),
      this.prisma.clientes.count(),
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

  async findByDocumento(numero: string) {
    const cliente = await this.prisma.clientes.findFirst({
      where: { numero_documento: numero },
    });

    if (!cliente) {
      throw new NotFoundException(
        `Cliente con documento ${numero} no encontrado`,
      );
    }

    return cliente;
  }

  async findOne(id: number) {
    const cliente = await this.prisma.clientes.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }

    return cliente;
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    try {
      // Para update podemos pasar el DTO directamente ya que es partial()
      return await this.prisma.clientes.update({
        where: { id },
        data: updateClienteDto,
      });
    } catch (error) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.clientes.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
  }
}
