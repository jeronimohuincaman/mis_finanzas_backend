import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedioTransaccionService } from './medio_transaccion.service';
import { CreateMedioTransaccionDto } from './dto/create-medio_transaccion.dto';
import { UpdateMedioTransaccionDto } from './dto/update-medio_transaccion.dto';

@Controller('medio-transaccion')
export class MedioTransaccionController {
  constructor(private readonly medioTransaccionService: MedioTransaccionService) {}

  @Post()
  create(@Body() createMedioTransaccionDto: CreateMedioTransaccionDto) {
    return this.medioTransaccionService.create(createMedioTransaccionDto);
  }

  @Get()
  findAll() {
    return this.medioTransaccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medioTransaccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedioTransaccionDto: UpdateMedioTransaccionDto) {
    return this.medioTransaccionService.update(+id, updateMedioTransaccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medioTransaccionService.remove(+id);
  }
}
