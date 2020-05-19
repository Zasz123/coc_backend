import { Router } from "express";

const router = Router();

import userController from "./controllers/user.controller";

router.use("/user", userController);

export default router;
