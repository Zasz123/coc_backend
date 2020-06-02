import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import UserStoreDonate from "../../../../../database/models/UserStoreDonate";
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

    const donationLog = await UserStoreDonate.create({
      userId: user.uid,
      storeId,
      contributions,
    });

    res.json({
      success: true,
      donationLog,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default Donation;
