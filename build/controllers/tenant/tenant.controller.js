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
exports.tenantCreate = void 0;
const client_1 = require('../../../prisma/generated/client');
const prisma = new client_1.PrismaClient();
function tenantCreate(req, res) {
  return __awaiter(this, void 0, void 0, function* () {
    const data = req.body;
    if (!(data.name || data.domain)) {
      return res.status(500).json({ message: 'El name y domain son requeridos' });
    }
    try {
      yield prisma.tenants.create({
        data: {
          name: data.name,
          domain: data.domain,
        },
      });
      yield prisma.$disconnect();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    return res.json({ message: 'Register tenant successfully.' });
  });
}
exports.tenantCreate = tenantCreate;
