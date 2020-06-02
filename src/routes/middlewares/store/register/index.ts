import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";

const RegisterStore = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  const { businessNumber, longitude, latitude } = req.body;
  try {
    const existStore = await Store.findOne({
      where: {
        userId: user.uid,
      },
    });

    if (existStore) {
      res.json({
        success: true,
        message: "해당 계정에 이미 상점이 등록되었있습니다.",
      });
    }

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
