import mongoose from 'mongoose';
import { Event, EventMeta } from '../analytics.types';
const { Schema, model } = mongoose;

const eventsSchema = new Schema<Event>(
  {
    name: {
      type: String,
      index: true,
    },
    uuid: {
      type: String,
      index: true
    },
    user_id: Number,
    event_meta:[
      {
        type: Schema?.Types.ObjectId,
        ref: 'event_meta',
        index: true
      }
    ],
    tenant_id: {
      type: Schema?.Types.ObjectId,
      ref: 'tenants',
      index: true
    },
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'events' },
);

const eventMetaSchema = new Schema<EventMeta>(
  {
    meta_key: {
      type:String,
      index:true
    },
    meta_value: String,
    event: {
      type: Schema?.Types.ObjectId,
      ref: 'events',
      index: true
    },
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'event_meta' },
);

export const EventModel = model('events', eventsSchema);
export const EventMetaModel = model('event_meta', eventMetaSchema);