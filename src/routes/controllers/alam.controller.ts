import { Router } from 'express';

const router = Router();

import VerifyToken from '../middlewares/user/jwt/verifyToken';

import AlamList from '../middlewares/alam/list';

router.get("/", VerifyToken, AlamList);

export default router;