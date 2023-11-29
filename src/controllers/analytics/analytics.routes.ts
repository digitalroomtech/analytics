import express from 'express';
import { authenticate, analyticsCreate } from './analytics-controller';
import { checkSessionMiddleware } from '../../middlewares/check-analytics-session.middleware';
import { limitRequests } from '../../middlewares/limit-requests.middleware';
import { checkOriginMiddleware } from '../../middlewares/check-origin.middleware';

const router = express.Router();

router.post('/authenticate', checkOriginMiddleware, authenticate);

router.post(
  '/create',
  checkOriginMiddleware,
  checkSessionMiddleware,
  limitRequests,
  analyticsCreate,
);

export default router;
