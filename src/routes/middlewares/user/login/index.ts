import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";

const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });

    if (!user) {
      next(new CustomError({ name: "Not_User" }));
    }

    if (req.body.password !== (user && user.password)) {
      next(new CustomError({ name: "Not_User" }));
    } else {
      next();
    }
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default Login;
