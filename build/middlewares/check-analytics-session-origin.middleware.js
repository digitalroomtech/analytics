"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSessionOriginMiddleware = void 0;
const constants_1 = require("../utils/constants");
const checkSessionOriginMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (constants_1.ENVIRONMENT === 'local')
        return next();
    const sessionOrigin = req.headers['analytics-session-origin'];
    if (!sessionOrigin) {
        return res.status(403).send({ message: 'No analytics-session-origin' });
    }
    return next();
});
exports.checkSessionOriginMiddleware = checkSessionOriginMiddleware;
