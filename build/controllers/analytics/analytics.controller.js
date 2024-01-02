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
const mongodb_1 = require('mongodb');
const constants_1 = require('../../utils/constants');
console.log('MONGODB_URI', constants_1.MONGODB_URI);
const client = new mongodb_1.MongoClient(constants_1.MONGODB_URI);
const prisma = new client_1.PrismaClient();
function authenticate(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const uuid = (0, uuid_1.v4)();
    try {
      const database = client.db('admin');
      const analytics = yield database.collection('Analytics');
      yield analytics.insertOne({
        name: 'analytics_authenticate',
        uuid: uuid,
        user_id: 0,
        url: 'https://vanguardia.com.mx',
        tenant_id: '65774a5ea3a3f7bf16c78232',
      });
      // await prisma.analytics.create({
      //   data: {
      //     name: 'analytics_authenticate',
      //     uuid: uuid,
      //     user_id: 0,
      //     url: 'https://vanguardia.com.mx',
      //     tenant_id: '65774a5ea3a3f7bf16c78232',
      //   },
      // });
      // await prisma.$disconnect();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    } finally {
      // await client.close();
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
      yield prisma.analytics.create({
        data: {
          name: data.name,
          uuid: data.uuid,
          user_id: data.user_id,
          url: data.originUrl,
          tenant: {
            connect: {
              id: req.body.tenant_id,
            },
          },
        },
      });
      yield prisma.$disconnect();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.json({ message: 'Register event successfully.' });
  });
}
exports.analyticsCreate = analyticsCreate;
const isUuidAuthenticated = (uuid) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const session = yield prisma.analytics.findFirst({
      where: {
        uuid: uuid,
      },
    });
    yield prisma.$disconnect();
    return !!session;
  });
exports.isUuidAuthenticated = isUuidAuthenticated;
