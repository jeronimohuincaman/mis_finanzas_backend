import { Injectable } from '@nestjs/common';
import { CreateConceptoMovimientoDto } from './dto/create-concepto_movimiento.dto';
import { UpdateConceptoMovimientoDto } from './dto/update-concepto_movimiento.dto';

@Injectable()
export class ConceptoMovimientoService {
  create(createConceptoMovimientoDto: CreateConceptoMovimientoDto) {
    return 'This action adds a new conceptoMovimiento';
  }

  findAll() {
    return `This action returns all conceptoMovimiento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conceptoMovimiento`;
  }

  update(id: number, updateConceptoMovimientoDto: UpdateConceptoMovimientoDto) {
    return `This action updates a #${id} conceptoMovimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} conceptoMovimiento`;
  }
}
