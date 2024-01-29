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
exports.checkSessionMiddleware = void 0;
const analytics_actions_1 = require("../modules/analytics/analytics.actions");
const checkSessionMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = req.headers['analytics-session'];
    if (!session) {
        return res.status(403).send({ message: 'No analytics-session header' });
    }
    let authenticateAnalytics;
    try {
        authenticateAnalytics = yield (0, analytics_actions_1.isAuthenticateAnalytics)(session.toString());
    }
    catch (e) {
        return res.status(400).send({ message: e.message });
    }
    if (!authenticateAnalytics) {
        return res.status(403).send({ message: 'Forbidden !' });
    }
    req.body.authenticate = authenticateAnalytics._id;
    return next();
});
exports.checkSessionMiddleware = checkSessionMiddleware;
