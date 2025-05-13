import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CajaDiariaService } from './caja-diaria.service';
import {
  AbrirCajaDto,
  AbrirCajaSchema,
  CerrarCajaDto,
  CerrarCajaSchema,
  MovimientoCajaDto,
  MovimientoCajaSchema,
} from './dto/caja-diaria.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('caja-diaria')
@Controller('caja-diaria')
export class CajaDiariaController {
  constructor(private readonly cajaDiariaService: CajaDiariaService) {}

  @Post('abrir')
  @ApiOperation({ summary: 'Open cash register' })
  @ApiResponse({
    status: 201,
    description: 'The cash register has been successfully opened.',
  })
  @UsePipes(new ZodValidationPipe(AbrirCajaSchema))
  abrirCaja(@Body() abrirCajaDto: AbrirCajaDto) {
    return this.cajaDiariaService.abrirCaja(abrirCajaDto);
  }

  @Put(':id/cerrar')
  @ApiOperation({ summary: 'Close cash register' })
  @ApiResponse({
    status: 200,
    description: 'The cash register has been successfully closed.',
  })
  @UsePipes(new ZodValidationPipe(CerrarCajaSchema))
  cerrarCaja(@Param('id') id: string, @Body() cerrarCajaDto: CerrarCajaDto) {
    return this.cajaDiariaService.cerrarCaja(+id, cerrarCajaDto);
  }

  @Post(':id/movimiento')
  @ApiOperation({ summary: 'Add movement to cash register' })
  @ApiResponse({
    status: 201,
    description: 'The movement has been successfully added.',
  })
  @UsePipes(new ZodValidationPipe(MovimientoCajaSchema))
  agregarMovimiento(
    @Param('id') id: string,
    @Body() movimientoCajaDto: MovimientoCajaDto,
  ) {
    return this.cajaDiariaService.agregarMovimiento(+id, movimientoCajaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cash registers' })
  @ApiResponse({ status: 200, description: 'Return all cash registers.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.cajaDiariaService.findAll(paginationDto);
  }

  @Get('actual')
  @ApiOperation({ summary: 'Get current cash register' })
  @ApiResponse({
    status: 200,
    description: 'Return the current cash register.',
  })
  @ApiResponse({ status: 404, description: 'No open cash register found.' })
  findActual() {
    return this.cajaDiariaService.findActual();
  }

  @Get('fecha/:fecha')
  @ApiOperation({ summary: 'Get cash register by date' })
  @ApiResponse({ status: 200, description: 'Return the cash register.' })
  @ApiResponse({ status: 404, description: 'Cash register not found.' })
  findByFecha(@Param('fecha') fecha: string) {
    return this.cajaDiariaService.findByFecha(fecha);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cash register by id' })
  @ApiResponse({ status: 200, description: 'Return the cash register.' })
  @ApiResponse({ status: 404, description: 'Cash register not found.' })
  findOne(@Param('id') id: string) {
    return this.cajaDiariaService.findOne(+id);
  }

  @Get(':id/movimientos')
  @ApiOperation({ summary: 'Get movements of a cash register' })
  @ApiResponse({ status: 200, description: 'Return the movements.' })
  @ApiResponse({ status: 404, description: 'Cash register not found.' })
  findMovimientos(
    @Param('id') id: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.cajaDiariaService.findMovimientos(+id, paginationDto);
  }
}
