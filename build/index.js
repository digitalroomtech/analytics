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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const analytics_routes_1 = __importDefault(require('./controllers/analytics/analytics.routes'));
const tenant_routes_1 = __importDefault(require('./controllers/tenant/tenant.routes'));
const client_1 = require('../prisma/generated/client');
const cors_1 = __importDefault(require('cors'));
const http_1 = __importDefault(require('http'));
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const port = process.env.PORT || 3002;
const prisma = new client_1.PrismaClient();
app.use(
  (0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: [
      'Authorization',
      'Content-Type',
      'analytics-session',
      'analytics-session-origin',
    ],
    maxAge: 86400,
  }),
  express_1.default.json(),
  analytics_routes_1.default,
);
app.use('/tenant', tenant_routes_1.default);
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
const main = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => httpServer.listen({ port }, resolve));
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield prisma.$disconnect();
    }),
  );
