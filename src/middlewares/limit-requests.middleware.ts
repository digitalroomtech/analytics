import { Request, Response, NextFunction } from 'express';
import { MAX_REQUESTS } from '../utils/constants';
import { cleanRequests } from '../utils/clean-requests';

import cron from 'node-cron';

const requestCounts = new Map<string, number>();
const cleanupTasks = new Map<string, cron.ScheduledTask>();

export const limitRequests = async (req: Request, res: Response, next: NextFunction) => {
  const session = req.headers['analytics-session'];

  if (!session) {
    return res.status(403).send({ message: 'No analytics-session header' });
  }

  const uuid = session.toString();
  const requestUuid = requestCounts.get(uuid) || 1;

  requestCounts.set(uuid, requestUuid + 1);

  if (requestUuid > MAX_REQUESTS) {
    return res.status(429).send({ message: 'Too Many Requests' });
  }

  if (!cleanupTasks.has(uuid)) {
    const task = cleanRequests(uuid, requestCounts, cleanupTasks);
    cleanupTasks.set(uuid, task);
  }

  next();
};
