import { MongoClient, ObjectId } from 'mongodb';
import { MONGODB_URI } from './constants';

interface Analytics {
  _id?: ObjectId;
  name?: string;
  uuid?: string;
  url?: string;
  user_id?: number;
  tenant_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

interface Tenants {
  _id?: string;
  name?: string;
  domain?: string;
  analytics?: Analytics[];
  created_at?: string;
  updated_at?: string;
}

export const client = new MongoClient(MONGODB_URI);

const database = client.db('admin');

export const analyticsCollection = async () => {
  return database.collection<Analytics>('Analytics');
};

export const tenantsCollection = async () => {
  return database.collection<Tenants>('OldTenants');
};
