import express from 'express';
import { authenticate, analyticsCreate } from './analytics.actions';
import { checkSessionMiddleware } from '../../middlewares/check-analytics-session.middleware';
import { checkSessionOriginMiddleware } from '../../middlewares/check-analytics-session-origin.middleware';
// import { limitRequests } from '../../middlewares/limit-requests.middleware';
import { checkOriginMiddleware } from '../../middlewares/check-origin.middleware';

const router = express.Router();

router.post('/authenticate', checkSessionOriginMiddleware, checkOriginMiddleware, authenticate);

router.post(
  '/create',
  checkSessionOriginMiddleware,
  checkOriginMiddleware,
  checkSessionMiddleware,
  // limitRequests,
  analyticsCreate,
);

export default router;
