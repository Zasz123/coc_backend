import { Router } from "express";

const router = Router();

import userController from "./controllers/user.controller";
import locationController from "./controllers/location.controller";
import storeController from "./controllers/store.controller";

router.use("/user", userController);
router.use("/location", locationController);
router.use("/store", storeController);

export default router;
