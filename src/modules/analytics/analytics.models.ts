import mongoose from 'mongoose';
import {
  Analytics,
  IAuthenticateAnalyticCustom,
  IAuthenticateAnalytic,
  AnalyticParams,
} from './analytics.types';

const { Schema, model } = mongoose;

const oldAnalyticsSchema = new Schema<Analytics>(
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
  { collection: 'Analytics' },
);

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

const authenticateAnalyticsModel = new Schema<IAuthenticateAnalytic>(
  {
    url: {
      type: String,
      require: 'Url origin is required',
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
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
    users: [
      {
        type: Schema?.Types.ObjectId,
        ref: 'Users',
      },
    ],
  },
  { collection: 'authenticate_analytics' },
);

const socialNetworkAnalyticsModel = new Schema<IAuthenticateAnalyticCustom>(
  {
    url: {
      type: String,
      require: 'Url origin is required',
    },
    name: String,
    authenticate_analytic: {
      type: Schema?.Types.ObjectId,
      ref: 'AuthenticateAnalytics',
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
  { collection: 'social_network_analytics' },
);

const socialNetworkSessionAnalyticsModel = new Schema<IAuthenticateAnalyticCustom>(
  {
    url: {
      type: String,
      require: 'Url origin is required',
    },
    name: String,
    authenticate_analytic: {
      type: Schema?.Types.ObjectId,
      ref: 'AuthenticateAnalytics',
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
  { collection: 'social_network_session_analytics' },
);

const pageAnalyticsModel = new Schema<IAuthenticateAnalyticCustom>(
  {
    url: {
      type: String,
      require: 'Url origin is required',
    },
    name: String,
    authenticate_analytic: {
      type: Schema?.Types.ObjectId,
      ref: 'AuthenticateAnalytics',
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
  { collection: 'page_analytics' },
);

export const AnalyticsModel = model('Analytics', analyticsSchema);
export const AnalyticOldModel = model('AnalyticOldModel', oldAnalyticsSchema);
export const SocialNetworkAnalytic = model('SocialNetworkAnalytics', socialNetworkAnalyticsModel);
export const SocialNetworkSessionAnalytic = model(
  'SocialNetworkSessionAnalytics',
  socialNetworkSessionAnalyticsModel,
);
export const PageAnalytic = model('PageAnalytics', pageAnalyticsModel);

export const AuthenticateAnalytic = model('AuthenticateAnalytics', authenticateAnalyticsModel);
export const AnalyticParamsModel = model('AnalyticParams', analyticParamsSchema);
