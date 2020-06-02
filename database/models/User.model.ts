import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
  HasOne,
  Default,
} from "sequelize-typescript";

import Location from "./Location.model";
import Store from "./Store.model";

@Table({
  timestamps: true,
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Store)
  @AllowNull(true)
  @Column(DataType.INTEGER)
  storeId?: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  accountId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.ENUM("normal", "shopkeeper"))
  type!: "normal" | "shopkeeper";

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  isInfected!: boolean;

  @HasMany(() => Location)
  location?: Location[];

  @HasOne(() => Store)
  store?: Store;
}
