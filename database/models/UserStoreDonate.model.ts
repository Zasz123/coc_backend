import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import User from "./User.model";
import Store from "./Store.model";

@Table({
  timestamps: true,
})
export default class UserStoreDonate extends Model<UserStoreDonate> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Store)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  storeId!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  contributions!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Store)
  store!: Store;
}
