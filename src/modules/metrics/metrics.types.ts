import path from 'path';
import { IAuthenticateAnalyticName } from '../analytics/analytics.types';
import { ITenant } from '../tenant/tenant.types';
import * as fs from 'fs';

export type MetricGroupResult = {
  _id?: { name: IAuthenticateAnalyticName };
  count?: number;
};

export interface IMetricAnalytics {
  name?: string;
  count?: number;
  time_ago?: string;
  time_since?: string;
  tenant: ITenant;
}

export enum MetricModels {
  socialNetworkMetrics = 'social_network_metrics',
  socialNetworkSessionMetrics = 'social_network_session_metrics',
  pageMetrics = 'page_metrics',
}

export const metricsTypeDefs = fs.readFileSync(path.join(__dirname, 'metrics.queries.graphql'), 'utf8');