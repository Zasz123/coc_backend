import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const DeleteStore = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  try {
    await Store.destroy({
      where: {
        userId: user.uid,
      },
    });

    res.json({
      success: true,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default DeleteStore;
