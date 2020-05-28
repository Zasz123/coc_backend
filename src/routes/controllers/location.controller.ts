import { Router } from "express";

const router = Router();

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import InsertLocation from "../middlewares/location/insertLocation";
import ShowMyLocation from "../middlewares/location/showMyLocation";
import CheckLocation from "../middlewares/location/locationCheck";

router.post("/", VerifyToken, CheckLocation, InsertLocation);
router.post("/my", VerifyToken, ShowMyLocation);

export default router;
