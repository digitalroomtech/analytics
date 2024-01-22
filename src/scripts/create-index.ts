import { analyticsCollection } from '../utils/mongodb';

const main = async () => {
  const analytics = await analyticsCollection();
  await analytics.createIndex('uuid');
  console.log('final');
};

main();
