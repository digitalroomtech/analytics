import fs from 'fs';
import path from 'path';

export const userTypeDefs = fs.readFileSync(path.join(__dirname, 'user.queries.graphql'), 'utf8');

export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  role?: UserRoles;
  created_at?: string;
  updated_at?: string;
}

export interface IFindOneOrCreate {
  user_id: number;
}

export enum UserRoles {
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER',
}
