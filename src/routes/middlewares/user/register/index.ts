import { NextFunction, Request, Response } from "express";
import CustomError from "../../error/customError";

import User from "../../../../../database/models/User.model";

const Register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const createdUser = await User.create({
      accountId: req.body.accountId,
      password: req.body.password,
      name: req.body.name,
      type: req.body.type,
    });

    res.json({
      success: true,
      createdUser,
    });
  } catch (error) {
    console.log(error);

    next(new CustomError({ name: "Database_Error" }));
  }
};

export default Register;
