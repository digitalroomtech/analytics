import mongoose from 'mongoose';
import { ITenant, ITenantUser, ITenantUserInvitation, OldTenant } from './tenant.types';

const { Schema, model } = mongoose;

const tenantSchema = new Schema<ITenant>(
  {
    name: String,
    timezone: String,
    webhook: String,
    logo: String,
    identityColor: {
      type: String,
      default: '#000',
    },
    allowedUrls: {
      type: Array,
      default: [],
    },
    plan: {
      type: Schema?.Types.ObjectId,
      ref: 'Plans',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE',
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

const tenantUserSchema = new Schema<ITenantUser>(
  {
    role: {
      type: String,
      enum: ['TENANT_ADMINISTRATOR', 'TENANT_USER'],
      default: 'TENANT_USER',
    },
    user: {
      type: Schema?.Types.ObjectId,
      ref: 'Users',
    },
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE',
    },
    isSelected:{
      type: Boolean,
      default: false,
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

const tenantUserInvitationSchema = new Schema<ITenantUserInvitation>(
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

const oldTenantsSchema = new Schema<OldTenant>(
  {
    name: String,
    domain: String,
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'OldTenants' },
);

export const OldTenantsModel = model('OldTenants', oldTenantsSchema);
export const TenantModel = model('Tenants', tenantSchema);
export const TenantUserModel = model('TenantUsers', tenantUserSchema);
export const TenantUserInvitationModel = model('TenantUserInvitations', tenantUserInvitationSchema);
