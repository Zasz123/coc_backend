import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import * as bcrypt from "bcrypt";

const UpdateInfo = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await User.update(req.body, {
      where: {
        id: user.uid,
      },
    });

    res.json({
      success: true,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default UpdateInfo;
