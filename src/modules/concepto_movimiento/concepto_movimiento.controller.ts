import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConceptoMovimientoService } from './concepto_movimiento.service';
import { CreateConceptoMovimientoDto } from './dto/create-concepto_movimiento.dto';
import { UpdateConceptoMovimientoDto } from './dto/update-concepto_movimiento.dto';

@Controller('concepto-movimiento')
export class ConceptoMovimientoController {
  constructor(private readonly conceptoMovimientoService: ConceptoMovimientoService) {}

  @Post()
  create(@Body() createConceptoMovimientoDto: CreateConceptoMovimientoDto) {
    return this.conceptoMovimientoService.create(createConceptoMovimientoDto);
  }

  @Get()
  findAll() {
    return this.conceptoMovimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.conceptoMovimientoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConceptoMovimientoDto: UpdateConceptoMovimientoDto) {
    return this.conceptoMovimientoService.update(+id, updateConceptoMovimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.conceptoMovimientoService.remove(+id);
  }
}
