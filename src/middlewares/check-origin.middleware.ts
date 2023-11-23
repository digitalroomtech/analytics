import { Request, Response, NextFunction } from 'express';

export const checkOriginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const allowedHosts = process.env.ANALYTICS_ALLOWED_DOMAINS || '';

  let requestHost = '';

  if (req.headers.origin) {
    try {
      requestHost = new URL(req.headers.origin).hostname;
    } catch (err) {
      console.error('Invalid origin:', req.headers.origin);
      return res.status(400).send('Invalid origin');
    }
  } else {
    return res.status(400).send('No origin header');
  }

  if (!allowedHosts.includes(requestHost)) {
    const requestInfo = {
      host: requestHost,
      ip: req.ip,
      url: req.originalUrl,
      agent: req.get('User-Agent'),
    };
    console.log('Access attempt from disallowed host:', requestInfo);

    return res.status(403).send('Access denied');
  }

  return next();
};
