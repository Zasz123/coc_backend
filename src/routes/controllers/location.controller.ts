import { Router } from "express";

const router = Router();

import CheckValidation from "../middlewares/common/CheckValidator";

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import InsertLocation from "../middlewares/location/insertLocation";
import ShowMyLocation from "../middlewares/location/showMyLocation";
import CheckLocation from "../middlewares/location/insertLocation/locationCheck";

import InsertValidation from "../middlewares/location/insertLocation";

router.post("/", InsertValidation);

router.use(CheckValidation);

router.get("/my", VerifyToken, ShowMyLocation);
router.post("/", VerifyToken, CheckLocation, InsertLocation);

export default router;
