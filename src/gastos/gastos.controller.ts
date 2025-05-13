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
import { GastosService } from './gastos.service';
import {
  CreateGastoDto,
  CreateGastoSchema,
  UpdateGastoDto,
  UpdateGastoSchema,
} from './dto/gasto.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('gastos')
@Controller('gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new expense' })
  @ApiResponse({
    status: 201,
    description: 'The expense has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateGastoSchema))
  create(@Body() createGastoDto: CreateGastoDto) {
    return this.gastosService.create(createGastoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all expenses' })
  @ApiResponse({ status: 200, description: 'Return all expenses.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.gastosService.findAll(paginationDto);
  }

  @Get('fecha/:fecha')
  @ApiOperation({ summary: 'Get expenses by date' })
  @ApiResponse({ status: 200, description: 'Return expenses by date.' })
  findByFecha(
    @Param('fecha') fecha: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.gastosService.findByFecha(fecha, paginationDto);
  }

  @Get('tipo/:tipo')
  @ApiOperation({ summary: 'Get expenses by type' })
  @ApiResponse({ status: 200, description: 'Return expenses by type.' })
  findByTipo(
    @Param('tipo') tipo: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.gastosService.findByTipo(tipo as any, paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an expense by id' })
  @ApiResponse({ status: 200, description: 'Return the expense.' })
  @ApiResponse({ status: 404, description: 'Expense not found.' })
  findOne(@Param('id') id: string) {
    return this.gastosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an expense' })
  @ApiResponse({
    status: 200,
    description: 'The expense has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Expense not found.' })
  @UsePipes(new ZodValidationPipe(UpdateGastoSchema))
  update(@Param('id') id: string, @Body() updateGastoDto: UpdateGastoDto) {
    return this.gastosService.update(+id, updateGastoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an expense' })
  @ApiResponse({
    status: 200,
    description: 'The expense has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Expense not found.' })
  remove(@Param('id') id: string) {
    return this.gastosService.remove(+id);
  }
}
