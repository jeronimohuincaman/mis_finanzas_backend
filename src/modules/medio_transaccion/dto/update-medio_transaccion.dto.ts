import { PartialType } from '@nestjs/mapped-types';
import { CreateMedioTransaccionDto } from './create-medio_transaccion.dto';

export class UpdateMedioTransaccionDto extends PartialType(CreateMedioTransaccionDto) {}
