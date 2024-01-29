import dotenv from 'dotenv';
import { IAuthenticateAnalyticName } from '../modules/analytics/analytics.types';

dotenv.config();

export const MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';
export const MONGODB_URI = process.env.MONGODB_URI || '';

export const PageAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.pageVisit,
  IAuthenticateAnalyticName.registerUser,
  IAuthenticateAnalyticName.wallCrashesModal,
  IAuthenticateAnalyticName.wallCrashesContent,
  IAuthenticateAnalyticName.wallCrashesPortal,
  IAuthenticateAnalyticName.authClicked,
  IAuthenticateAnalyticName.analyticsAuthenticate,
];

export const SocialNetworkSessionAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.startSessionFacebook,
  IAuthenticateAnalyticName.startSessionGoogle,
  IAuthenticateAnalyticName.startSession,
  IAuthenticateAnalyticName.swgStartSession,
  IAuthenticateAnalyticName.swgRegisterUser,
  IAuthenticateAnalyticName.startSessionApple,
];

export const SocialNetworkAnalyticNames: IAuthenticateAnalyticName[] = [
  IAuthenticateAnalyticName.facebookClicked,
  IAuthenticateAnalyticName.appleClicked,
  IAuthenticateAnalyticName.gmailClicked,
];

export const APP_SECRET = process.env.APP_SECRET || '';


export const DO_SPACES_ENDPOINT = process.env.DO_SPACES_ENDPOINT || '';
export const DO_SPACES_KEY = process.env.DO_SPACES_KEY || '';
export const DO_SPACES_SECRET = process.env.DO_SPACES_SECRET || '';
export const DO_SPACES_REGION = process.env.DO_SPACES_REGION || '';
export const DO_SPACES_BUCKET = process.env.DO_SPACES_BUCKET || '';
export const DO_SPACES_ROUTE = process.env.DO_SPACES_ROUTE || '';