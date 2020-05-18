import { NextFunction, Request, Response } from "express";

import * as jwt from "jsonwebtoken";
import CustomError from "../../error/customError";

const verifyToken = async (next: NextFunction, req: Request, res: Response) => {
  try {
    const decoded = jwt.verify(req.body.token, String(process.env.JWT_SECRET));
    res.locals.user = decoded;
    next();
  } catch (error) {
    next(new CustomError({ name: "Unhandled_Error" }));
  }
};

export default verifyToken;
