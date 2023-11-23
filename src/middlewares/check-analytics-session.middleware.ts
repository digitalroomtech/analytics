import { Request, Response, NextFunction } from 'express';
import { isUuidAuthenticated } from '../controllers/analytics/analytics-controller';

export const checkSessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(400).send('No analytics-session header');
  }

  const isAuthenticated = await isUuidAuthenticated(session.toString());

  if (!isAuthenticated) {
    return res.status(403).send('Forbidden');
  }

  return next();
};
