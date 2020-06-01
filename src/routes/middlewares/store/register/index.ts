import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const RegisterStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  try {
    const { businessNumber, longitude, latitude } = req.body;
    const createdStore = await Store.create({
      userId: user.uid,
      businessNumber,
      longitude,
      latitude,
    });

    res.json({
      success: true,
      createdStore,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default RegisterStore;
