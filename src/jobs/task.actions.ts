import mongoose from 'mongoose';
import { MetricGroupResult, MetricModels } from '../controllers/metrics/metrics.types';
import moment, { DurationInputArg1, DurationInputArg2 } from 'moment/moment';
import {
  PageAnalyticNames,
  SocialNetworkAnalyticNames,
  SocialNetworkSessionAnalyticNames,
} from '../utils/constants';
import {
  PageAnalytic,
  SocialNetworkAnalytic,
  SocialNetworkSessionAnalytic,
} from '../controllers/analytics/analytics.models';
import {
  PageMetrics,
  SocialNetworkMetrics,
  SocialNetworkSessionMetrics,
} from '../controllers/metrics/metrics.models';
import { IAuthenticateAnalyticName } from '../controllers/analytics/analytics.types';

const getSelectedAnalyticNames = (model: MetricModels) => {
  let selectedModel: IAuthenticateAnalyticName[];

  switch (model) {
    case 'social_network_metrics':
      selectedModel = SocialNetworkAnalyticNames;
      break;
    case 'social_network_session_metrics':
      selectedModel = SocialNetworkSessionAnalyticNames;
      break;
    default:
      selectedModel = PageAnalyticNames;
      break;
  }

  return selectedModel;
};

const getSelectedAnalyticModel = (model: MetricModels) => {
  let selectedModel: any;
  switch (model) {
    case 'social_network_metrics':
      selectedModel = SocialNetworkAnalytic;
      break;
    case 'social_network_session_metrics':
      selectedModel = SocialNetworkSessionAnalytic;
      break;
    default:
      selectedModel = PageAnalytic;
      break;
  }

  return selectedModel;
};

const getSelectedAnalyticMetricModel = (model: MetricModels) => {
  let selectedModel: any;
  switch (model) {
    case 'social_network_metrics':
      selectedModel = SocialNetworkMetrics;
      break;
    case 'social_network_session_metrics':
      selectedModel = SocialNetworkSessionMetrics;
      break;
    default:
      selectedModel = PageMetrics;
      break;
  }

  return selectedModel;
};

export const metricTask = async (
  model: MetricModels,
  time: {
    amount?: DurationInputArg1;
    unit?: DurationInputArg2;
  },
) => {
  const timeAgo = moment().subtract(time.amount, time.unit);
  const timeSince = moment();
  const arrayNames = getSelectedAnalyticNames(model);
  const mongodbModelAnalytics = getSelectedAnalyticModel(model);
  const mongodbModelMetrics = getSelectedAnalyticMetricModel(model);

  console.log('metricTask', { date: new Date().toLocaleString(), model });

  const query = [
    {
      $match: {
        name: { $in: [...arrayNames.map((socialNetworkSession) => socialNetworkSession)] },
        created_at: { $gte: timeAgo.toDate(), $lte: timeSince.toDate() },
      },
    },
    { $group: { _id: { name: '$name' }, count: { $sum: 1 } } },
  ];

  try {
    const metricGroup: MetricGroupResult[] = await mongodbModelAnalytics.aggregate(query);

    for (const metricGroupResult of metricGroup) {
      await mongodbModelMetrics.create({
        name: metricGroupResult._id?.name,
        count: metricGroupResult.count,
        time_ago: timeAgo.toDate(),
        time_since: timeSince.toDate(),
      });
    }
  } catch (e: any) {
    console.log('error', e.message);
  }
};
