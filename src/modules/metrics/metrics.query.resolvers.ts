import {
  EventsMetricsModel,
  HeatMatMetricsModel,
  RegisteredUserMetricsModel,
  UrlVisitMetricsModel,
} from './metrics.models';

const getClickedReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { events, from, to, tenantId } = args.where;
    from = new Date(new Date(from).setHours(0, 0, 0));
    to = new Date(new Date(to).setHours(23, 59, 59));

    return await EventsMetricsModel.aggregate([
      {
        $match: {
          name: { $in: events },
          created_at: { $gte: from, $lt: to },
          // tenant_id: tenantId,
        },
      },
      { $group: { _id: '$name', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: '$count', _id: false } },
    ]);
  } catch (error) {
    console.error('Error Get Clicked Events Report', error);
    return [];
  }
};

const getRegisteredUserReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(new Date(from).setHours(0, 0, 0));
    to = new Date(new Date(to).setHours(23, 59, 59));

    const response = await RegisteredUserMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          created_at: { $gte: from, $lt: to },
          // tenant_id: tenantId,
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

const getHeatMapReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, event, tenantId } = args.where;
    from = new Date(new Date(from).setHours(0, 0, 0));
    to = new Date(new Date(to).setHours(23, 59, 59));

    return await HeatMatMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: event },
          created_at: { $gte: from, $lt: to },
          // tenant_id: tenantId,
        },
      },
      {
        $project: {
          date: { $dateToString: { format: '%Y-%m-%d', date: '$created_at' } },
          time: { $dateToString: { format: '%H', date: '$created_at' } },
        },
      },
      {
        $group: {
          _id: {
            date: '$date',
            time: '$time',
          },
          count: { $sum: 1 },
        },
      },
      {
        $project: { date_time: '$_id', count: '$count', _id: false },
      },
    ]);
  } catch (error) {
    console.error('Error Get Heat Map Report', error);
    return [];
  }
};

const getUrlVisitReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(new Date(from).setHours(0, 0, 0));
    to = new Date(new Date(to).setHours(23, 59, 59));

    return await UrlVisitMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          created_at: { $gte: from, $lt: to },
          url: { $ne: '' },
          // tenant_id: tenantId,
        },
      },
      {
        $group: { _id: '$url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
    ]);
  } catch (error) {
    console.error('Error Get Url Visit Report', error);
    return [];
  }
};

export const metricsQueryResolvers = {
  getClickedReport,
  getRegisteredUserReport,
  getHeatMapReport,
  getUrlVisitReport,
};
