import { Analytics } from '../../modules/analytics/analytics.types';
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const analyticsSchema = new Schema<Analytics>(
  {
    name: {
      type: String,
      index: true,
    },
    uuid: String,
    section: String,
    subsection: String,
    url: {
      type: String,
      require: 'Url origin is required',
    },
    original_url: {
      type: String,
      index: true,
    },
    user_id: Number,
    tenant_id: {
      type: Schema?.Types.ObjectId,
      ref: 'tenants',
    },
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
  { collection: 'analytics' },
);

const tempAnalyticsSchema = new Schema<Analytics>(
  {
    name: {
      type: String,
      index: true,
    },
    uuid: String,
    section: String,
    subsection: String,
    url: {
      type: String,
      require: 'Url origin is required',
    },
    original_url: {
      type: String,
      index: true,
    },
    user_id: Number,
    tenant_id: {
      type: Schema?.Types.ObjectId,
      ref: 'tenants',
    },
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
  { collection: 'analytics' },
);

export const AnalyticsModel = model('analyticsModel', analyticsSchema);
export const TempAnalyticsModel = model('tempAnalyticsSchema', tempAnalyticsSchema);
