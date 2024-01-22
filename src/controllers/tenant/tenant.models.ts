import mongoose from 'mongoose';
import { ITenant } from './tenant.types';

const { Schema, model } = mongoose;

const tenantModel = new Schema<ITenant>(
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
      ref: 'AuthenticateAnalytics',
    },
  },
  { collection: 'Tenants' },
);

export const TenantModel = model('Tenants', tenantModel);
