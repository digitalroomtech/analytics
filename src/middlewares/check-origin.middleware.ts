import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { TenantModel } from '../modules/tenant/tenant.models';
import { TenantStatuses } from '../modules/tenant/tenant.types';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const sessionOrigin = req.headers['analytics-session-origin'];
  const url = new URL((sessionOrigin || req.headers.origin) as string);
  let tenant = undefined;

  try {
    tenant = await TenantModel.findOne({
      allowedUrls: url.origin || '',
      status: TenantStatuses.ACTIVE,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  if (!tenant) {
    return res.status(400).send({
      message: `Invalid origin: ${url.origin} ${sessionOrigin} ${
        req.headers.origin
      } ${JSON.stringify(url)}`,
    });
  }
  req.body.tenant_id = tenant._id;
  req.body.originUrl = url.href;

  return next();
};
