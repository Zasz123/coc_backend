import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";
import { User } from "../../../../../database/entity/User.model";

const Login = async (next: NextFunction, req: Request, res: Response) => {
  try {
    const user = await User.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });

    if (!user) {
      throw new Error("User_Not_Exists");
    }

    if (req.body.password !== user.password) {
      throw new Error("Worng_Password");
    }

    next();
  } catch (error) {
    next(new CustomError({ name: error.name }));
  }
};

export default Login;
