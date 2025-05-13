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
import { EntradasMercaderiaService } from './entradas-mercaderia.service';
import {
  CreateEntradaMercaderiaDto,
  CreateEntradaMercaderiaSchema,
  UpdateEntradaMercaderiaDto,
  UpdateEntradaMercaderiaSchema,
} from './dto/entrada-mercaderia.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('entradas-mercaderia')
@Controller('entradas-mercaderia')
export class EntradasMercaderiaController {
  constructor(
    private readonly entradasMercaderiaService: EntradasMercaderiaService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new merchandise entry' })
  @ApiResponse({
    status: 201,
    description: 'The merchandise entry has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateEntradaMercaderiaSchema))
  create(@Body() createEntradaMercaderiaDto: CreateEntradaMercaderiaDto) {
    return this.entradasMercaderiaService.create(createEntradaMercaderiaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all merchandise entries' })
  @ApiResponse({ status: 200, description: 'Return all merchandise entries.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.entradasMercaderiaService.findAll(paginationDto);
  }

  @Get('proveedor/:proveedorId')
  @ApiOperation({ summary: 'Get merchandise entries by supplier' })
  @ApiResponse({
    status: 200,
    description: 'Return merchandise entries by supplier.',
  })
  findByProveedor(
    @Param('proveedorId') proveedorId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.entradasMercaderiaService.findByProveedor(
      +proveedorId,
      paginationDto,
    );
  }

  @Get('fecha/:fecha')
  @ApiOperation({ summary: 'Get merchandise entries by date' })
  @ApiResponse({
    status: 200,
    description: 'Return merchandise entries by date.',
  })
  findByFecha(
    @Param('fecha') fecha: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.entradasMercaderiaService.findByFecha(fecha, paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a merchandise entry by id' })
  @ApiResponse({ status: 200, description: 'Return the merchandise entry.' })
  @ApiResponse({ status: 404, description: 'Merchandise entry not found.' })
  findOne(@Param('id') id: string) {
    return this.entradasMercaderiaService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a merchandise entry' })
  @ApiResponse({
    status: 200,
    description: 'The merchandise entry has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Merchandise entry not found.' })
  @UsePipes(new ZodValidationPipe(UpdateEntradaMercaderiaSchema))
  update(
    @Param('id') id: string,
    @Body() updateEntradaMercaderiaDto: UpdateEntradaMercaderiaDto,
  ) {
    return this.entradasMercaderiaService.update(
      +id,
      updateEntradaMercaderiaDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a merchandise entry' })
  @ApiResponse({
    status: 200,
    description: 'The merchandise entry has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Merchandise entry not found.' })
  remove(@Param('id') id: string) {
    return this.entradasMercaderiaService.remove(+id);
  }
}
