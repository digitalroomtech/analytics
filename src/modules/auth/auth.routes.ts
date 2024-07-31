import express from 'express';
import { forgotPassword } from './auth.actions';

const router = express.Router();

router.get('/reset-password', forgotPassword);

export { router as authRouter };
