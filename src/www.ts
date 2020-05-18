import app from "./app";
import * as http from "http";
import * as dotenv from "dotenv";
dotenv.config();

import dbConnection from "../database/connections";

const startServer = async () => {
  await dbConnection(true, true);

  const port = process.env.PORT || 3000;

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
};

startServer();
