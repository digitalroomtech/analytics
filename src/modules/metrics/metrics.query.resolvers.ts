import {
  EventsMetricsModel,
  HeatMatMetricsModel,
  RegisteredUserMetricsModel,
  UrlVisitMetricsModel,
  UserByMonthMetricsModel,
} from './metrics.models';
import moment from 'moment';

const getClickedReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { events, from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    return await EventsMetricsModel.aggregate([
      {
        $match: {
          name: { $in: events },
          created_at: { $gte: from, $lte: to },
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

const sectionReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    return await EventsMetricsModel.aggregate([
      {
        $match: {
          section: { $ne: 'home' },
          created_at: { $gte: from, $lte: to },
          // tenant_id: tenantId,
        },
      },
      { $group: { _id: '$section', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: '$count', _id: false } },
    ]);
  } catch (error) {
    console.error('Error Section Report', error);
    return [];
  }
};

const getRegisteredUserReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    const response = await RegisteredUserMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          created_at: { $gte: from, $lte: to },
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

const visitPageByUsers = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    const response = await RegisteredUserMetricsModel.aggregate([
      {
        $match: {
          name: { $eq: 'page_visit' },
          created_at: { $gte: from, $lte: to },
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
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    return await HeatMatMetricsModel.aggregate([
      {
        $match: {
          name: { $eq: event },
          created_at: { $gte: from, $lte: to },
          // tenant_id: tenantId,
        },
      },
      {
        $project: {
          date: { $dateToString: { format: '%Y-%m-%d', date: { $toDate: '$created_at' } } },
          time: { $dateToString: { format: '%H', date: { $toDate: '$created_at' } } },
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
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    return await UrlVisitMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          user_id: { $ne: 0 },
          created_at: { $gte: from, $lte: to },
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
      { $sort: { count: -1 } },
    ]);
  } catch (error) {
    console.error('Error Get Url Visit Report', error);
    return [];
  }
};

const getUsersByMonthReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    const response = await UserByMonthMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          tenant_id: tenantId,
          $and: [{ created_at: { $ne: null } }, { created_at: { $gte: from, $lte: to } }],
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: { $toDate: '$created_at' } } },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          date: '$_id',
          count: 1,
        },
      },
    ]);

    return response;
  } catch (error) {
    console.error('Error Get Users by Month Report', error);
    return [];
  }
};

export const metricsQueryResolvers = {
  getClickedReport,
  getRegisteredUserReport,
  getHeatMapReport,
  getUrlVisitReport,
  getUsersByMonthReport,
  visitPageByUsers,
  sectionReport,
};
