import { body, ValidationChain } from "express-validator";

const RegisterValidator: ValidationChain[] = [
  body("accountId").exists(),
  body("password").exists(),
  body("name").exists(),
  body("type").exists().isIn(["normal", "confirmed", "shopkeeper"]),
];

export default RegisterValidator;
