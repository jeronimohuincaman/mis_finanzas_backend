import {
    Column,
    Model,
    PrimaryKey,
    AutoIncrement,
    Table,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import { Fondo } from '../../fondo/entities/fondo.entity';

@Table({ tableName: 'medio_transaccion', timestamps: false })
export class MedioTransaccion extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    idmediotransaccion: number;

    @Column
    descripcion: string;

    @Column
    es_credito: boolean;

    @ForeignKey(() => Fondo)
    @Column
    idfondo: number;

    @BelongsTo(() => Fondo)
    fondo: Fondo;
}
