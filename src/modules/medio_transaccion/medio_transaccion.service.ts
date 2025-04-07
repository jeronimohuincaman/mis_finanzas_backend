import { Injectable } from '@nestjs/common';
import { CreateMedioTransaccionDto } from './dto/create-medio_transaccion.dto';
import { UpdateMedioTransaccionDto } from './dto/update-medio_transaccion.dto';
import { InjectModel } from '@nestjs/sequelize';
import { MedioTransaccion } from './entities/medio_transaccion.entity';

@Injectable()
export class MedioTransaccionService {

  constructor(
    @InjectModel(MedioTransaccion)
    private readonly medioTransaccionNodel: typeof MedioTransaccion
  ) { }

  create(createMedioTransaccionDto: Partial<CreateMedioTransaccionDto>): Promise<MedioTransaccion> {
    return this.medioTransaccionNodel.create(createMedioTransaccionDto);
  }

  findAll(): Promise<MedioTransaccion[]> {
    return this.medioTransaccionNodel.findAll();
  }

  findOne(id: number): Promise<MedioTransaccion | null> {
    return this.medioTransaccionNodel.findByPk(id);
  }

  async update(id: number, updateMedioTransaccionDto: UpdateMedioTransaccionDto): Promise<MedioTransaccion | null> {
    const medioTransaccion = await this.medioTransaccionNodel.findByPk(id);
    if (!medioTransaccion) throw new Error('No se encontró el concepto de movimiento');
    return medioTransaccion.update(updateMedioTransaccionDto);
  }

  async remove(id: number) {
    const medioTransaccion = await this.medioTransaccionNodel.findByPk(id);

    if (!medioTransaccion) throw new Error('No se encontro el medio de transaccion');

    await medioTransaccion.destroy();

    return {
      succes: true,
      message: 'Medio de transaccion eliminado con exito'
    }
  }
}
