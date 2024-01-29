import fs from 'fs';
import path from 'path';
import { TenantUserRoles } from '../tenant/tenant.types';

export const planTypeDefs = fs.readFileSync(path.join(__dirname, 'plan.queries.graphql'), 'utf8');

export interface IPlan {
  id?: string;
  title?: string;
  description?: string;
  status?: PlanStatuses;
  createdAt?: string;
  updatedAt?: string;
}

export type CreatePlanArgs = {
  input: {
    title?: string;
    description?: string;
  };
};

export type UpdatePlanArgs = {
  input: {
    id?:string;
    title?: string;
    description?: string;
    status?: PlanStatuses;
  };
};


export enum PlanStatuses {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export type PlansArgs = {
  where: {
    status?: PlanStatuses;
  };
};