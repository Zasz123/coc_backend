import { Router, Request, Response } from "express";

const router = Router();

import CheckValidation from "../middlewares/common/CheckValidator";

// token middlewares
import MakeToken from "../middlewares/user/jwt/makeToken";
import VerifyToken from "../middlewares/user/jwt/verifyToken";

import Login from "../middlewares/user/login";
import Register from "../middlewares/user/register";
import Update from "../middlewares/user/update";

// validations
import LoginValidation from "../middlewares/user/login/login.validation";
import RegisterValidation from "../middlewares/user/register/register.validation";

router.post("/login", LoginValidation);
router.post("/register", RegisterValidation);

router.use(CheckValidation);

router.post("/login", Login, MakeToken);
router.post("/register", Register);
router.patch("/update", VerifyToken, Update);

export default router;
