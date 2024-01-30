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
      console.log(new ObjectId('65b8f800fe7735fd1a045bf6').getTimestamp());
      console.log('65b8f800fe7735fd1a045bf6');
      return new ObjectId(userId);
    }
  }

  throw new Error('Not authenticated');
};
