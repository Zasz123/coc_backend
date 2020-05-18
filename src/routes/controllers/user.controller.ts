import { Router } from "express";

const router = Router();

import MakeToken from "../middlewares/user/jwt/makeToken";
import VerifyToken from "../middlewares/user/jwt/verifyToken";

import Login from "../middlewares/user/login";
import Register from "../middlewares/user/register";

router.post("/login", Login, MakeToken);
router.post("/register", Register);

export default router;
