import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { isUuidAuthenticated } from '../controllers/analytics/analytics-controller';
import { PrismaClient } from '../../prisma/generated/client';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

const prisma = new PrismaClient();
const requestCounts: { [key: string]: number } = {};

export const checkSessionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];
  const origin = req.headers.origin;

  if (!session) {
    return res.status(400).send('No analytics-session header');
  }

  const tenantRecord = await prisma.tenants.findUnique({
    where: {
      domain: origin || '',
    },
  });

  if (!tenantRecord) {
    return res.status(400).send('Invalid origin');
  }

  req.tenant_id = Number(tenantRecord.id);

  const uuid = session.toString();

  if (!requestCounts[uuid]) {
    requestCounts[uuid] = 0;
  }

  requestCounts[uuid]++;

  if (requestCounts[uuid] > 20) {
    return res.status(429).send('Too Many Requests');
  }

  setTimeout(() => {
    requestCounts[uuid]--;
    if (requestCounts[uuid] === 0) {
      delete requestCounts[uuid];
    }
  }, 60000);

  const isAuthenticated = await isUuidAuthenticated(uuid);

  if (!isAuthenticated) {
    return res.status(403).send('Forbidden');
  }

  return next();
};
