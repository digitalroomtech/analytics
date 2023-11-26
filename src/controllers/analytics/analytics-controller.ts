import { PrismaClient } from '../../../prisma/generated/client';
import { Request as ExpressRequest, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();
interface Request extends ExpressRequest {
  tenant_id?: number;
}

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();

  try {
    await prisma.analytics.create({
      data: {
        name: 'analytics_authenticate',
        uuid: uuid,
        user_id: 0,
        url: req.headers.origin || '',
        tenant_id: null,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: uuid });
}

export async function analyticsCreate(req: Request, res: Response) {
  const data = req.body;

  if (!data.name || !data.uuid) {
    return res.status(500).json({ message: 'El name y uuid son requeridos' });
  }

  try {
    await prisma.analytics.create({
      data: {
        ...data,
        tenant: {
          connect: {
            id: req.tenant_id,
          },
        },
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register event successfully.' });
}

export const isUuidAuthenticated = async (uuid: string) => {
  const session = await prisma.analytics.findUnique({
    where: {
      uuid: uuid,
    },
  });

  return !!session;
};
