import { Router } from "express";

const router = Router();

import userController from "./controllers/user.controller";
import locationController from "./controllers/location.controller";

router.use("/user", userController);
router.use("/location", locationController);

export default router;
