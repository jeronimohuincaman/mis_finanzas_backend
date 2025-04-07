import { IsBoolean, IsString } from "class-validator";

export class CreateConceptoMovimientoDto {

    @IsString()
    descripcion: string;

    @IsBoolean()
    activo: boolean;

}
