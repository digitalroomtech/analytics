import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsModel, TempAnalyticsModel } from './models/analytics';
import { ObjectId } from 'mongodb';
import { getOriginalUrl, getSections } from '../modules/analytics/analytics.utils';

const main = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log({
    created_at: { $gte: new Date('2024-02-01 08:00'), $lte: new Date('2024-02-01 09:00') },
  });
  const cursor: { count: number }[] = await AnalyticsModel.aggregate([
    {
      $match: {
        created_at: { $gte: new Date('2024-01-31 20:00'), $lte: new Date('2024-02-01 08:00') },
      },
    },
    {
      $group: {
        _id: null,
        count: { $sum: 1 },
      },
    },
  ]);
  console.log('cursor', cursor);

  const BY_PAGE = 100000;

  const pages = Math.ceil((cursor[0].count || 0) / BY_PAGE);
  console.log('cursor', cursor);

  try {
    for (let i = 0; i < pages; i++) {
      console.log(`${i}/${pages}`);

      const response = await AnalyticsModel.find({
        created_at: { $gte: new Date('2024-01-31 20:00'), $lte: new Date('2024-02-01 08:00') },
      })
        .skip(i * BY_PAGE)
        .limit(BY_PAGE);

      console.log('response', response[0]);

      //
      const data = response.map((responseElement) => {
        const { _id, name, uuid, user_id, ...params } = responseElement;
        const section = getSections(params.url || 'https://vanguardia.com.mx');
        const originalUrl = getOriginalUrl(params.url || 'https://vanguardia.com.mx');
        return {
          name,
          uuid,
          user_id,
          created_at: new ObjectId(_id).getTimestamp().toISOString(),
          updated_at: new ObjectId(_id).getTimestamp().toISOString(),
          url: params.url || 'https://vanguardia.com.mx',
          ...section,
          tenant_id: new ObjectId('65b39e5af17e852e77abc149'),
          original_url: originalUrl,
        };
      });

      console.log(data[0]);

      // await TempAnalyticsModel.create(data);
    }
  } catch (e) {
    console.log('e', e);
  }
};

main();
