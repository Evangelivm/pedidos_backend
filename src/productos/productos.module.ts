import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { CategoriasModule } from '../categorias/categorias.module';
import { PresentacionesModule } from '../presentaciones/presentaciones.module';

@Module({
  imports: [CategoriasModule, PresentacionesModule],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
