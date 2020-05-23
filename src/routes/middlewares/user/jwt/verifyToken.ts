import { NextFunction, Request, Response } from "express";

import * as jwt from "jsonwebtoken";
import CustomError from "../../error/customError";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const decoded = jwt.verify(req.body.token, String(process.env.JWT_SECRET));
    res.locals.user = decoded;
    next();
  } catch (error) {
    next(new CustomError({ name: "Not_User" }));
  }
};

export default verifyToken;
