import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { TenantModel } from '../modules/tenant/tenant.models';

const main = async () => {
  const mongooseConnection = await mongoose.connect(MONGODB_URI);
  const db = mongooseConnection.connection.db;

  // Rename the `test` collection to `foobar`
  return db.collection('temp_analytics').rename('analytics');
};

main();
