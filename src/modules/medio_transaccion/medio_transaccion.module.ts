import { Module } from '@nestjs/common';
import { MedioTransaccionService } from './medio_transaccion.service';
import { MedioTransaccionController } from './medio_transaccion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { MedioTransaccion } from './entities/medio_transaccion.entity';

@Module({
  imports: [SequelizeModule.forFeature([MedioTransaccion])],
  controllers: [MedioTransaccionController],
  providers: [MedioTransaccionService],
})
export class MedioTransaccionModule { }
