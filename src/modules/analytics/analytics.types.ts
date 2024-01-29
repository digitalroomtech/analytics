import { ObjectId } from 'mongodb';
import { ITenant } from '../tenant/tenant.types';
import { IUser } from '../user/user.types';

export interface Analytics {
  id?: string;
  name?: string;
  uuid?: string;
  url?: string;
  user_id?: number;
  tenant_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface IAuthenticateAnalytic {
  _id?: ObjectId;
  url?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
  tenant: ITenant;
  users: [IUser];
}

export interface IAuthenticateAnalyticCustom {
  _id?: ObjectId;
  url?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  authenticate_analytic: IAuthenticateAnalytic;
}

export enum IAuthenticateAnalyticName {
  startSessionFacebook = 'start_session_facebook',
  startSession = 'start_session',
  swgStartSession = 'swg_start_session',
  facebookClicked = 'facebook_clicked',
  startSessionGoogle = 'start_session_google',
  wallCrashesPortal = 'wall_crashes_portal',
  startSessionApple = 'start_session_apple',
  authClicked = 'auth_clicked',
  wallCrashesContent = 'wall_crashes_content',
  swgRegisterUser = 'swg_register_user',
  pageVisit = 'page_visit',
  gmailClicked = 'gmail_clicked',
  registerUser = 'register_user',
  wallCrashesModal = 'wall_crashes_modal',
  analyticsAuthenticate = 'analytics_authenticate',
  appleClicked = 'apple_clicked',
}
