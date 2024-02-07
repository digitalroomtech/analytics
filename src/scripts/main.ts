import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsModel, TempAnalyticsModel } from './models/analytics';
import { ObjectId } from 'mongodb';
import { getOriginalUrl, getSections } from '../modules/analytics/analytics.utils';

const main = async () => {
  await mongoose.connect(MONGODB_URI);

  const count = await AnalyticsModel.countDocuments();

  const BY_PAGE = 13000;

  const pages = 5;

  try {
    const response = await AnalyticsModel.find().skip(500000).limit(13000);

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

    await TempAnalyticsModel.create(data);
  } catch (e) {
    console.log('e', e);
  }

  console.log('FINISH');
};

main();
