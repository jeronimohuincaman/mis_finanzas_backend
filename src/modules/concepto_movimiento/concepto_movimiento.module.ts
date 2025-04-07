import { Module } from '@nestjs/common';
import { ConceptoMovimientoService } from './concepto_movimiento.service';
import { ConceptoMovimientoController } from './concepto_movimiento.controller';

@Module({
  controllers: [ConceptoMovimientoController],
  providers: [ConceptoMovimientoService],
})
export class ConceptoMovimientoModule {}
