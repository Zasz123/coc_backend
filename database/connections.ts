import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: "mysql",
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  timezone: "+09:00",
  define: {
    charset: "utf8",
  },
  // logging: true,
});

const connection = async (synchronize: boolean) => {
  sequelize.addModels([__dirname + "/models/*.model.ts"]);
  const connect = await sequelize.sync({ force: synchronize });

  if (!connect) {
    console.log("DB connect Error");
  } else {
    console.log("DB connect");
  }
};

export default connection;
