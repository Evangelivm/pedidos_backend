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
  Patch,
} from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import {
  CreatePedidoDto,
  CreatePedidoSchema,
  UpdatePedidoDto,
  UpdatePedidoSchema,
  UpdateClientePedidoSchema,
  UpdateClientePedidoDto,
} from './dto/pedido.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { number } from 'zod';
import { ParseIntPipe } from '@nestjs/common';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  create(
    @Body(new ZodValidationPipe(CreatePedidoSchema))
    createPedidoDto: CreatePedidoDto,
  ) {
    return this.pedidosService.create(createPedidoDto);
  }

  @Get()
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Return all orders.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pedidosService.findAll(paginationDto);
  }

  @Get('cliente/:clienteId')
  @ApiOperation({ summary: 'Get orders by client' })
  @ApiResponse({ status: 200, description: 'Return orders by client.' })
  findByCliente(
    @Param('clienteId') clienteId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.pedidosService.findByCliente(+clienteId, paginationDto);
  }

  @Get('numero/:numero')
  @ApiOperation({ summary: 'Get an order by number' })
  @ApiResponse({ status: 200, description: 'Return the order.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  findByNumero(@Param('numero') numero: string) {
    return this.pedidosService.findByNumero(numero);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order by id' })
  @ApiResponse({ status: 200, description: 'Return the order.' })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an order' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(UpdatePedidoSchema))
    updatePedidoDto: UpdatePedidoDto,
  ) {
    return this.pedidosService.update(id, updatePedidoDto);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update the client id for an order' })
  @ApiResponse({
    status: 200,
    description: 'The client id has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  updateCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(UpdateClientePedidoSchema))
    updateClientePedidoDto: UpdateClientePedidoDto,
  ) {
    return this.pedidosService.updateCliente(
      id,
      updateClientePedidoDto.cliente_id,
    );
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pedidosService.remove(+id);
  }
}
