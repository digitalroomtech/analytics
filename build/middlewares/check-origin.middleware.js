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
exports.checkOriginMiddleware = void 0;
const tenant_models_1 = require("../modules/tenant/tenant.models");
const checkOriginMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const sessionOrigin = req.headers['analytics-session-origin'];
    const url = new URL((sessionOrigin || req.headers.origin));
    let tenantRecord = undefined;
    try {
        tenantRecord = yield tenant_models_1.TenantModel.findOne({
            domain: url.origin || '',
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
    if (!tenantRecord) {
        return res.status(400).send({ message: `Invalid origin: ${url.origin}` });
    }
    console.log('tenantRecord', tenantRecord);
    req.body.tenant_id = tenantRecord._id;
    req.body.originUrl = url.href;
    return next();
});
exports.checkOriginMiddleware = checkOriginMiddleware;
