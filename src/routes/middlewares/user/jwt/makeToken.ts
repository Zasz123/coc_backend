import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

import User from "../../../../../database/models/User.model";
import CustomError from "../../error/customError";

const makeToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({
      where: {
        accountId: req.body.accountId,
      },
    });
    if (user) {
      const token: string = jwt.sign(
        {
          uid: user.id,
          username: user.name,
        },
        String(process.env.JWT_SECRET)
      );

      res.json({
        success: true,
        token,
      });
    } else {
      throw new Error("Unhandled_Error");
    }
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default makeToken;
