import { Module } from '@nestjs/common';
import { MedioTransaccionService } from './medio_transaccion.service';
import { MedioTransaccionController } from './medio_transaccion.controller';

@Module({
  controllers: [MedioTransaccionController],
  providers: [MedioTransaccionService],
})
export class MedioTransaccionModule {}
