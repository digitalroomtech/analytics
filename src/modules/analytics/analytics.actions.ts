import { Request as ExpressRequest, Response } from 'express';
import { AnalyticParamsModel, AnalyticsModel } from './analytics.models';
import { IAuthenticateAnalyticName } from './analytics.types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { getOriginalUrl, getSections, getUrlParams } from './analytics.utils';
import { ObjectId } from 'mongodb';

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: IAuthenticateAnalyticName;
  authenticate?: string;
  originUrl?: string;
}

export const createAnalyticParams = async (
  params: { [key: string]: string }[],
  analyticId: ObjectId,
) => {
  if (!analyticId) throw Error('Tenemos problemas al crear los parametros');

  for (const param of params) {
    await AnalyticParamsModel.create({
      ...param,
      analytic: analyticId,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    });
  }
};

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();
  const section = getSections(req.headers.origin || req.body.originUrl);
  const params = getUrlParams(req.headers.origin || req.body.originUrl);
  const originalUrl = getOriginalUrl(req.headers.origin || req.body.originUrl);

  if (!(req.headers.origin || req.body.originUrl)) {
    return res.status(500).json({ message: 'Hay campos requeridos' });
  }

  try {
    const analytic = await AnalyticsModel.create({
      name: 'analytics_authenticate',
      uuid: uuid,
      user_id: 0,
      url: req.headers.origin || req.body.originUrl,
      tenant_id: req.body.tenant_id,
      original_url: originalUrl,
      ...section,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    });

    await createAnalyticParams(params.queryParams, analytic._id);
    await createAnalyticParams(params.hashParams, analytic._id);
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

  const section = getSections(data.originUrl);
  const params = getUrlParams(data.originUrl);
  const originalUrl = getOriginalUrl(data.originUrl);

  const analyticParams = {
    ...section,
    original_url: originalUrl,
    name: data.name,
    uuid: data.uuid,
    user_id: data.user_id,
    url: data.originUrl,
    tenant_id: req.body.tenant_id,
    created_at: moment().toISOString(),
    updated_at: moment().toISOString(),
  };

  // { key:"sourceCampaign", value:"google", analytic: Obj}, created_at}
  try {
    const analytic = await AnalyticsModel.create({
      analyticParams,
    });

    await createAnalyticParams(params.queryParams, analytic._id);
    await createAnalyticParams(params.hashParams, analytic._id);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register event successfully.' });
}

export const isUuidAuthenticated = async (uuid: string) => {
  return await AnalyticsModel.find({ uuid });
};
