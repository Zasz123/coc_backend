import { body, ValidationChain } from "express-validator";

const InsertValidation: ValidationChain[] = [
  body("longitude").exists(),
  body("latitude").exists(),
];

export default InsertValidation;
