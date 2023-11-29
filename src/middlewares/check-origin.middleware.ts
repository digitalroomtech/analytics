import { Request as ExpressRequest, Response, NextFunction } from 'express';
import { PrismaClient } from '../../prisma/generated/client';

interface Request extends ExpressRequest {
  tenant_id?: number;
}

const prisma = new PrismaClient();

export const checkOriginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;

  const tenantRecord = await prisma.tenants.findUnique({
    where: {
      domain: origin || '',
    },
  });

  if (!tenantRecord) {
    return res.status(400).send({ message: 'Invalid origin' });
  }

  req.body.tenant_id = Number(tenantRecord.id);

  return next();
};
