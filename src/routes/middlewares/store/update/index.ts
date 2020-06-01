import { Request, Response, NextFunction } from "express";

import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const UpdateStore = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  try {
    const updatedStore = await Store.update(req.body, {
      where: {
        userId: user.uid,
      },
    });

    res.json({
      success: true,
      updatedStore,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default UpdateStore;
