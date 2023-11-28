import { Request, Response, NextFunction } from 'express';

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

  if (requestCounts[uuid] > 2) {
    return res.status(429).send('Too Many Requests');
  }

  next();
};
