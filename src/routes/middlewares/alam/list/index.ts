import { Request, Response, NextFunction } from 'express';
import CustomError from '../../error/customError';
import Alam from '../../../../../database/models/Alam.model';
import User from '../../../../../database/models/User.model';

const AlamList = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user;
    try {
        const alams = await User.findAll({
            where: {
                id: user.uid
            },
            include: [
                {
                    model: Alam
                }
            ]
        })

        res.json({
            success: true,
            alams
        })
    } catch(error) {
        console.log(error);
        next(new CustomError({name: "Database_Error"}));
    }
}

export default AlamList;