import jwt, { JwtPayload } from 'jsonwebtoken';
import { APP_SECRET } from '../utils/constants';
import { Request } from 'express';
import { ObjectId } from 'mongodb';

type TokenPayload = JwtPayload & { userId: string };
const getTokenPayload = (token: string): TokenPayload => {
  return jwt.verify(token, APP_SECRET) as TokenPayload;
};

export const authenticateMiddleware = (req: Request) => {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      console.log(new ObjectId('659431b12c5994d923483e6c').getTimestamp());
      return new ObjectId(userId);
    }
  }

  throw new Error('Not authenticated');
};
