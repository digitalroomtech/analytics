import { Request as ExpressRequest, Response } from 'express';
import { MetricModels } from './metrics.types';
import { PageMetrics, SocialNetworkMetrics, SocialNetworkSessionMetrics } from './metrics.models';
import moment from 'moment';

interface Request extends ExpressRequest {
  time_ago?: string;
  time_since?: string;
  model?: MetricModels;
}

export async function getMetrics(req: Request, res: Response) {
  const data = req.query;
  if (!data.time_ago) {
    return res.status(500).json({ message: 'La fecha inicial es requerida' });
  }

  if (!data.time_since) {
    return res.status(500).json({ message: 'La fecha final es requerida' });
  }

  if (!data.model) {
    return res.status(500).json({ message: 'El modelo es requerido' });
  }

  const { time_ago, time_since, model } = data;

  let metrics = [];
  try {
    if (model === MetricModels.socialNetworkMetrics) {
      metrics = await SocialNetworkMetrics.find({
        time_ago: {
          $gte: moment(time_ago as string).toDate(),
          $lte: moment(time_since as string).toDate(),
        },
      }).sort({ time_ago: 1 });
    } else if (model === MetricModels.socialNetworkSessionMetrics) {
      metrics = await SocialNetworkSessionMetrics.find({
        time_ago: {
          $gte: moment(time_ago as string).toDate(),
          $lte: moment(time_since as string).toDate(),
        },
      }).sort({ time_ago: 1 });
    } else {
      metrics = await PageMetrics.find({
        time_ago: {
          $gte: moment(time_ago as string).toDate(),
          $lte: moment(time_since as string).toDate(),
        },
      }).sort({ time_ago: 1 });
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ metrics });
}
