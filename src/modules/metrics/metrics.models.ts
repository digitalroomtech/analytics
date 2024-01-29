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

const eventMetrics = new Schema(
  {
    name: String,
    count: Number,
  },
  { collection: 'Analytics' },
);

const registeredUserMetrics = new Schema(
  {
    user_type: String,
    count: Number,
  },
  { collection: 'Analytics' },
);

const heatMapMetrics = new Schema(
  {
    date_time: {
      date: String,
      time: String,
    },
    count: Number,
  },
  { collection: 'Analytics' },
);

const urlVisiMetrics = new Schema(
  {
    url: String,
    count: Number,
  },
  { collection: 'Analytics' },
);

const userByMonthMetrics = new Schema(
  {
    date: String,
    count: Number,
  },
  { collection: 'Analytics' },
);

export const SocialNetworkSessionMetrics = model(
  'SocialNetworkSessionMetrics',
  socialNetworkSessionMetrics,
);
export const SocialNetworkMetrics = model('SocialNetworkMetrics', socialNetworkMetrics);
export const PageMetrics = model('PageMetrics', pageMetrics);
export const EventsMetricsModel = model('EventsMetrics', eventMetrics);
export const RegisteredUserMetricsModel = model('RegisteredUserMetrics', registeredUserMetrics);
export const HeatMatMetricsModel = model('HeatMatMetrics', heatMapMetrics);
export const UrlVisitMetricsModel = model('UrlVisitMetrics', urlVisiMetrics);
export const UserByMonthMetricsModel = model('UserByMonthMetrics', userByMonthMetrics);
