import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import UserStoreDonate from "../../../../../database/models/UserStoreDonate.model";
import Store from "../../../../../database/models/Store.model";

const Donation = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  const { contributions, storeId } = req.body;
  try {
    const existStore = await Store.findOne({
      where: {
        id: storeId,
      },
    });

    if (!existStore) {
      res.json({
        success: false,
        message: "존재하지 않는 상점입니다.",
      });
    }

    const donationLog = await UserStoreDonate.create({
      userId: user.uid,
      storeId,
      contributions,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default Donation;
