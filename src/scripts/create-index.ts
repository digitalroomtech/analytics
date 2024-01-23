import { analyticsCollection } from '../utils/mongodb';

const main = async () => {
  const analytics = await analyticsCollection();
  await analytics.createIndex({ uuid: 1 });
  console.log('final');
};

main();
