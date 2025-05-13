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
import { DespachosService } from './despachos.service';
import {
  CreateDespachoDto,
  CreateDespachoSchema,
  UpdateDespachoDto,
  UpdateDespachoSchema,
} from './dto/despacho.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('despachos')
@Controller('despachos')
export class DespachosController {
  constructor(private readonly despachosService: DespachosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new dispatch' })
  @ApiResponse({
    status: 201,
    description: 'The dispatch has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateDespachoSchema))
  async create(@Body() createDespachoDto: CreateDespachoDto) {
    return await this.despachosService.create(createDespachoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all dispatches' })
  @ApiResponse({ status: 200, description: 'Return all dispatches.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  async findAll(@Query() paginationDto: PaginationDto) {
    return await this.despachosService.findAll(paginationDto);
  }

  @Get('pedido/:pedidoId')
  @ApiOperation({ summary: 'Get dispatches by order' })
  @ApiResponse({ status: 200, description: 'Return dispatches by order.' })
  async findByPedido(@Param('pedidoId') pedidoId: string) {
    return await this.despachosService.findByPedido(+pedidoId);
  }

  @Get('estado/:estado')
  @ApiOperation({ summary: 'Get dispatches by status' })
  @ApiResponse({ status: 200, description: 'Return dispatches by status.' })
  async findByEstado(
    @Param('estado') estado: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return await this.despachosService.findByEstado(
      estado as any,
      paginationDto,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a dispatch by id' })
  @ApiResponse({ status: 200, description: 'Return the dispatch.' })
  @ApiResponse({ status: 404, description: 'Dispatch not found.' })
  async findOne(@Param('id') id: string) {
    return await this.despachosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a dispatch' })
  @ApiResponse({
    status: 200,
    description: 'The dispatch has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Dispatch not found.' })
  @UsePipes(new ZodValidationPipe(UpdateDespachoSchema))
  async update(
    @Param('id') id: string,
    @Body() updateDespachoDto: UpdateDespachoDto,
  ) {
    return await this.despachosService.update(+id, updateDespachoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a dispatch' })
  @ApiResponse({
    status: 200,
    description: 'The dispatch has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Dispatch not found.' })
  async remove(@Param('id') id: string) {
    return await this.despachosService.remove(+id);
  }
}
