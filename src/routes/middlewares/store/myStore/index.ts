import { Request, Response, NextFunction } from "express";

import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const ShowMyStore = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  try {
    const MyStore = await Store.findOne({
      where: {
        userId: user.uid,
      },
    });

    res.json({
      success: true,
      store: MyStore || "You Don't have Store",
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default ShowMyStore;
