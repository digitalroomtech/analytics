import express from 'express';

import { checkSessionOriginMiddleware } from '../../../middlewares/check-analytics-session-origin.middleware';
import { authenticate } from '../../analytics/analytics.authenticate';
import { checkSessionMiddleware } from '../../../middlewares/check-analytics-session.middleware';
import { checkOriginMiddleware } from '../../../middlewares/check-origin.middleware';
import { easyDataEventCreate } from './easy-data-event.actions';

const router = express.Router();

router.post('/authenticate', checkSessionOriginMiddleware, checkOriginMiddleware, authenticate);

router.post(
  '/create',
  checkSessionOriginMiddleware,
  checkOriginMiddleware,
  checkSessionMiddleware,
  // limitRequests,
  easyDataEventCreate,
);

export default router;