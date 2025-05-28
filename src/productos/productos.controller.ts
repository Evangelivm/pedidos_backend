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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { ProductosService } from './productos.service';
import {
  CreateProductoDto,
  UpdateProductoDto,
  CreateProductoSchema,
  UpdateProductoSchema,
} from './dto/producto.dto';
import { ZodValidationPipe } from '../common/zod/zod-validation.pipe';
import { CoerciveProductoPipe } from './pipes/coercive-producto.pipe';
import { CoerciveUpdateProductoPipe } from './pipes/coercive-update-producto.pipe';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ParseIntPipe } from '@nestjs/common';

// Configuración de almacenamiento para Multer
const multerConfig = {
  storage: diskStorage({
    destination: join(__dirname, '..', '..', 'uploads', 'productos'),
    filename: (req, file, callback) => {
      const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      return callback(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
};

@ApiTags('productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @ApiOperation({ summary: 'Crear un producto con imagen' })
  @ApiResponse({
    status: 201,
    description: 'Producto creado exitosamente.',
  })
  @UseInterceptors(FileInterceptor('imagen', multerConfig))
  @Post()
  create(
    @Body(new ZodValidationPipe(CreateProductoSchema))
    createProductoDto: CreateProductoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('Datos recibidos:', createProductoDto);
    console.log('Archivo recibido:', file);

    const productoConImagen = {
      ...createProductoDto,
      imagen: file ? `/uploads/productos/${file.filename}` : undefined,
    };

    return this.productosService.create(productoConImagen);
  }

  @ApiOperation({ summary: 'Obtener todos los productos' })
  @ApiResponse({ status: 200, description: 'Lista de productos.' })
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productosService.findAll(paginationDto);
  }

  @ApiOperation({ summary: 'Buscar productos por categoría' })
  @ApiResponse({
    status: 200,
    description: 'Productos encontrados por categoría.',
  })
  @Get('categoria/:categoriaId')
  findByCategoria(
    @Param('categoriaId', ParseIntPipe) categoriaId: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.productosService.findByCategoria(categoriaId, paginationDto);
  }

  @ApiOperation({ summary: 'Buscar producto por código' })
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @Get('codigo/:codigo')
  findByCodigo(@Param('codigo') codigo: string) {
    return this.productosService.findByCodigo(codigo);
  }

  @ApiOperation({ summary: 'Buscar producto por ID' })
  @ApiResponse({ status: 200, description: 'Producto encontrado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findOne(id);
  }

  @ApiOperation({ summary: 'Actualizar un producto' })
  @ApiResponse({ status: 200, description: 'Producto actualizado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @UseInterceptors(FileInterceptor('imagen', multerConfig))
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(UpdateProductoSchema))
    updateProductoDto: UpdateProductoDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('Datos recibidos:', updateProductoDto);
    console.log('Archivo recibido:', file);

    // Si se proporciona un nuevo archivo, actualiza la imagen
    if (file) {
      updateProductoDto.imagen = `/uploads/productos/${file.filename}`;
    }

    return this.productosService.update(id, updateProductoDto);
  }

  @ApiOperation({ summary: 'Eliminar un producto' })
  @ApiResponse({ status: 200, description: 'Producto eliminado.' })
  @ApiResponse({ status: 404, description: 'Producto no encontrado.' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.remove(id);
  }
}
