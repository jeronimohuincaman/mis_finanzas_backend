import { Injectable } from '@nestjs/common';
import { CreateMedioTransaccionDto } from './dto/create-medio_transaccion.dto';
import { UpdateMedioTransaccionDto } from './dto/update-medio_transaccion.dto';

@Injectable()
export class MedioTransaccionService {
  create(createMedioTransaccionDto: CreateMedioTransaccionDto) {
    return 'This action adds a new medioTransaccion';
  }

  findAll() {
    return `This action returns all medioTransaccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medioTransaccion`;
  }

  update(id: number, updateMedioTransaccionDto: UpdateMedioTransaccionDto) {
    return `This action updates a #${id} medioTransaccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} medioTransaccion`;
  }
}
