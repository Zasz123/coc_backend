import { Request, Response, NextFunction } from "express";

import { validationResult } from "express-validator";
import CustomError from "../error/customError";

const CheckValidator = (req: Request, res: Response, next: NextFunction) => {
  const result = validationResult(req).isEmpty();
  if (!result) {
    next(new CustomError({ name: "Invalid_Body" }));
  } else {
    next();
  }
};

export default CheckValidator;
