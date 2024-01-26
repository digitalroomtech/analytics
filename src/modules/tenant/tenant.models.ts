import mongoose from 'mongoose';
import { ITenant, ITenantUser, ITenantUserInvitation } from './tenant.types';

const { Schema, model } = mongoose;

const tenantModel = new Schema<ITenant>(
  {
    name: String,
    timezone: String,
    webhook: String,
    logo: String,
    allowedUrls: {
      type: Array,
      default: [],
    },
    plan: {
      type: Schema?.Types.ObjectId,
      ref: 'Plans',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'tenants' },
);

const tenantUserModel = new Schema<ITenantUser>(
  {
    role: {
      type: String,
      enum: ['TENANT_ADMINISTRATOR', 'TENANT_USER'],
      default: 'USER',
    },
    user: {
      type: Schema?.Types.ObjectId,
      ref: 'Users',
    },
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'tenant_users' },
);

const tenantUserInvitationModel = new Schema<ITenantUserInvitation>(
  {
    role: {
      type: String,
      enum: ['TENANT_ADMINISTRATOR', 'TENANT_USER'],
      default: 'TENANT_USER',
    },
    status: {
      type: String,
      enum: ['ACCEPTED', 'REJECTED', 'PENDING'],
      default: 'PENDING',
    },
    email: String,
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'tenant_user_invitations' },
);

export const TenantModel = model('Tenants', tenantModel);
export const TenantUserModel = model('TenantUsers', tenantUserModel);
export const TenantUserInvitationModel = model('TenantUserInvitations', tenantUserInvitationModel);
