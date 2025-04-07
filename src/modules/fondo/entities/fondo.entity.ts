import { Column, Model, PrimaryKey, AutoIncrement, Table, HasMany } from 'sequelize-typescript';
import { MedioTransaccion } from '../../medio_transaccion/entities/medio_transaccion.entity';

@Table({ tableName: 'fondo', timestamps: false })
export class Fondo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    idfondo: number;

    @Column
    descripcion: string;

    @Column
    activo: boolean;

    @HasMany(() => MedioTransaccion)
    mediosTransaccion: MedioTransaccion[];
}
