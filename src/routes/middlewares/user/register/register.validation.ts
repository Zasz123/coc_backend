import { body, ValidationChain } from "express-validator";

const RegisterValidator: ValidationChain[] = [
  body("accountId").exists(),
  body("password").exists(),
];

export default RegisterValidator;
