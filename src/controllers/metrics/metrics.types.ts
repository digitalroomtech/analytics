import { IAuthenticateAnalyticName } from '../analytics/analytics.types';

export type MetricGroupResult = {
  _id?: { name: IAuthenticateAnalyticName };
  count?: number;
};

export interface IMetricAnalytics {
  name?: string;
  count?: number;
  time_ago?: string;
  time_since?: string;
}

export enum MetricModels {
  socialNetworkMetrics = 'social_network_metrics',
  socialNetworkSessionMetrics = 'social_network_session_metrics',
  pageMetrics = 'page_metrics',
}
