import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";

import User from "../../../../../database/models/User.model";

const Register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdUser = await User.create({
      accountId: req.body.accountId,
      password: req.body.password,
      name: req.body.name,
      isUser: req.body.isUser,
    });

    res.json({
      success: true,
      createdUser,
    });
  } catch (error) {
    console.log(error);

    next(new CustomError({ name: "Unhandled_Error" }));
  }
};

export default Register;
