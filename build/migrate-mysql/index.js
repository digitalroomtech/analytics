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
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { MongoClient } = require('mongodb');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient, Analytics } = require('../../prisma/generated-mysql/client');
const prisma = new PrismaClient();
const client = new MongoClient(
  'mongodb+srv://doadmin:6fZ07S41o2sQLA53@vanguardia-mongodb-92c26b68.mongo.ondigitalocean.com?retryWrites=true&writeConcern=majority',
);
const database = client.db('admin');
const main = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const take = 50000;
    const analyticsCount = yield prisma.analytics.count();
    const pages = Math.ceil(analyticsCount / take);
    for (let i = 0; i < pages; i++) {
      const analytics = yield prisma.analytics.findMany({
        take,
        skip: i * take,
      });
      const mongoAnalytics = yield database.collection('Analytics');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const newValues = analytics.map((analytic) => {
        delete analytic.id;
        analytic.tenant_id =
          analytic.tenant_id === 1 ? '65774a5ea3a3f7bf16c78232' : '657749f948ced9a88db55d5f';
        return analytic;
      });
      const data = yield mongoAnalytics.insertMany(newValues);
      console.log('insertedCount in mongodb', data.insertedCount);
    }
  });
main();
