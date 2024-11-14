import express from 'express';
import { analyticsCreate } from './v1/analytics.actions';
import { checkSessionMiddleware } from '../../middlewares/check-analytics-session.middleware';
import { checkSessionOriginMiddleware } from '../../middlewares/check-analytics-session-origin.middleware';
// import { limitRequests } from '../../middlewares/limit-requests.middleware';
import { checkOriginMiddleware } from '../../middlewares/check-origin.middleware';
import { authenticate } from './analytics.authenticate';
import { eventsCreate, eventsUpdate } from './v2/analytics.actions';

const router = express.Router();

router.post('/authenticate', checkOriginMiddleware, authenticate);

// router.post(
//   '/create',
//   checkSessionOriginMiddleware,
//   checkOriginMiddleware,
//   checkSessionMiddleware,
//   // limitRequests,
//   analyticsCreate,
// );

router.post(
  '/v2/create',
  checkOriginMiddleware,
  checkSessionMiddleware,
  // limitRequests,
  eventsCreate,
);

router.post('/v2/update', checkOriginMiddleware, checkSessionMiddleware, eventsUpdate);

export default router;
