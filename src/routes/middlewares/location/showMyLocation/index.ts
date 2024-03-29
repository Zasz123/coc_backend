import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Location from "../../../../../database/models/Location.model";
import User from "../../../../../database/models/User.model";

const showMyLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    const data = await User.findOne({
      include: [
        {
          attributes: ["id", "longitude", "latitude", "createdAt"],
          model: Location,
        },
      ],
      where: {
        id: user.uid,
      },
    });

    if (!data) {
      next(new CustomError({ name: "Not_User" }));
    } else {
      res.json({
        success: true,
        user: {
          id: data.id,
          accountId: data.accountId,
          password: data.password,
          name: data.name,
          type: data.type,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
        location: data.location,
      });
    }
  } catch (error) {
    console.log(error);
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default showMyLocation;
