import { Router } from "express";

const router = Router();

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import InsertLocation from "../middlewares/location/insertLocation";
import ShowMyLocation from "../middlewares/location/showMyLocation";

router.post("/my", VerifyToken, ShowMyLocation);
router.post("/", VerifyToken, InsertLocation);

export default router;
