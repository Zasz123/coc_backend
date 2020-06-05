import { Router } from "express";

const router = Router();

import CheckValidator from "../middlewares/common/CheckValidator";

import VerifyToken from "../middlewares/user/jwt/verifyToken";

import Donation from "../middlewares/donate/donation";
import ShowMyLogs from "../middlewares/donate/showMyLogs";

import DonationValidation from "../middlewares/donate/donation/donation.validator";

router.post("/", DonationValidation);

router.use(CheckValidator);

router.use(VerifyToken);

router.get("/my", ShowMyLogs);
router.post("/", Donation);

export default router;
