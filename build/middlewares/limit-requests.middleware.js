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
exports.limitRequests = void 0;
const constants_1 = require("../utils/constants");
const clean_requests_1 = require("../utils/clean-requests");
const requestCounts = new Map();
const cleanupTasks = new Map();
const limitRequests = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = req.headers['analytics-session'];
    if (!session) {
        return res.status(403).send({ message: 'No analytics-session header' });
    }
    const uuid = session.toString();
    const requestUuid = requestCounts.get(uuid) || 1;
    requestCounts.set(uuid, requestUuid + 1);
    if (requestUuid > constants_1.MAX_REQUESTS) {
        return res.status(429).send({ message: 'Too Many Requests' });
    }
    if (!cleanupTasks.has(uuid)) {
        const task = (0, clean_requests_1.cleanRequests)(uuid, requestCounts, cleanupTasks);
        cleanupTasks.set(uuid, task);
    }
    next();
});
exports.limitRequests = limitRequests;
