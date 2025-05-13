import { Module } from '@nestjs/common';
import { DespachosController } from './despachos.controller';
import { DespachosService } from './despachos.service';
import { PedidosModule } from '../pedidos/pedidos.module';

@Module({
  imports: [PedidosModule],
  controllers: [DespachosController],
  providers: [DespachosService],
  exports: [DespachosService],
})
export class DespachosModule {}
