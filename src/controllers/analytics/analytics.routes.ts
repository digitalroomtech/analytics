import express from 'express';
import { authenticate, analyticsCreate } from './analytics-controller';
import { checkSessionMiddleware } from '../../middlewares/check-analytics-session.middleware';

const router = express.Router();

router.get('/authenticate', authenticate);

router.post('/create', checkSessionMiddleware, async (req, res) => {
  await analyticsCreate(req, res);
});

export default router;
