import mongoose from 'mongoose';
import { EasyDataEvent, EasyDataMetaEvent } from './easy-data-event.types';

const { Schema, model } = mongoose;

const easyDataEventSchema = new Schema<EasyDataEvent>(
  {
    name: {
      type: String,
      index: true,
    },
    uuid: String,
    user_id: Number,
    tenant_id: {
      type: Schema?.Types.ObjectId,
      ref: 'tenants',
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

const easyDataMetaEventSchema = new Schema<EasyDataMetaEvent>(
  {
    meta_key: String,
    meta_value: String,
    event: {
      type: Schema?.Types.ObjectId,
      ref: 'events',
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
  { collection: 'meta_events' },
);

export const EasyDataEventModel = model('EasyDataEvent', easyDataEventSchema);

export const EasyDataMetaEventModel = model('EasyDataMetaEvent', easyDataMetaEventSchema);