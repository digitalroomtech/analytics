import fs from 'fs';
import path from 'path';

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
