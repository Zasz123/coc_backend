import { body, ValidationChain, oneOf } from "express-validator";

const LoginValidator: ValidationChain[] = [
  body("accountId").exists(),
  body("password").exists(),
];

export default LoginValidator;
