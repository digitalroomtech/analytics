import mongoose from 'mongoose';
import { ITenant } from '../../controllers/tenant/tenant.types';

const { Schema, model } = mongoose;

const tenantsOldModel = new Schema<ITenant>(
  {
    name: String,
    timezone: String,
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
    authenticate_analytics: {
      type: Schema?.Types.ObjectId,
      ref: 'TenantsOldModel',
    },
  },
  { collection: 'Tenants' },
);

const analyticsOldModel = new Schema<{
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  user_id?: number;
  tenant_id?: string;
  url?: string;
  uuid?: string;
}>(
  {
    url: String,
    name: String,
    uuid: String,
    user_id: String,
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
  { collection: 'Analytics' },
);

export const AnalyticsOldModel = model('AnalyticsOldModel', analyticsOldModel);
export const TenantsOldModel = model('TenantsOldModel', tenantsOldModel);
