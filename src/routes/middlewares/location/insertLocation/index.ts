import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Location from "../../../../../database/models/Location.model";
import User from "../../../../../database/models/User.model";

import { literal, where, fn, col } from "sequelize";

const InsertLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let response: any = {};
  const user = res.locals.user;
  const { longitude, latitude } = req.body;
  try {
    const point = { type: "Point", coordinates: [latitude, longitude] };

    const createdLocation = await Location.create({
      userId: user.uid,
      longitude,
      latitude,
      location: point,
    });

    res.json({
      success: true,
      createdLocation,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default InsertLocation;
