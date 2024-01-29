"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DO_SPACES_ROUTE = exports.DO_SPACES_BUCKET = exports.DO_SPACES_REGION = exports.DO_SPACES_SECRET = exports.DO_SPACES_KEY = exports.DO_SPACES_ENDPOINT = exports.APP_SECRET = exports.SocialNetworkAnalyticNames = exports.SocialNetworkSessionAnalyticNames = exports.PageAnalyticNames = exports.MONGODB_URI = exports.ENVIRONMENT = exports.MAX_REQUESTS = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const analytics_types_1 = require("../modules/analytics/analytics.types");
dotenv_1.default.config();
exports.MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
exports.ENVIRONMENT = process.env.ENVIRONMENT || 'local';
exports.MONGODB_URI = process.env.MONGODB_URI || '';
exports.PageAnalyticNames = [
    analytics_types_1.IAuthenticateAnalyticName.pageVisit,
    analytics_types_1.IAuthenticateAnalyticName.registerUser,
    analytics_types_1.IAuthenticateAnalyticName.wallCrashesModal,
    analytics_types_1.IAuthenticateAnalyticName.wallCrashesContent,
    analytics_types_1.IAuthenticateAnalyticName.wallCrashesPortal,
    analytics_types_1.IAuthenticateAnalyticName.authClicked,
    analytics_types_1.IAuthenticateAnalyticName.analyticsAuthenticate,
];
exports.SocialNetworkSessionAnalyticNames = [
    analytics_types_1.IAuthenticateAnalyticName.startSessionFacebook,
    analytics_types_1.IAuthenticateAnalyticName.startSessionGoogle,
    analytics_types_1.IAuthenticateAnalyticName.startSession,
    analytics_types_1.IAuthenticateAnalyticName.swgStartSession,
    analytics_types_1.IAuthenticateAnalyticName.swgRegisterUser,
    analytics_types_1.IAuthenticateAnalyticName.startSessionApple,
];
exports.SocialNetworkAnalyticNames = [
    analytics_types_1.IAuthenticateAnalyticName.facebookClicked,
    analytics_types_1.IAuthenticateAnalyticName.appleClicked,
    analytics_types_1.IAuthenticateAnalyticName.gmailClicked,
];
exports.APP_SECRET = process.env.APP_SECRET || '';
exports.DO_SPACES_ENDPOINT = process.env.DO_SPACES_ENDPOINT || '';
exports.DO_SPACES_KEY = process.env.DO_SPACES_KEY || '';
exports.DO_SPACES_SECRET = process.env.DO_SPACES_SECRET || '';
exports.DO_SPACES_REGION = process.env.DO_SPACES_REGION || '';
exports.DO_SPACES_BUCKET = process.env.DO_SPACES_BUCKET || '';
exports.DO_SPACES_ROUTE = process.env.DO_SPACES_ROUTE || '';
