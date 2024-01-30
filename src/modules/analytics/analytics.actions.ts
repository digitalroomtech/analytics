import { Request as ExpressRequest, Response } from 'express';
import { AnalyticsModel } from './analytics.models';
import { IAuthenticateAnalyticName } from './analytics.types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: IAuthenticateAnalyticName;
  authenticate?: string;
  originUrl?: string;
}

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();

  try {
    await AnalyticsModel.create({
      name: 'analytics_authenticate',
      uuid: uuid,
      user_id: 0,
      url: req.headers.origin || req.body.originUrl,
      tenant_id: req.body.tenant_id,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: uuid });
}

export async function analyticsCreate(req: Request, res: Response) {
  const data = req.body;
  if (!(data.name || data.tenant_id || data.uuid || data.user_id || data.originUrl)) {
    return res.status(500).json({ message: 'El name y uuid son requeridos' });
  }

  try {
    await AnalyticsModel.create({
      name: data.name,
      uuid: data.uuid,
      user_id: data.user_id,
      url: data.originUrl,
      tenant_id: req.body.tenant_id,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register event successfully.' });
}

export const isUuidAuthenticated = async (uuid: string) => {
  return await AnalyticsModel.find({ uuid });
};
