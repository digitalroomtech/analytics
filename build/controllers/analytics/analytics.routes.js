'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const analytics_controller_1 = require('./analytics.controller');
const check_analytics_session_middleware_1 = require('../../middlewares/check-analytics-session.middleware');
const check_analytics_session_origin_middleware_1 = require('../../middlewares/check-analytics-session-origin.middleware');
// import { limitRequests } from '../../middlewares/limit-requests.middleware';
const check_origin_middleware_1 = require('../../middlewares/check-origin.middleware');
const router = express_1.default.Router();
router.post(
  '/authenticate',
  check_analytics_session_origin_middleware_1.checkSessionOriginMiddleware,
  check_origin_middleware_1.checkOriginMiddleware,
  analytics_controller_1.authenticate,
);
router.post(
  '/create',
  check_analytics_session_origin_middleware_1.checkSessionOriginMiddleware,
  check_origin_middleware_1.checkOriginMiddleware,
  check_analytics_session_middleware_1.checkSessionMiddleware,
  // limitRequests,
  analytics_controller_1.analyticsCreate,
);
exports.default = router;
