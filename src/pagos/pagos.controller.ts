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
import { PagosService } from './pagos.service';
import {
  CreatePagoDto,
  CreatePagoSchema,
  UpdatePagoDto,
  UpdatePagoSchema,
} from './dto/pago.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common';

@ApiTags('pagos')
@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payment' })
  @ApiResponse({
    status: 201,
    description: 'The payment has been successfully created.',
  })
  create(
    @Body(new ZodValidationPipe(CreatePagoSchema)) createPagoDto: CreatePagoDto,
  ) {
    return this.pagosService.create(createPagoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all payments' })
  @ApiResponse({ status: 200, description: 'Return all payments.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pagosService.findAll(paginationDto);
  }

  @Get('pedido/:pedidoId')
  @ApiOperation({ summary: 'Get payments by order' })
  @ApiResponse({ status: 200, description: 'Return payments by order.' })
  findByPedido(@Param('pedidoId') pedidoId: string) {
    return this.pagosService.findByPedido(+pedidoId);
  }

  @Get('fecha/:fecha')
  @ApiOperation({ summary: 'Get payments by date' })
  @ApiResponse({ status: 200, description: 'Return payments by date.' })
  findByFecha(
    @Param('fecha') fecha: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.pagosService.findByFecha(fecha, paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a payment by id' })
  @ApiResponse({ status: 200, description: 'Return the payment.' })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  findOne(@Param('id') id: string) {
    return this.pagosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a payment' })
  @ApiResponse({
    status: 200,
    description: 'The payment has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  @UsePipes(new ZodValidationPipe(UpdatePagoSchema))
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePagoDto: UpdatePagoDto,
  ) {
    return this.pagosService.update(id, updatePagoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a payment' })
  @ApiResponse({
    status: 200,
    description: 'The payment has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  remove(@Param('id') id: string) {
    return this.pagosService.remove(+id);
  }
}
