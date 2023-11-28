import dotenv from 'dotenv';

dotenv.config();

export const MAX_REQUESTS = Number(process.env.MAX_REQUESTS || '2');
