import { 
    Table, 
    PrimaryKey, 
    AutoIncrement, 
    AllowNull, 
    Column, 
    DataType, 
    ForeignKey, 
    BelongsTo, 
    Model 
} from 'sequelize-typescript';
import User from './User.model';

@Table({
    timestamps: true
})
export default class Alam extends Model<Alam> {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    title!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    message!: string;

    @BelongsTo(() => User)
    user!: User
}