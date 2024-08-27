import mongoose from 'mongoose';
import { Analytics, AnalyticParams } from '../analytics.types';

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

const analyticParamsSchema = new Schema<AnalyticParams>(
  {
    key: String,
    value: String,
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    analytic: {
      type: Schema?.Types.ObjectId,
      ref: 'Analytics',
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'analytic_params' },
);

export const AnalyticsModel = model('Analytics', analyticsSchema);

export const AnalyticParamsModel = model('AnalyticParams', analyticParamsSchema);
