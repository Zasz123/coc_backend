import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";

const NearLocation = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default NearLocation;
