import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { PrismaClient } from '../../prisma/generated/client';
import { ENVIRONMENT } from '../utils/constants';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

const prisma = new PrismaClient();

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const sessionOrigin = req.headers['analytics-session-origin'] as string;
  const origin = (req.headers.origin || sessionOrigin).replace(/\/+$/, '');
  const tenantRecord = await prisma.tenants.findUnique({
    where: {
      domain: origin || '',
    },
  });

  await prisma.$disconnect();

  if (!tenantRecord) {
    return res.status(400).send({ message: 'Invalid origin' });
  }
  req.body.tenant_id = tenantRecord.id;
  req.body.originUrl = origin;

  return next();
};
