import { body, ValidationChain } from "express-validator";

const NearbyValidation: ValidationChain[] = [
  body("longitude").exists(),
  body("latitude").exists(),
];

export default NearbyValidation;
