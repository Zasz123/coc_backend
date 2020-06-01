import {
  Table,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import User from "./User.model";

@Table({
  timestamps: true,
})
export default class Store extends Model<Store> {
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
  businessNumber!: string;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  latitude!: number;

  @AllowNull(false)
  @Column(DataType.DOUBLE)
  longitude!: number;

  @BelongsTo(() => User)
  user!: User;
}
