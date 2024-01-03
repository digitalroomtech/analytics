'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.checkSessionMiddleware = void 0;
const analytics_controller_1 = require('../controllers/analytics/analytics.controller');
const constants_1 = require('../utils/constants');
const checkSessionMiddleware = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = req.headers['analytics-session'];
    if (constants_1.ENVIRONMENT === 'local') {
      req.body.uuid = session;
      return next();
    }
    if (!session) {
      return res.status(403).send({ message: 'No analytics-session header' });
    }
    const isAuthenticated = yield (0, analytics_controller_1.isUuidAuthenticated)(
      session.toString(),
    );
    if (!isAuthenticated) {
      return res.status(403).send({ message: 'Forbidden !' });
    }
    req.body.uuid = session;
    return next();
  });
exports.checkSessionMiddleware = checkSessionMiddleware;
