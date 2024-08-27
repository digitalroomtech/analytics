import { Request as ExpressRequest, Response } from 'express';
import { EventMeta, IAuthenticateAnalyticName } from '../analytics.types';
import { EventMetaModel, EventModel } from './analytics.models';
import moment from 'moment';

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: IAuthenticateAnalyticName;
  authenticate?: string;
  originUrl?: string;
}

export const eventsCreate = async (req: Request, res: Response) => {

  const { name, user_id, uuid, event_meta, tenant_id } = req.body;
  console.log('EVENT', req.body);
  const event = await EventModel.create({
    name,
    uuid: uuid,
    user_id,
    tenant_id: tenant_id,
    created_at: moment().toISOString(),
    updated_at: moment().toISOString(),
  });

  if (event_meta.length) {
    const results = await EventMetaModel.insertMany([...event_meta.map((ev: EventMeta) => ({
      ...ev,
      event: event._id,
    }))]);

    await EventModel.findByIdAndUpdate(event._id, {
      $push: {
        event_meta: results.map((result) => result._id),
      },
    }, { new: true, useFindAndModify: false });

  }


  console.log('EVENT', { name, id: event._id });


  return res.json({ message: 'Register event successfully.' });
};