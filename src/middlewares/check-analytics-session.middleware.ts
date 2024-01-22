import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { isAuthenticateAnalytics } from '../controllers/analytics/analytics.controller';
import { ENVIRONMENT } from '../utils/constants';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkSessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(403).send({ message: 'No analytics-session header' });
  }

  const authenticateAnalytics = await isAuthenticateAnalytics(session.toString());
  if (!authenticateAnalytics) {
    return res.status(403).send({ message: 'Forbidden !' });
  }
  req.body.authenticate = authenticateAnalytics._id;

  return next();
};
