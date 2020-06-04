import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const ShowStore = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const store = await Store.findOne({
      where: {
        id,
      },
    });

    if (!store) {
      res.json({
        success: true,
        message: "Store not exist",
      });
    }

    res.json({
      success: true,
      store,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default ShowStore;
