import { Router } from "express";

const router = Router();

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import CheckValidation from "../middlewares/common/CheckValidator";

import RegisterValidator from "../middlewares/store/register/register.validation";

import RegisterStore from "../middlewares/store/register";
import UpdateStore from "../middlewares/store/update";
import DeleteStore from "../middlewares/store/delete";

router.post("/", RegisterValidator);

router.use(CheckValidation);

router.post("/", VerifyToken, RegisterStore);
router.patch("/update", VerifyToken, UpdateStore);
router.delete("/delete", VerifyToken, DeleteStore);

export default router;
