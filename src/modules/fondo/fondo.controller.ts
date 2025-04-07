import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FondoService } from './fondo.service';
import { CreateFondoDto } from './dto/create-fondo.dto';
import { UpdateFondoDto } from './dto/update-fondo.dto';

@Controller('fondo')
export class FondoController {
  constructor(private readonly fondoService: FondoService) {}

  @Post()
  create(@Body() createFondoDto: CreateFondoDto) {
    return this.fondoService.create(createFondoDto);
  }

  @Get()
  findAll() {
    return this.fondoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fondoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFondoDto: UpdateFondoDto) {
    return this.fondoService.update(+id, updateFondoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fondoService.remove(+id);
  }
}
