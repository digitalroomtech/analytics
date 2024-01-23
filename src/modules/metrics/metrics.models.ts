import mongoose from 'mongoose';
import { IMetricAnalytics } from './metrics.types';

const { Schema, model } = mongoose;

const socialNetworkMetrics = new Schema<IMetricAnalytics>(
  {
    name: String,
    count: Number,
    time_ago: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    time_since: {
      type: Date,
      default: Date.now(),
    },
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
  },
  { collection: 'social_network_metrics' },
);

const socialNetworkSessionMetrics = new Schema<IMetricAnalytics>(
  {
    name: String,
    count: Number,
    time_ago: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    time_since: {
      type: Date,
      default: Date.now(),
    },
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
  },
  { collection: 'social_network_session_metrics' },
);

const pageMetrics = new Schema<IMetricAnalytics>(
  {
    name: String,
    count: Number,
    time_ago: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    time_since: {
      type: Date,
      default: Date.now(),
    },
    tenant: {
      type: Schema?.Types.ObjectId,
      ref: 'Tenants',
    },
  },
  { collection: 'page_metrics' },
);

export const SocialNetworkSessionMetrics = model(
  'SocialNetworkSessionMetrics',
  socialNetworkSessionMetrics,
);
export const SocialNetworkMetrics = model('SocialNetworkMetrics', socialNetworkMetrics);
export const PageMetrics = model('PageMetrics', pageMetrics);
