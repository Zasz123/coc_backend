import { createConnection } from "typeorm";
import ormConfig from "./config";

console.log(__dirname + "/entity/*.model.ts");

const connection = createConnection({
  ...ormConfig,
  logging: true,
  synchronize: true,
  entities: [__dirname + "/entity/*.model.ts"],
});

export default connection;
