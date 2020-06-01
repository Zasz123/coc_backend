import { body, ValidationChain } from "express-validator";

const RegisterValidator: ValidationChain[] = [
  body("businessNumber").exists().isNumeric(),
  body("longitude").exists(),
  body("latitude").exists(),
];

export default RegisterValidator;
