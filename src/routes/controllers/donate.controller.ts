import { Router } from "express";

const router = Router();

import CheckValidator from "../middlewares/common/CheckValidator";

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import Donation from "../middlewares/donate/donation";
import ShowMyLogs from "../middlewares/donate/showMyLogs";
import NearbyStore from "../middlewares/store/nearby";

import DonationValidation from "../middlewares/donate/donation/donation.validator";
import NearbyValidation from "../middlewares/store/nearby/nearby.validation";

router.post("/", DonationValidation);
router.post("/near", NearbyValidation);

router.use(CheckValidator);

router.post("/my", VerifyToken, ShowMyLogs);
router.post("/", VerifyToken, Donation);
router.post("/near", NearbyStore);

export default router;
