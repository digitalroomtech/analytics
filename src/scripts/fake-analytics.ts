import {
  MONGODB_URI,
  PageAnalyticNames,
  SocialNetworkAnalyticNames,
  SocialNetworkSessionAnalyticNames,
} from '../utils/constants';
import {
  PageAnalytic,
  SocialNetworkAnalytic,
  SocialNetworkSessionAnalytic,
} from '../controllers/analytics/analytics.models';
import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
import { MetricGroupResult } from '../controllers/metrics/metrics.types';
import {
  PageMetrics,
  SocialNetworkMetrics,
  SocialNetworkSessionMetrics,
} from '../controllers/metrics/metrics.models';
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');

const getEventName = () => {
  const events = PageAnalyticNames.concat(SocialNetworkAnalyticNames).concat(
    SocialNetworkSessionAnalyticNames,
  );
  const itemsCount = events.length - 1;
  const eventIndex = Math.floor(Math.random() * itemsCount);
  return events[eventIndex];
};
const generateRandom = (min: number, max: number): number => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return !num ? generateRandom(min, max) : num;
};
const fakeAnalytics = async () => {
  await mongoose.connect(MONGODB_URI);

  const count = 1000;
  for (let i = 0; i < count; i++) {
    const timeAgo = moment().subtract(365, 'days');
    const randomDay = generateRandom(1, 365);
    const randomTime = generateRandom(1, 24);
    const customTime = timeAgo.add(randomDay, 'days');
    const customHour = customTime.add(randomTime, 'hours');
    const eventName = getEventName();
    console.log('customHour', customHour.toDate());
    try {
      const params = {
        name: eventName,
        url: 'http://localhost:3002',
        tenant: {
          _id: new ObjectId('65a88087a27ce3cd34deabde'),
        },
        authenticate_analytic: {
          _id: new ObjectId('65ae69b754766251452da48d'),
        },
        created_at: customHour.toDate(),
        updated_at: customHour.toDate(),
      };

      if (PageAnalyticNames.includes(eventName)) {
        await PageAnalytic.create(params);
      } else if (SocialNetworkAnalyticNames.includes(eventName)) {
        await SocialNetworkAnalytic.create(params);
      } else if (SocialNetworkSessionAnalyticNames.includes(eventName)) {
        await SocialNetworkSessionAnalytic.create(params);
      }
    } catch (e) {
      console.log('e', e);
    }
  }
};

const pageMetrics = async () => {
  await mongoose.connect(MONGODB_URI);
  try {
    const metricTimeAgo = await PageAnalytic.findOne().sort({ created_at: 1 });
    const metricTimeSince = await PageAnalytic.findOne().sort({ created_at: -1 });
    const diffDays = moment(metricTimeSince?.created_at).diff(
      moment(metricTimeAgo?.created_at),
      'hours',
    );

    for (let i = 0; i < diffDays; i++) {
      const timeAgo = moment(metricTimeAgo?.created_at).add(i, 'hours');
      const timeSince = moment(metricTimeAgo?.created_at).add(i + 1, 'hours');
      const analyticsGroup: MetricGroupResult[] = await PageAnalytic.aggregate([
        {
          $match: {
            name: {
              $in: [...PageAnalyticNames.map((socialNetworkSession) => socialNetworkSession)],
            },
            created_at: { $gte: timeAgo.toDate(), $lte: timeSince.toDate() },
          },
        },
        { $group: { _id: { name: '$name' }, count: { $sum: 1 } } },
      ]);

      for (const metricGroupResult of analyticsGroup) {
        await PageMetrics.create({
          name: metricGroupResult._id?.name,
          count: metricGroupResult.count,
          time_ago: timeAgo.toDate(),
          time_since: timeSince.toDate(),
        });
      }
    }
  } catch (e) {
    console.log('e', e);
  }
};

const socialNetworkMetrics = async () => {
  await mongoose.connect(MONGODB_URI);
  try {
    const metricTimeAgo = await SocialNetworkAnalytic.findOne().sort({ created_at: 1 });
    const metricTimeSince = await SocialNetworkAnalytic.findOne().sort({ created_at: -1 });
    const diffDays = moment(metricTimeSince?.created_at).diff(
      moment(metricTimeAgo?.created_at),
      'hours',
    );

    for (let i = 0; i < diffDays; i++) {
      const timeAgo = moment(metricTimeAgo?.created_at).add(i, 'hours');
      const timeSince = moment(metricTimeAgo?.created_at).add(i + 1, 'hours');
      const analyticsGroup: MetricGroupResult[] = await SocialNetworkAnalytic.aggregate([
        {
          $match: {
            name: { $in: [...SocialNetworkAnalyticNames.map((analytic) => analytic)] },
            created_at: { $gte: timeAgo.toDate(), $lte: timeSince.toDate() },
          },
        },
        { $group: { _id: { name: '$name' }, count: { $sum: 1 } } },
      ]);

      for (const metricGroupResult of analyticsGroup) {
        await SocialNetworkMetrics.create({
          name: metricGroupResult._id?.name,
          count: metricGroupResult.count,
          time_ago: timeAgo.toDate(),
          time_since: timeSince.toDate(),
        });
      }
    }
  } catch (e) {
    console.log('e', e);
  }
};

const socialNetworkSessionMetrics = async () => {
  await mongoose.connect(MONGODB_URI);
  try {
    const metricTimeAgo = await SocialNetworkSessionAnalytic.findOne().sort({ created_at: 1 });
    const metricTimeSince = await SocialNetworkSessionAnalytic.findOne().sort({ created_at: -1 });
    const diffDays = moment(metricTimeSince?.created_at).diff(
      moment(metricTimeAgo?.created_at),
      'hours',
    );

    for (let i = 0; i < diffDays; i++) {
      const timeAgo = moment(metricTimeAgo?.created_at).add(i, 'hours');
      const timeSince = moment(metricTimeAgo?.created_at).add(i + 1, 'hours');
      const analyticsGroup: MetricGroupResult[] = await SocialNetworkSessionAnalytic.aggregate([
        {
          $match: {
            name: { $in: [...SocialNetworkSessionAnalyticNames.map((analytic) => analytic)] },
            created_at: { $gte: timeAgo.toDate(), $lte: timeSince.toDate() },
          },
        },
        { $group: { _id: { name: '$name' }, count: { $sum: 1 } } },
      ]);

      for (const metricGroupResult of analyticsGroup) {
        await SocialNetworkSessionMetrics.create({
          name: metricGroupResult._id?.name,
          count: metricGroupResult.count,
          time_ago: timeAgo.toDate(),
          time_since: timeSince.toDate(),
        });
      }
    }
  } catch (e) {
    console.log('e', e);
  }
};

//
// pageMetrics();
// socialNetworkMetrics();
// socialNetworkSessionMetrics();
// fakeAnalytics();
