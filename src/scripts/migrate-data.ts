import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { AnalyticsOldModel } from './old-data/old-data.models';
import * as fs from 'fs';

const main = async () => {
  await mongoose.connect(MONGODB_URI);

  const pages = Math.ceil(23260000 / 30000);
  try {
    for (let i = 0; i < pages; i++) {
      const response: { _id: string; count: number }[] = await AnalyticsOldModel.aggregate([
        { $limit: 30000 },
        { $skip: i },
      ]);

      fs.writeFileSync(`public/${i}.json`, JSON.stringify(response));
      console.log(`pagina ${i}/${pages}`);
    }
  } catch (e) {
    console.log('e', e);
  }
};

main();
