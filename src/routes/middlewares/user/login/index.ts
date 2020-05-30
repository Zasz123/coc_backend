import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import * as bcrypt from "bcrypt";

const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });

    if (!user) {
      console.log(user);
      next(new CustomError({ name: "Not_User" }));
    } else {
      console.log(";");
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
