import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { tenantsCollection } from '../utils/mongodb';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const sessionOrigin = req.headers['analytics-session-origin'];
  const url = new URL((sessionOrigin || req.headers.origin) as string);
  let tenantRecord = undefined;
  try {
    const tenants = await tenantsCollection();
    tenantRecord = await tenants.findOne({
      domain: url.origin || '',
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
  if (!tenantRecord) {
    return res.status(400).send({ message: 'Invalid origin' });
  }
  req.body.tenant_id = tenantRecord._id;
  req.body.originUrl = url.href;

  return next();
};
