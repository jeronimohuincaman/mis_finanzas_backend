import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateMedioTransaccionDto {

    @IsString()
    descripcion: string;

    @IsNumber()
    idfondo: number;

    @IsBoolean()
    es_credito: boolean;

    @IsBoolean()
    activo: boolean;

}
