import { PrismaClient } from '../../../prisma/generated/client';
import { Request as ExpressRequest, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { analyticsCollection, tenantsCollection } from '../../utils/mongodb';

const prisma = new PrismaClient();

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: string;
  uuid?: string;
  originUrl?: string;
}

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();
  try {
    const analytics = await analyticsCollection();

    await analytics.insertOne({
      name: 'analytics_authenticate',
      uuid: uuid,
      user_id: 0,
      url: req.headers.origin || '',
      tenant_id: req.body.tenant_id,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: uuid });
}

export async function analyticsCreate(req: Request, res: Response) {
  const data = req.body;
  if (!(data.name || data.tenant_id || data.uuid || data.user_id || data.originUrl)) {
    return res.status(500).json({ message: 'El name y uuid son requeridos' });
  }
  try {
    const analytics = await analyticsCollection();
    await analytics.insertOne({
      name: data.name,
      uuid: data.uuid,
      user_id: data.user_id,
      url: data.originUrl,
      tenant_id: req.body.tenant_id,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register event successfully.' });
}

export const isUuidAuthenticated = async (uuid: string) => {
  const analytics = await analyticsCollection();
  const session = await analytics.findOne({
    uuid,
  });

  return !!session;
};
