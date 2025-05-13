import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import {
  CreateClienteDto,
  CreateClienteSchema,
  UpdateClienteDto,
  UpdateClienteSchema,
} from './dto/cliente.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new client' })
  @ApiResponse({
    status: 201,
    description: 'The client has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateClienteSchema))
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all clients' })
  @ApiResponse({ status: 200, description: 'Return all clients.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.clientesService.findAll(paginationDto);
  }

  @Get('documento/:numero')
  @ApiOperation({ summary: 'Get a client by document number' })
  @ApiResponse({ status: 200, description: 'Return the client.' })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  findByDocumento(@Param('numero') numero: string) {
    return this.clientesService.findByDocumento(numero);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a client by id' })
  @ApiResponse({ status: 200, description: 'Return the client.' })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  findOne(@Param('id') id: string) {
    return this.clientesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a client' })
  @ApiResponse({
    status: 200,
    description: 'The client has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  @UsePipes(new ZodValidationPipe(UpdateClienteSchema))
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a client' })
  @ApiResponse({
    status: 200,
    description: 'The client has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Client not found.' })
  remove(@Param('id') id: string) {
    return this.clientesService.remove(+id);
  }
}
