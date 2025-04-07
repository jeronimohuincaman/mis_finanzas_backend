import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFondoDto } from './dto/create-fondo.dto';
import { UpdateFondoDto } from './dto/update-fondo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Fondo } from './entities/fondo.entity';

@Injectable()
export class FondoService {
  constructor(
    @InjectModel(Fondo)
    private readonly fondoModel: typeof Fondo
  ) { }

  create(createFondoDto: Partial<CreateFondoDto>): Promise<Fondo> {
    return this.fondoModel.create(createFondoDto);
  }

  findAll(): Promise<Fondo[]> {
    return this.fondoModel.findAll();
  }

  findOne(id: number): Promise<Fondo | null> {
    return this.fondoModel.findByPk(id);
  }

  async update(id: number, updateFondoDto: UpdateFondoDto): Promise<Fondo | null> {
    const fondo = await this.fondoModel.findByPk(id);
    if (!fondo) throw new Error('No se encontró el fondo');
    return fondo.update(updateFondoDto);
  }

  async remove(id: number) {
    const fondo = await this.fondoModel.findByPk(id);
    if (!fondo) {
      throw new NotFoundException('Fondo no encontrado');
    }

    await fondo.destroy();

    return {
      success: true,
      message: 'Fondo eliminado correctamente',
    };
  }
}
