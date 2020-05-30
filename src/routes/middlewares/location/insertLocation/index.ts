import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Location from "../../../../../database/models/Location.model";

const InsertLocation = async (
  overlapUsers: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = res.locals.user;
  const { longitude, latitude } = req.body;
  try {
    const createdLocation = await Location.create({
      userId: user.uid,
      longitude,
      latitude,
    });

    res.json({
      success: true,
      createdLocation,
      overlapUsers,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default InsertLocation;
