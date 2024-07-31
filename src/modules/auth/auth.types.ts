import fs from 'fs';
import path from 'path';
import { IUser } from '../user/user.types';

export const authTypeDefs = fs.readFileSync(path.join(__dirname, 'auth.queries.graphql'), 'utf8');

export type LoginArgs = {
  email: string;
  password: string;
};

export type SignupArgs = {
  email: string;
  password: string;
  name: string;
  url: string;
};

export type AuthPayload = {
  token: string;
  user: any;
};

export type ForgotPasswordArgs = {
  email: string;
  redirectUrl: string;
  form: string;
};

export type ForgotPasswordPayload = {
  success: boolean;
};

export type ChangePasswordArgs = {
  email: string;
  password: string;
  token: string;
};

export type UserPayload = {
  token: string;
  user: IUser;
  show_onboarding: boolean;
};
