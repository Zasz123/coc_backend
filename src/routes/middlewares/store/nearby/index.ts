import { Request, Response, NextFunction } from "express";
import CustomError from "../../error/customError";
import Store from "../../../../../database/models/Store.model";
import { where, literal } from "sequelize";

const NearbyStore = async (req: Request, res: Response, next: NextFunction) => {
  const { latitude, longitude } = req.body;
  try {
    const nearbyStores = await Store.findAll({
      where: where(
        literal(
          `6371 * acos(cos(radians(${latitude})) * cos(radians(latitude)) * cos(radians(${longitude}) - radians(longitude)) + sin(radians(${latitude})) * sin(radians(latitude)))`
        ),
        "<=",
        "5"
      ),
    });

    res.json({
      success: true,
      nearbyStores,
    });
  } catch (error) {
    next(new CustomError({ name: "Database_Error" }));
  }
};

export default NearbyStore;
