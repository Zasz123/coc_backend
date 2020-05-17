import { ConnectionOptions } from "typeorm";

console.log(process.env.DB_USER);

const connectionOptions: ConnectionOptions = {
  type: "mysql",
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
};

export default connectionOptions;
