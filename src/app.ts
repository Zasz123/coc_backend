import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

const app: express.Application = express();

app.use(cors());
app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    name: "hello",
  });
});

export default app;
