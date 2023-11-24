import { PrismaClient } from '../../../prisma/generated/client';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();

  try {
    await prisma.analytics.create({
      data: {
        name: 'analytics_authenticate',
        uuid: uuid,
        user_id: 0,
        url: req.headers.origin || '',
        tenant: '',
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: uuid });
}

export async function analyticsCreate(req: Request, res: Response) {
  const data = req.body;

  if (!data.name || !data.uuid || !data.tenant) {
    return res.status(500).json({ message: 'El name, uuid y tenant son requeridos' });
  }

  try {
    await prisma.analytics.create({
      data: data,
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
