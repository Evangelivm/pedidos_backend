import { Module } from '@nestjs/common';
import { CajaDiariaController } from './caja-diaria.controller';
import { CajaDiariaService } from './caja-diaria.service';

@Module({
  controllers: [CajaDiariaController],
  providers: [CajaDiariaService],
  exports: [CajaDiariaService],
})
export class CajaDiariaModule {}
