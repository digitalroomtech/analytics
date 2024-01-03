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
exports.tenantsCollection = exports.analyticsCollection = exports.client = void 0;
const mongodb_1 = require('mongodb');
const constants_1 = require('./constants');
exports.client = new mongodb_1.MongoClient(constants_1.MONGODB_URI);
const database = exports.client.db('admin');
const analyticsCollection = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return database.collection('Analytics');
  });
exports.analyticsCollection = analyticsCollection;
const tenantsCollection = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    return database.collection('Tenants');
  });
exports.tenantsCollection = tenantsCollection;
