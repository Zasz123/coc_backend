import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

import Errors from "./errors";

import { IError } from "./interface";
import { ErrorNames } from "./errorNames";

const ErrorMiddleware: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  const error: IError = Errors[err.name as ErrorNames];

  const name: string = err.name;
  const description: string =
    (error && error.description) || Errors.Unhandled_Error.description;
  const code: number = (error && error.code) || Errors.Unhandled_Error.code;
  const message: string =
    (error && error.message) || Errors.Unhandled_Error.message;

  res.status(code).json({
    success: false,
    name,
    description,
    code,
    message,
  });
};

export default ErrorMiddleware;
