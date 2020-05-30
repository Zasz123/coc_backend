import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import * as bcrypt from "bcrypt";
import { validationResult } from "express-validator";

const Login = async (req: Request, res: Response, next: NextFunction) => {
  if (!validationResult(req).isEmpty()) {
    return next(new CustomError({ name: "Invalid_Body" }));
  }
  try {
    const user = await User.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });

    if (!user) {
      next(new CustomError({ name: "Not_User" }));
    } else {
      const checkPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!checkPassword) {
        next(new CustomError({ name: "Not_User" }));
      }
      next();
    }
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default Login;
