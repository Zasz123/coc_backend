import { createConnection } from "typeorm";
import ormConfig from "./config";

const connection = async (logging: boolean, synchronize: boolean) => {
  await createConnection({
    ...ormConfig,
    logging,
    synchronize,
    entities: [__dirname + "/entity/*.model.ts"],
  });
};

export default connection;
