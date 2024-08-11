import { Request, Response } from 'express';
import { CreateEasyDataEventArgs } from './easy-data-event.types';
import moment from 'moment/moment';


export const easyDataEventCreate = (req: Request, res: Response) => {
  const data = req.body as CreateEasyDataEventArgs;

  if (!(data.name || data.tenant_id || data.uuid || data.user_id)) {
    return res.status(500).json({ message: 'El name y uuid son requeridos' });
  }

  const easyDataEventParams = {
    name: data.name,
    uuid: data.uuid,
    user_id: data.user_id,
    tenant_id: req.body.tenant_id,
    created_at: moment().toISOString(),
    updated_at: moment().toISOString(),
  }


  return res.json({ message: 'Register event successfully.' });
};