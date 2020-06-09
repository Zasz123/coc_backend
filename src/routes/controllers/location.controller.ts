import { Router } from "express";

const router = Router();

import CheckValidation from "../middlewares/common/CheckValidator";

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import InsertLocation from "../middlewares/location/insertLocation";
import ShowMyLocation from "../middlewares/location/showMyLocation";
import ConfirmerLocation from "../middlewares/location/confirmerLocation";

import ConfirmerValidation from "../middlewares/location/confirmerLocation/confirmer.validation";
import InsertValidation from "../middlewares/location/insertLocation/locationVaildation";

router.post("/", InsertValidation);
router.post("/confirmer", ConfirmerValidation);

router.use(CheckValidation);

router.use(VerifyToken);

router.get("/my", ShowMyLocation);
router.post("/", InsertLocation);
router.post("/confirmer", VerifyToken, ConfirmerLocation);

export default router;
