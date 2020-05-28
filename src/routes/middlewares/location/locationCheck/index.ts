import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import Location from "../../../../../database/models/Location.model";
import { literal, where, Op } from "sequelize";

const LocationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude } = req.body;
  try {
    const overlapLocation = await Location.findAll({
      attributes: ["id", "longitude", "latitude"],
      where: where(
        literal(
          `6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(${longitude}) - radians(longitude)) + sin(radians(${latitude})) * sin(radians(latitude)))`
        ),
        "<=",
        "5"
      ),
      include: [
        {
          model: User,
          where: {
            type: "confiremd",
          },
        },
      ],
    });

    next(overlapLocation);
  } catch (error) {
    console.log(error);
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default LocationCheck;
