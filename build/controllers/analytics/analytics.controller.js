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
exports.isUuidAuthenticated = exports.analyticsCreate = exports.authenticate = void 0;
const client_1 = require('../../../prisma/generated/client');
const uuid_1 = require('uuid');
const mongodb_1 = require('../../utils/mongodb');
const prisma = new client_1.PrismaClient();
function authenticate(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const uuid = (0, uuid_1.v4)();
    try {
      const analytics = yield (0, mongodb_1.analyticsCollection)();
      yield analytics.insertOne({
        name: 'analytics_authenticate',
        uuid: uuid,
        user_id: 0,
        url: req.headers.origin || '',
        tenant_id: req.body.tenant_id,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.json({ message: 'Authenticate successfully.', uuid: uuid });
  });
}
exports.authenticate = authenticate;
function analyticsCreate(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const data = req.body;
    if (!(data.name || data.tenant_id || data.uuid || data.user_id || data.originUrl)) {
      return res.status(500).json({ message: 'El name y uuid son requeridos' });
    }
    try {
      const analytics = yield (0, mongodb_1.analyticsCollection)();
      yield analytics.insertOne({
        name: data.name,
        uuid: data.uuid,
        user_id: data.user_id,
        url: data.originUrl,
        tenant_id: req.body.tenant_id,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.json({ message: 'Register event successfully.' });
  });
}
exports.analyticsCreate = analyticsCreate;
const isUuidAuthenticated = (uuid) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const analytics = yield (0, mongodb_1.analyticsCollection)();
    const session = yield analytics.findOne({
      uuid,
    });
    return !!session;
  });
exports.isUuidAuthenticated = isUuidAuthenticated;
