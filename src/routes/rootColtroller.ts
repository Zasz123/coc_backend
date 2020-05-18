import { Router } from "express";

const router = Router();

import userController from "./controllers/user.controller";

router.use("/user", (req, res) => {
  res.json({
    hello: "dsa",
  });
});

export default router;
