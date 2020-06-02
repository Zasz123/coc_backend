import { body, ValidationChain } from "express-validator";

const DonationValidation: ValidationChain[] = [
  body("contributions").exists(),
  body("storeId").exists(),
];

export default DonationValidation;
