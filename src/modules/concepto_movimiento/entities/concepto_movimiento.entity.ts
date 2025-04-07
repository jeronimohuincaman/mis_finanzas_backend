import { Column, Model, PrimaryKey, AutoIncrement, Table } from 'sequelize-typescript';

@Table({ tableName: 'concepto_movimiento', timestamps: false })
export class ConceptoMovimiento extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    idconcepto: number;

    @Column
    descripcion: string;
}
