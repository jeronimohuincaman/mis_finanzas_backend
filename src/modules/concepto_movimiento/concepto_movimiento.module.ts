import { Module } from '@nestjs/common';
import { ConceptoMovimientoService } from './concepto_movimiento.service';
import { ConceptoMovimientoController } from './concepto_movimiento.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConceptoMovimiento } from './entities/concepto_movimiento.entity';

@Module({
    imports: [SequelizeModule.forFeature([ConceptoMovimiento])],
  controllers: [ConceptoMovimientoController],
  providers: [ConceptoMovimientoService],
})
export class ConceptoMovimientoModule {}
