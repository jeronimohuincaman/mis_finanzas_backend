import { Column, Model, PrimaryKey, AutoIncrement, Table, HasMany } from 'sequelize-typescript';
import { MedioTransaccion } from '../../medio_transaccion/entities/medio_transaccion.entity';

@Table({ tableName: 'fondo', timestamps: true })
export class Fondo extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    idfondo: number;

    @Column
    descripcion: string;

    @Column
    activo: boolean;

    @Column
    declare createdAt?: Date;

    @Column
    declare updatedAt?: Date;

    @HasMany(() => MedioTransaccion)
    mediosTransaccion: MedioTransaccion[];
}
