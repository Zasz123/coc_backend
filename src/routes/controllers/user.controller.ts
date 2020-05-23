import { Router, Request, Response } from "express";

const router = Router();

import MakeToken from "../middlewares/user/jwt/makeToken";
import VerifyToken from "../middlewares/user/jwt/verifyToken";

import Login from "../middlewares/user/login";
import Register from "../middlewares/user/register";

router.post("/login", Login, MakeToken);
router.post("/register", Register);

router.get("/myinfo", VerifyToken, (req: Request, res: Response) => {
  console.log(res.locals.user);
  res.json({
    success: true,
    info: res.locals.user,
  });
});

export default router;
