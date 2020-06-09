import { Router } from "express";

const router = Router();

import userController from "./controllers/user.controller";
import locationController from "./controllers/location.controller";
import storeController from "./controllers/store.controller";
import donateController from "./controllers/donate.controller";
import alamController from './controllers/alam.controller';

router.use("/user", userController);
router.use("/location", locationController);
router.use("/store", storeController);
router.use("/donate", donateController);
router.use("/alam", alamController);

export default router;
