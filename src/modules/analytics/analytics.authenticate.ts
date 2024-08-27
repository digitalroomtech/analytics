import { Request as ExpressRequest, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment/moment';
import { EventMeta, IAuthenticateAnalyticName } from './analytics.types';
import { EventMetaModel, EventModel } from './v2/analytics.models';

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: IAuthenticateAnalyticName;
  authenticate?: string;
  originUrl?: string;
}

export async function authenticate(req: Request, res: Response) {
  const uuid = uuidv4();
  const { tenant_id, event_meta } = req.body;

  console.log(
    { tenant_id, event_meta },
  );

  try {
    const authenticateEvent = await EventModel.create({
      name: 'authenticate',
      uuid: uuid,
      user_id: 0,
      tenant_id: tenant_id,
      created_at: moment().toISOString(),
      updated_at: moment().toISOString(),
    });


    if (event_meta.length) {
      const results = await EventMetaModel.insertMany([...event_meta.map((ev: EventMeta) => ({
        ...ev,
        event: authenticateEvent._id,
      }))]);

      await EventModel.findByIdAndUpdate(authenticateEvent._id, {
        $push: {
          event_meta: results.map((result) => result._id),
        },
      }, { new: true, useFindAndModify: false });

    }


  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: uuid });
}