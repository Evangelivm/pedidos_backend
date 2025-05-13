import { Module } from '@nestjs/common';
import { EntradasMercaderiaController } from './entradas-mercaderia.controller';
import { EntradasMercaderiaService } from './entradas-mercaderia.service';
import { ProveedoresModule } from '../proveedores/proveedores.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [ProveedoresModule, ProductosModule],
  controllers: [EntradasMercaderiaController],
  providers: [EntradasMercaderiaService],
  exports: [EntradasMercaderiaService],
})
export class EntradasMercaderiaModule {}
