import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import User from "./User.model";

@Table({
  timestamps: true,
})
export default class Location extends Model<Location> {
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
  @Column(DataType.DOUBLE)
  longitude!: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  latitude!: number;

  @BelongsTo(() => User, {
    onDelete: "CASCADE",
  })
  user!: User;
}
