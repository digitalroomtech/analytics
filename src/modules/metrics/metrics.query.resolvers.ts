import moment from 'moment';
import { EventsMetricsModel, RegisteredUserMetricsModel } from './metrics.models';

const getClickedReport = async (parent: any, args: any, context: any) => {
  try {
    const { events, from, to } = args.variables;
    const response = await EventsMetricsModel.aggregate([
      {
        $match: {
          name: { $in: events },
          createdAt: { $gte: moment(from).toDate(), $lt: moment(to).toDate() },
        },
      },
      { $group: { _id: '$name', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: '$count', _id: false } },
    ]);

    return response;
  } catch (error) {
    console.error('Error Get Clicked Events Report', error);
    return [];
  }
};

const getRegisteredUserReport = async (parent: any, args: any, context: any) => {
  try {
    const { from, to } = args.variables;
    const response = await RegisteredUserMetricsModel.aggregate([
      {
        $match: {
          name: {
            $ne: 'analytics_authenticate',
            createdAt: { $gte: moment(from).toDate(), $lt: moment(to).toDate() },
          },
        },
      },
      {
        $group: {
          _id: null,
          total_users_registered: {
            $sum: {
              $cond: {
                if: { $ne: ['$user_id', 0] },
                then: 1,
                else: 0,
              },
            },
          },
          total_user_anonymous: {
            $sum: {
              $cond: {
                if: { $eq: ['$user_id', 0] },
                then: 1,
                else: 0,
              },
            },
          },
        },
      },
    ]);

    return response[0];
  } catch (error) {
    console.error('Error Get Registered User Report', error);
    return [];
  }
};

export const metricsQueryResolvers = {
  getClickedReport,
  getRegisteredUserReport,
};
