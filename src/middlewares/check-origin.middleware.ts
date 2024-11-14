import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { TenantModel } from '../modules/tenant/tenant.models';
import { TenantStatuses } from '../modules/tenant/tenant.types';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {

  try {

    let url = '';
    const origin = req.headers.origin || req.headers['es'] as string || '';
    console.log({ origin });
    if (origin) {
      const urlOrigin = new URL(origin);
      url = urlOrigin.origin;
    }
    const tenant = await TenantModel.findOne({
      allowedUrls: url || req.headers['analytics-application-id'],
      status: TenantStatuses.ACTIVE,
    });

    if (!tenant) {
      return res.status(400).send({
        message: `Invalid origin: ${url} ${origin} ${
          req.headers.origin
        } ${JSON.stringify(url)}`,
      });
    }
    req.body.tenant_id = tenant._id;

  } catch (error: any) {
    console.log({ req, error });
    return res.status(500).json({ message: error.message });
  }

  return next();
};
