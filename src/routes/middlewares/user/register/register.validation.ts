import { body, ValidationChain } from "express-validator";

const RegisterValidator: ValidationChain[] = [
  body("accountId").exists(),
  body("password").exists(),
  body("name").exists(),
  body("type").exists().isIn(["normal", "shopkeeper"]),
];

export default RegisterValidator;
