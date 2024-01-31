import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsOldModel } from './old-data/old-data.models';
import * as fs from 'fs';
import { AnalyticsModel } from '../modules/analytics/analytics.models';

const main = async () => {
  await mongoose.connect(MONGODB_URI);
  const count = await AnalyticsModel.countDocuments();
  const pages = Math.ceil(count / 50000);
  try {
    for (let i = 0; i < pages; i++) {
      const response = await AnalyticsModel.find().limit(50000).skip(i);
    }
  } catch (e) {
    console.log('e', e);
  }
};

main();
