import { Router } from "express";

const router = Router();

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import CheckValidation from "../middlewares/common/CheckValidator";

import RegisterValidator from "../middlewares/store/register/register.validation";
import NearbyValidation from "../middlewares/store/nearby/nearby.validation";

import ShowMyStore from "../middlewares/store/myStore";
import ShowStore from "../middlewares/store/show";
import RegisterStore from "../middlewares/store/register";
import UpdateStore from "../middlewares/store/update";
import DeleteStore from "../middlewares/store/delete";
import NearbyStore from "../middlewares/store/nearby";

router.post("/", RegisterValidator);
router.post("/near", NearbyValidation);

router.use(CheckValidation);

router.get("/:id", VerifyToken, ShowStore);
router.get("/my", VerifyToken, ShowMyStore);
router.post("/near", NearbyStore);
router.post("/", VerifyToken, RegisterStore);
router.patch("/update", VerifyToken, UpdateStore);
router.delete("/delete", VerifyToken, DeleteStore);

export default router;
