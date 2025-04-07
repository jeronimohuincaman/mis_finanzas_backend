import { Inject, Injectable } from '@nestjs/common';
import { CreateConceptoMovimientoDto } from './dto/create-concepto_movimiento.dto';
import { UpdateConceptoMovimientoDto } from './dto/update-concepto_movimiento.dto';
import { ConceptoMovimiento } from './entities/concepto_movimiento.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ConceptoMovimientoService {
  constructor(
    @InjectModel(ConceptoMovimiento)
    private readonly conceptoMovimientoModel: typeof ConceptoMovimiento,
  ) { }

  create(createConceptoMovimientoDto: Partial<CreateConceptoMovimientoDto>): Promise<ConceptoMovimiento> {
    return this.conceptoMovimientoModel.create(createConceptoMovimientoDto);
  }

  findAll(): Promise<ConceptoMovimiento[]> {
    return this.conceptoMovimientoModel.findAll();
  }

  findOne(id: number): Promise<ConceptoMovimiento | null> {
    return this.conceptoMovimientoModel.findByPk(id);
  }

  async update(id: number, updateConceptoMovimientoDto: UpdateConceptoMovimientoDto): Promise<ConceptoMovimiento | null> {
    const conceptoMovimiento = await this.conceptoMovimientoModel.findByPk(id);
    if (!conceptoMovimiento) throw new Error('No se encontró el concepto de movimiento');
    return conceptoMovimiento.update(updateConceptoMovimientoDto);
  }

  async remove(id: number) {
    const conceptoMovimiento = await this.conceptoMovimientoModel.findByPk(id);
    if (!conceptoMovimiento) {
      throw new Error('Concepto de movimiento no encontrado');
    }

    await conceptoMovimiento.destroy();

    return {
      success: true,
      message: 'Concepto de movimiento eliminado correctamente',
    };
  }
}
