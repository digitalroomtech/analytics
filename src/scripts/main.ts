import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsModel, TempAnalyticsModel } from './models/analytics';
import { getOriginalUrl, getSections } from '../modules/analytics/analytics.utils';
import { ObjectId } from 'mongodb';

const main = async () => {
  await mongoose.connect(MONGODB_URI);

  const response = await AnalyticsModel.aggregate([
    {
      $match: {
        name: 'swg_register_user',
        url: {
          $ne: 'https://vanguardia.com.mx',
        },
      },
    },
  ]);

  for (let i = 0; i < response.length; i++) {
    const { _id, name, uuid, user_id, created_at, updated_at, url } = response[i];
    const section = getSections(url || 'https://vanguardia.com.mx');
    const originalUrl = getOriginalUrl(url || 'https://vanguardia.com.mx');
    const update = await TempAnalyticsModel.findOneAndUpdate(
      { uuid, name },
      {
        url: url || 'https://vanguardia.com.mx',
        ...section,
        original_url: originalUrl,
      },
    );

    console.log('id', update?._id);
  }
};

main();
