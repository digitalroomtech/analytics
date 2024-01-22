import { IAuthenticateAnalytic } from '../analytics/analytics.types';
export interface IUser {
  user_id?: number;
  authenticate_analytic: IAuthenticateAnalytic;
  created_at?: string;
  updated_at?: string;
}

export interface IFindOneOrCreate {
  user_id: number;
}
