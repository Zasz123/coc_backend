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

    response = {
      createdLocation,
    };
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }

  try {
    // const distance = await Location.findAndCountAll({
    //   where: where(
    //     literal(
    //       `6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(${longitude}) - radians(longitude)) + sin(radians(${latitude})) * sin(radians(latitude)))`
    //     ),
    //     "<="
    //   ),
    // });
    const distance = await User.findAndCountAll({
      where: {
        type: "confiremd",
      },
      include: [
        {
          model: Location,
          where: where(
            fn(
              "ST_DWithin",
              col("location"),
              fn("ST_MakePoint", longitude, latitude),
              5
            ),
            "<="
          ),
        },
      ],
    });
    console.log(distance);
    res.json({
      success: true,
      ...response,
    });
  } catch (error) {
    console.log(error);
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default InsertLocation;
