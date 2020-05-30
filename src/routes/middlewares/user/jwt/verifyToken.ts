import { NextFunction, Request, Response } from "express";

import * as jwt from "jsonwebtoken";
import CustomError from "../../error/customError";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const decoded = jwt.verify(req.body.token, String(process.env.JWT_SECRET));
    res.locals.user = decoded;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return next(new CustomError({ name: "Token_Not_Valid" }));
    }
    return next(new CustomError({ name: "Not_User" }));
  }
};

export default verifyToken;
