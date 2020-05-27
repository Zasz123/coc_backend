import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Location from "../../../../../database/models/Location.model";

const InsertLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    const { lon, lat } = req.body;

    const createdLocation = await Location.create({
      userId: user.uid,
      longitude: lon,
      latitude: lat,
    });

    res.json({
      success: true,
      createdLocation,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default InsertLocation;
