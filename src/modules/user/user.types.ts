import fs from 'fs';
import path from 'path';
import { ITenantUser, TenantUserInvitationStatuses } from '../tenant/tenant.types';
import { InputMaybe, Scalars } from '../../utils/types';

export const userTypeDefs = fs.readFileSync(path.join(__dirname, 'user.queries.graphql'), 'utf8');

export interface IUser {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  timezone?: string;
  avatar?: string;
  role?: UserRoles;
  tenantUsers: ITenantUser[];
  last_login?: string;
  created_at?: string;
  updated_at?: string;
}

export type UserEventSArgs = {
  user_id:number;
  tenant_id:number
}

export interface IFindOneOrCreate {
  user_id: number;
}

export enum UserRoles {
  ADMINISTRATOR = 'ADMINISTRATOR',
  USER = 'USER',
}


export type UpdateUserArgs = {
  input: {
    id: string;
    name: string;
    password: string;
    avatar: string;
    timezone: string;
    file: InputMaybe<Scalars['Upload']>;

  };
};

export interface UserInvitation {
  id?: string;
  role?: UserRoles;
  email?: string;
  status?: TenantUserInvitationStatuses;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateUserInvitationArgs = {
  input: {
    email?: string;
    role?: UserRoles;
  };
};
