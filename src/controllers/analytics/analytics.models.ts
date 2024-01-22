import mongoose from 'mongoose';
import { IAuthenticateAnalytic, IAuthenticateAnalyticCustom } from './analytics.types';

const { Schema, model } = mongoose;

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

export const AuthenticateAnalytic = model('AuthenticateAnalytics', authenticateAnalyticsModel);
export const SocialNetworkAnalytic = model('SocialNetworkAnalytics', socialNetworkAnalyticsModel);
export const SocialNetworkSessionAnalytic = model(
  'SocialNetworkSessionAnalytics',
  socialNetworkSessionAnalyticsModel,
);
export const PageAnalytic = model('PageAnalytics', pageAnalyticsModel);
