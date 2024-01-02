import dotenv from 'dotenv';

dotenv.config();

export const MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
export const ENVIRONMENT = process.env.ENVIRONMENT || 'local';
export const MONGODB_URI = process.env.DATABASE_URL || '';
