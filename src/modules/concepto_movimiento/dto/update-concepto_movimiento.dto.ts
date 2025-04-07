import { PartialType } from '@nestjs/mapped-types';
import { CreateConceptoMovimientoDto } from './create-concepto_movimiento.dto';

export class UpdateConceptoMovimientoDto extends PartialType(CreateConceptoMovimientoDto) {}
