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

  console.log('res', response[0]);

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

    if (update) {
      console.log(`updated: ${i}/${response.length}`, update?._id);
    } else {
      const created = await TempAnalyticsModel.create({
        name,
        uuid,
        user_id,

        created_at,
        updated_at,
        url: url || 'https://vanguardia.com.mx',
        ...section,
        tenant_id: new ObjectId('65b39e5af17e852e77abc149'),
        original_url: originalUrl,
      });

      console.log(`created: ${i}/${response.length}`, created?._id);
    }
  }

  console.log('FINISH');
};

main();
