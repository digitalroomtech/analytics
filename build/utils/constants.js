'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.MONGODB_URI = exports.ENVIRONMENT = exports.MAX_REQUESTS = void 0;
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
exports.MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
exports.ENVIRONMENT = process.env.ENVIRONMENT || 'local';
exports.MONGODB_URI = process.env.MONGODB_URI || '';
