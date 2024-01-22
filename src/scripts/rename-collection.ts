import mongoose from 'mongoose';
import { MONGODB_URI } from '../utils/constants';
import { TenantModel } from '../controllers/tenant/tenant.models';

const main = async () => {
  const mongooseConnection = await mongoose.connect(MONGODB_URI);
  const db = mongooseConnection.connection.db;

  // Rename the `test` collection to `foobar`
  return db.collection('Tenants').rename('OldTenants');
};

main();
