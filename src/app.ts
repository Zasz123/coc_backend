import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import * as helmet from "helmet";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

import ErrorMiddleware from "./routes/middlewares/error/errorMiddlewares";
import CustomError from "./routes/middlewares/error/customError";

import rootController from "./routes/rootColtroller";

const app: express.Application = express();

const dir = path.join(__dirname, "../public");

app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/", express.static(dir));

app.use("/api", rootController);

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    next(new CustomError({ name: "Not_Found" }));
  }
);

app.use(ErrorMiddleware);

export default app;
