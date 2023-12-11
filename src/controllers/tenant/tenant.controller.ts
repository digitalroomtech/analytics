import { Request as ExpressRequest, Response } from 'express';
import { PrismaClient } from '../../../prisma/generated/client';

const prisma = new PrismaClient();
interface Request extends ExpressRequest {
  name?: string;
  domain?: string;
}

export async function tenantCreate(req: Request, res: Response) {
  const data = req.body;
  if (!(data.name || data.domain)) {
    return res.status(500).json({ message: 'El name y domain son requeridos' });
  }

  try {
    await prisma.tenants.create({
      data: {
        name: data.name,
        domain: data.domain,
      },
    });
    await prisma.$disconnect();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register tenant successfully.' });
}
