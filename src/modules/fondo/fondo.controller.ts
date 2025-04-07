import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FondoService } from './fondo.service';
import { CreateFondoDto } from './dto/create-fondo.dto';
import { UpdateFondoDto } from './dto/update-fondo.dto';
import { Fondo } from './entities/fondo.entity';

@Controller('fondo')
export class FondoController {
  constructor(private readonly fondoService: FondoService) { }

  @Post()
  create(@Body() createFondoDto: CreateFondoDto): Promise<Fondo> {
    return this.fondoService.create(createFondoDto);
  }

  @Get()
  findAll(): Promise<Fondo[]> {
    return this.fondoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Fondo | null> {
    return this.fondoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFondoDto: UpdateFondoDto): Promise<Fondo | null> {
    return this.fondoService.update(+id, updateFondoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fondoService.remove(+id);
  }
}
