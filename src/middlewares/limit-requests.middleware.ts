import { Request, Response, NextFunction } from 'express';
import { MAX_REQUESTS } from '../utils/constants';

const requestCounts: { [key: string]: number } = {};

export const limitRequests = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(400).send('La cabecera "analytics-session" es requerida');
  }

  const uuid = session.toString();

  if (!requestCounts[uuid]) {
    requestCounts[uuid] = 0;
  }

  requestCounts[uuid]++;

  if (requestCounts[uuid] > MAX_REQUESTS) {
    return res.status(429).send('Too Many Requests');
  }

  const intervalId = setInterval(() => {
    requestCounts[uuid]--;
    if (requestCounts[uuid] === 0) {
      delete requestCounts[uuid];
      clearInterval(intervalId);
    }
  }, 60000);

  next();
};
