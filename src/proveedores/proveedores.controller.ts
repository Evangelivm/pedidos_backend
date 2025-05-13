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
import { ProveedoresService } from './proveedores.service';
import {
  CreateProveedorDto,
  CreateProveedorSchema,
  UpdateProveedorDto,
  UpdateProveedorSchema,
} from './dto/proveedor.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('proveedores')
@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new supplier' })
  @ApiResponse({
    status: 201,
    description: 'The supplier has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateProveedorSchema))
  create(@Body() createProveedorDto: CreateProveedorDto) {
    return this.proveedoresService.create(createProveedorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all suppliers' })
  @ApiResponse({ status: 200, description: 'Return all suppliers.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  findAll(@Query() paginationDto: PaginationDto) {
    return this.proveedoresService.findAll(paginationDto);
  }

  @Get('ruc/:ruc')
  @ApiOperation({ summary: 'Get a supplier by RUC' })
  @ApiResponse({ status: 200, description: 'Return the supplier.' })
  @ApiResponse({ status: 404, description: 'Supplier not found.' })
  findByRuc(@Param('ruc') ruc: string) {
    return this.proveedoresService.findByRuc(ruc);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a supplier by id' })
  @ApiResponse({ status: 200, description: 'Return the supplier.' })
  @ApiResponse({ status: 404, description: 'Supplier not found.' })
  findOne(@Param('id') id: string) {
    return this.proveedoresService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a supplier' })
  @ApiResponse({
    status: 200,
    description: 'The supplier has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Supplier not found.' })
  @UsePipes(new ZodValidationPipe(UpdateProveedorSchema))
  update(
    @Param('id') id: string,
    @Body() updateProveedorDto: UpdateProveedorDto,
  ) {
    return this.proveedoresService.update(+id, updateProveedorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a supplier' })
  @ApiResponse({
    status: 200,
    description: 'The supplier has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Supplier not found.' })
  remove(@Param('id') id: string) {
    return this.proveedoresService.remove(+id);
  }
}
