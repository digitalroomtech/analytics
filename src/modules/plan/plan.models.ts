import mongoose from 'mongoose';
import { IPlan } from './plan.types';

const { Schema, model } = mongoose;

const planModel = new Schema<IPlan>(
  {
    title: String,
    description: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'plans' },
);

export const PlanModel = model('Plans', planModel);
