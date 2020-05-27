import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import Location from "../../../../../database/models/Location.model";
import { fn, literal } from "sequelize/types";

const LocationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude } = req.body;
  const user = res.locals.user;
  try {
    const overlapLocation = await User.findAndCountAll({
      where: {
        type: "confiremd",
      },
      include: [
        {
          model: Location,
          attributes: [
            [
              fn("ST_Distance_Sphere", literal("geolocation"), location),
              "distance",
            ],
          ],
        },
      ],
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default LocationCheck;
