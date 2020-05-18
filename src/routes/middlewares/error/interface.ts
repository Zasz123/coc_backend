import { ErrorNames } from "./errorNames";

export interface IError {
  description: string;
  code: number;
  message: string;
}

export interface ICustomError {
  name: ErrorNames;
  message?: string;
}
