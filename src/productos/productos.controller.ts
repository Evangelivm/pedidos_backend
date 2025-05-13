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
import { ProductosService } from './productos.service';
import {
  CreateProductoDto,
  CreateProductoSchema,
  UpdateProductoDto,
  UpdateProductoSchema,
} from './dto/producto.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { PaginationDto, PaginationSchema } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
  })
  @UsePipes(new ZodValidationPipe(CreateProductoSchema))
  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  @UsePipes(new ZodValidationPipe(PaginationSchema))
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productosService.findAll(paginationDto);
  }

  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({ status: 200, description: 'Return products by category.' })
  @Get('categoria/:categoriaId')
  findByCategoria(
    @Param('categoriaId') categoriaId: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.productosService.findByCategoria(+categoriaId, paginationDto);
  }

  @ApiOperation({ summary: 'Get a product by code' })
  @ApiResponse({ status: 200, description: 'Return the product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Get('codigo/:codigo')
  findByCodigo(@Param('codigo') codigo: string) {
    return this.productosService.findByCodigo(codigo);
  }

  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({ status: 200, description: 'Return the product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @UsePipes(new ZodValidationPipe(UpdateProductoSchema))
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}
