import { Column, Model, PrimaryKey, AutoIncrement, Table, HasOne } from 'sequelize-typescript';
import { Fondo } from 'src/modules/fondo/entities/fondo.entity';

@Table({ tableName: 'concepto_movimiento', timestamps: true })
export class ConceptoMovimiento extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    idconcepto: number;

    @Column
    descripcion: string;

    @Column
    activo: boolean;

    @Column
    declare createdAt?: Date;

    @Column
    declare updatedAt?: Date;
}
