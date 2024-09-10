import { Request as ExpressRequest, Response } from 'express';
import { EventMeta, IAuthenticateAnalyticName } from '../analytics.types';
import { EventMetaModel, EventModel } from './analytics.models';
import moment from 'moment';
import { ObjectId } from 'mongodb';

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

      event: event._id,
      meta_key: ev.meta_key,
      meta_value: ev.meta_value || 'Desconocido'
    }))]);

    await EventModel.findByIdAndUpdate(event._id, {
      $push: {
        event_meta: results.map((result) => result._id),
      },
    }, { new: true, useFindAndModify: false });

  }


  console.log('EVENT', { name, id: event._id });


  return res.json({ message: 'Register event successfully.', event_id: event._id });
};

export const eventsUpdate = async (req: Request, res: Response) => {

  const { event_meta, event_id } = req.body;

  for (const meta of event_meta) {
    await EventMetaModel.findOneAndUpdate({
        event: new ObjectId(event_id),
        meta_key: meta.meta_key,
      }, {
        meta_value: meta.meta_value,
      },
      { new: true, upsert: true });
  }

  return res.json({ message: 'Register event successfully.' });

};