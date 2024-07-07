import { Router } from 'express';
import {  login, register } from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';

const router: Router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;