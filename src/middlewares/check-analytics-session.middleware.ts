import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { isUuidAuthenticated } from '../controllers/analytics/analytics-controller';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

export const checkSessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(403).send({ message: 'No analytics-session header' });
  }

  const isAuthenticated = await isUuidAuthenticated(session.toString());
  if (!isAuthenticated) {
    return res.status(403).send({ message: 'Forbidden' });
  }
  req.body.uuid = session;

  return next();
};
