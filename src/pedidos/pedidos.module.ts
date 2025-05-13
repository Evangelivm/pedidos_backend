import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { ClientesModule } from '../clientes/clientes.module';
import { ProductosModule } from '../productos/productos.module';

@Module({
  imports: [ClientesModule, ProductosModule],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [PedidosService],
})
export class PedidosModule {}
