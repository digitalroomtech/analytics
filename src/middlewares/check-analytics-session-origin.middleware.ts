import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { isUuidAuthenticated } from '../controllers/analytics/analytics-controller';
import { ENVIRONMENT } from '../utils/constants';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkSessionOriginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (ENVIRONMENT === 'local') return next();
  const sessionOrigin = req.headers['analytics-session-origin'];
  if (!sessionOrigin) {
    return res.status(403).send({ message: 'No analytics-session-origin' });
  }
  req.body.originUrl = sessionOrigin;

  return next();
};
