import { ErrorNames } from "./errorNames";
import Errors from "./errors";
import { ICustomError } from "./interface";

class CustomError {
  constructor({ name, message }: ICustomError) {
    const customError = new Error();
    customError.name = name;
    customError.message = message || Errors[name].message;

    return customError;
  }
}

export default CustomError;
