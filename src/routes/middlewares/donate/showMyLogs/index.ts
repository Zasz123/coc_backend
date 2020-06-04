import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import UserStoreDonate from "../../../../../database/models/UserStoreDonate.model";

const ShowMyLogs = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  try {
    const myLogs = await UserStoreDonate.findAll({
      where: {
        userId: user.uid,
      },
    });

    res.json({
      success: true,
      myLogs,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default ShowMyLogs;
