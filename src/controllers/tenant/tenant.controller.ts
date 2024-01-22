import { Request as ExpressRequest, Response } from 'express';
import { TenantModel } from './tenant.models';

interface Request extends ExpressRequest {
  name?: string;
  domain?: string;
}

export async function tenantCreate(req: Request, res: Response) {
  const data = req.body;
  if (!(data.name || data.domain)) {
    return res.status(500).json({ message: 'El name y domain son requeridos' });
  }
  let tenantCreate;

  try {
    tenantCreate = await TenantModel.create({
      name: data.name,
      domain: data.domain,
      timezone: data.timezone,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register tenant successfully.', tenant_id: tenantCreate._id });
}
