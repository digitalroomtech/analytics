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
    { $skip: 14679 },
  ]);

  const uuids = await TempAnalyticsModel.find({
    uuid: {
      $in: response.map((responseElement) => responseElement.uuid),
    },
    name: 'swg_register_user',
  });

  const tempUuids = uuids.map(({ uuid }) => uuid);

  const createdUuids = response.filter(
    (responseElement) => !tempUuids.includes(responseElement.uuid),
  );
  const updatedUuids = response.filter((responseElement) =>
    tempUuids.includes(responseElement.uuid),
  );

  const data = createdUuids.map((responseElement) => {
    const { _id, name, uuid, user_id, created_at, updated_at, url } = responseElement;
    const section = getSections(url || 'https://vanguardia.com.mx');
    const originalUrl = getOriginalUrl(url || 'https://vanguardia.com.mx');
    return {
      name,
      uuid,
      user_id,

      created_at,
      updated_at,
      url: url || 'https://vanguardia.com.mx',
      ...section,
      tenant_id: new ObjectId('65b39e5af17e852e77abc149'),
      original_url: originalUrl,
    };
  });

  await TempAnalyticsModel.create(data);
  console.log('created:', data.length);

  for (let i = 9141; i < updatedUuids.length; i++) {
    const { _id, name, uuid, url } = response[i];
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

    console.log(`updated: ${i}/${response.length}`, update?._id);

    console.log('FINISH');
  }
};

main();
