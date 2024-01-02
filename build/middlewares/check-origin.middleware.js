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
exports.checkOriginMiddleware = void 0;
// const prisma = new PrismaClient();
const checkOriginMiddleware = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    // const sessionOrigin = req.headers['analytics-session-origin'];
    // const url = new URL((sessionOrigin || req.headers.origin) as string);
    // const tenantRecord = await prisma.tenants.findUnique({
    //   where: {
    //     domain: url.origin || '',
    //   },
    // });
    //
    // await prisma.$disconnect();
    //
    // if (!tenantRecord) {
    //   return res.status(400).send({ message: 'Invalid origin' });
    // }
    // req.body.tenant_id = tenantRecord.id;
    // req.body.originUrl = url.origin;
    return next();
  });
exports.checkOriginMiddleware = checkOriginMiddleware;
