import { Request, Response, NextFunction } from 'express';
import { MAX_REQUESTS } from '../utils/constants';
import { cleanRequests } from '../utils/clean-requests';

import cron from 'node-cron';

const requestCounts = new Map<string, number>();
const cleanupTasks = new Map<string, cron.ScheduledTask>();

export const limitRequests = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(400).send('La cabecera "analytics-session" es requerida');
  }
  const uuid = session.toString();
  const requestuuid = requestCounts.get(uuid) || 2;

  requestCounts.set(uuid, requestuuid + 1);
  if (requestuuid > MAX_REQUESTS) {
    return res.status(429).send('Too Many Requests');
  }

  if (!cleanupTasks.has(uuid)) {
    const task = cleanRequests(uuid, requestCounts, cleanupTasks);
    cleanupTasks.set(uuid, task);
  }

  next();
};
