import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateFondoDto {
    @IsString()
    descripcion: string;

    @IsBoolean()
    activo: boolean;
}
