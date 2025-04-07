import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Fondo } from './modules/fondo/entities/fondo.entity';
import { MedioTransaccion } from './modules/medio_transaccion/entities/medio_transaccion.entity';
import { ConceptoMovimientoModule } from './modules/concepto_movimiento/concepto_movimiento.module';
import { ConceptoMovimiento } from './modules/concepto_movimiento/entities/concepto_movimiento.entity';
import { FondoModule } from './modules/fondo/fondo.module';
import { MedioTransaccionModule } from './modules/medio_transaccion/medio_transaccion.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? +process.env.DB_PORT : 3000,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      ConceptoMovimiento,
      Fondo,
      MedioTransaccion,
    ]),
    FondoModule,
    ConceptoMovimientoModule,
    MedioTransaccionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
