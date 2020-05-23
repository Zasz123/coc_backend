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
      throw new Error("Database_Error");
    }

    res.json({
      success: true,
      user: {
        id: data.id,
        accountId: data.accountId,
        password: data.password,
        name: data.name,
        isUser: data.isUser,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      },
      location: data.location,
    });
  } catch (error) {
    next(new CustomError({ name: "Unhandled_Error" }));
  }
};

export default showMyLocation;
