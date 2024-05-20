import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { TenantModel } from '../modules/tenant/tenant.models';
import { ITenant, TenantStatuses } from '../modules/tenant/tenant.types';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const sessionOrigin = req.headers['analytics-session-origin'];

    const url = new URL((sessionOrigin || req.headers.origin) as string);
    let tenant: ITenant | undefined | null = undefined;

    tenant = await TenantModel.findOne({
      allowedUrls: url.origin || '',
      status: TenantStatuses.ACTIVE,
    });

    if (!tenant) {
      return res.status(400).send({
        message: `Invalid origin: ${url.origin} ${sessionOrigin} ${
          req.headers.origin
        } ${JSON.stringify(url)}`,
      });
    }
    req.body.tenant_id = tenant._id;
    req.body.originUrl = url.href;

  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }


  return next();
};
