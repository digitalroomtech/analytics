import fs from 'fs';
import path from 'path';
import { IPlan } from '../plan/plan.types';
import { IUser } from '../user/user.types';
import { InputMaybe, Scalars } from '../../utils/types';

export const tenantTypeDefs = fs.readFileSync(
  path.join(__dirname, 'tenant.queries.graphql'),
  'utf8',
);

export interface ITenant {
  _id?: string;
  name?: string;
  webhook?: string;
  logo?: string;
  identityColor?: string;
  allowedUrls?: [string];
  timezone?: string;
  createdAt?: string;
  updatedAt?: string;
  plan?: IPlan;
  status?: TenantStatuses;
}

export interface ITenantUser {
  _id?: string;
  role?: TenantUserRoles;
  tenant?: ITenant;
  user?: IUser;
  status?: TenantUserStatuses;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITenantUserInvitation {
  _id?: string;
  role?: TenantUserRoles;
  email?: string;
  tenant?: ITenant;
  status?: TenantUserInvitationStatuses;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateTenantArgs = {
  input: {
    name?: string;
    webhook?: string;
    logo?: string;
    allowedUrls?: [string];
    timezone?: string;
  };
};

export type CreateTenantUserInvitationArgs = {
  input: {
    email?: string;
    role?: TenantUserRoles;
    tenant?: {
      id: string;
    };
  };
};

export type UpdateTenantUserInvitationArgs = {
  input: {
    id: string;
    status: TenantUserInvitationStatuses;
  };
};
export type UpdateTenantUserArgs = {
  input: {
    id: string;
    status: TenantUserInvitationStatuses;
    role: TenantUserRoles;
    user: {
      id: string;
      name: string;
    }
  };
};

export type UpdateTenantArgs = {
  input: {
    id?: string;
    name?: string;
    webhook?: string;
    logo?: string;
    identityColor?: string;
    allowedUrls?: [string];
    timezone?: string;
    file: InputMaybe<Scalars['Upload']>;
    plan?: {
      id?: string;
    };
  };
  file: any
};

export type TenantsArgs = {
  id: string;
};

export type TenantArgs = {
  id: string;
};

export enum TenantUserRoles {
  TENANT_ADMINISTRATOR = 'TENANT_ADMINISTRATOR',
  TENANT_USER = 'USER',
}

export enum TenantUserInvitationStatuses {
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
}

export enum TenantStatuses {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export enum TenantUserStatuses {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}


export type TenantUserInvitationArgs = {
  where: {
    email?: string;
    tenant?: {
      id: string;
    };
    status?: TenantUserInvitationStatuses;
    role?: TenantUserRoles;
  };
};

export type TenantUsersArgs = {
  where: {
    search?: string;
    tenant?: {
      id: string;
    };
    role?: TenantUserRoles;
  };
};
