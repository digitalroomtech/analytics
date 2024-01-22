import { IAuthenticateAnalytic } from '../analytics/analytics.types';

export interface ITenant {
  _id?: string;
  name?: string;
  domain?: string;
  timezone?: string;
  created_at?: string;
  updated_at?: string;
  authenticate_analytics?: [IAuthenticateAnalytic];
}
