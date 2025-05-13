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
import { PedidosService } from './pedidos.service';
import {
  CreatePedidoDto,
  CreatePedidoSchema,
  UpdatePedidoDto,
  UpdatePedidoSchema,
} from './dto/pedido.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('pedidos')
@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreatePedidoSchema))
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  create(@Body() createPedidoDto: CreatePedidoDto) {
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
  findOne(@Param('id') id: string) {
    return this.pedidosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an order' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  @UsePipes(new ZodValidationPipe(UpdatePedidoSchema))
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an order' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  remove(@Param('id') id: string) {
    return this.pedidosService.remove(+id);
  }
}
