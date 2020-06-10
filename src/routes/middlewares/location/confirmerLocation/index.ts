import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import User from "../../../../../database/models/User.model";
import Location from "../../../../../database/models/Location.model";
import { literal, where, Op } from "sequelize";
import * as admin from "firebase-admin";
import Alam from "../../../../../database/models/Alam.model";
import { Expo, ExpoPushMessage } from 'expo-server-sdk';

const expo = new Expo();

const LocationCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { longitude, latitude, pushToken } = req.body;
  const distance = "5";
  try {
    const user = await User.findOne({
      where: {
        id: res.locals.user.uid,
      },
    });

    if (!user) {
      return next(new CustomError({ name: "Not_User" }));
    }

    const overlapLocations = await User.findAll({
      where: {
        isInfected: true,
        [Op.not]: {
          id: user.id,
        },
      },
      attributes: ["id"],
      include: [
        {
          model: Location,
          attributes: ["longitude", "latitude"],
          where: where(
            literal(
              `6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(${longitude}) - radians(longitude)) + sin(radians(${latitude})) * sin(radians(latitude)))`
            ),
            "<=",
            distance
          ),
          order: [
            ['createdAt', 'DESC']
          ]
        },
      ],
    });

    if (overlapLocations.length !== 0) {
      const message: Array<ExpoPushMessage> = [];
      message.push({
        to: pushToken,
        sound: "default",
        title: "확진자와 동선이 겹쳤습니다.",
        body: "확진자와 동선이 겹쳤습니다. 이동경로를 변경해주세요."
      })

      const push = await expo.sendPushNotificationsAsync(message);
      console.log(push);
      await Alam.create({
        userId: user.id,
        title: message[0].title,
        message: message[0].body,
      });
    }

    res.json({
      success: true,
      overlapLocations,
    });
  } catch (error) {
    console.log(error)
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default LocationCheck;
