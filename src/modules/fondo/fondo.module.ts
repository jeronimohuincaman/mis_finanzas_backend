import { Module } from '@nestjs/common';
import { FondoService } from './fondo.service';
import { FondoController } from './fondo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fondo } from './entities/fondo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Fondo])],
  controllers: [FondoController],
  providers: [FondoService],
})
export class FondoModule {}
