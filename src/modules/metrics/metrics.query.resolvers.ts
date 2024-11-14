import {
  EventsMetricsModel,
  HeatMatMetricsModel,
  RegisteredUserMetricsModel,
  UrlVisitMetricsModel,
  UserByMonthMetricsModel,
} from './metrics.models';
import {
  DateFilter,
  SwgTapByMonthReportArgs,
  SwgTapByUrlMatch,
  SwgUrlVisitReportArgs,
  UrlVisitReportArgs, UserSessionArgs, WinnerNoteArgs,
} from './metrics.types';
import { AnalyticsModel } from '../analytics/v1/analytics.models';
import { ObjectId } from 'mongodb';
import { EventModel } from '../analytics/v2/analytics.models';
import { TenantModel } from '../tenant/tenant.models';

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
          tenant_id: new ObjectId(tenantId),
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
      { $sort: { count: -1 } },
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

const getSwgTap = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    console.log(args.where);

    const response = await AnalyticsModel.aggregate([
      {
        $match: {
          name: { $eq: 'swg_register_user' },
          created_at: { $gte: from, $lte: to },
          tenant_id: new ObjectId(tenantId),
        },
      },
      {
        $group: {
          _id: null,
          total_swg_in_home: {
            $sum: {
              $cond: {
                if: { $eq: ['$section', 'home'] },
                then: 1,
                else: 0,
              },
            },
          },
          total_swg_in_other_section: {
            $sum: {
              $cond: {
                if: { $ne: ['$section', 'home'] },
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

const swgTapBySectionReport = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);

    return await AnalyticsModel.aggregate([
      {
        $match: {
          name: 'swg_register_user',
          created_at: { $gte: from, $lte: to },
          tenant_id: new ObjectId(tenantId),
        },
      },
      { $group: { _id: '$section', count: { $sum: 1 } } },
      { $project: { name: '$_id', count: '$count', _id: false } },
      { $sort: { count: -1 } },
    ]);
  } catch (error) {
    console.error('Error Section Report', error);
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

const getUrlVisitReport = async (parent: any, args: UrlVisitReportArgs, context: any) => {
  try {
    const { from, to, tenantId, skip } = args.where;

    const data = await UrlVisitMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          user_id: { $ne: 0 },
          section: {
            $ne: 'home',
          },
          created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
          original_url: { $ne: '' },
          // tenant_id: tenantId,
        },
      },
      {
        $group: { _id: '$original_url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
      { $sort: { count: -1 } },
      { $skip: skip || 0 },
      { $limit: 10 },
    ]);

    const res = await UrlVisitMetricsModel.aggregate([
      {
        $match: {
          name: { $ne: 'analytics_authenticate' },
          user_id: { $ne: 0 },
          section: {
            $ne: 'home',
          },
          created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
          original_url: { $ne: '' },
          // tenant_id: tenantId,
        },
      },
      {
        $group: { _id: '$original_url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
    ]);

    return {
      data,
      total: res.length,
    };
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

    return await UserByMonthMetricsModel.aggregate([
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
  } catch (error) {
    console.error('Error Get Users by Month Report', error);
    return [];
  }
};

const swgTapByMonthReport = async (parent: any, args: SwgTapByMonthReportArgs, context: any) => {
  try {
    const { from, to, tenantId, period } = args.where;

    let format = '%Y-%m-%d %H:00';

    if (
      [
        DateFilter.WEEK,
        DateFilter.CURRENT_MONTH,
        DateFilter.LAST_WEEK,
        DateFilter.CURRENT_WEEK,
        DateFilter.LAST_MONTH,
        DateFilter.DAY,
      ].includes(period)
    ) {
      format = '%m-%d';
    } else if ([DateFilter.YEAR, DateFilter.CURRENT_YEAR, DateFilter.MONTH].includes(period)) {
      format = '%Y-%m';
    }

    return await AnalyticsModel.aggregate([
      {
        $match: {
          name: { $eq: 'swg_register_user' },
          tenant_id: new ObjectId(tenantId),
          created_at: { $gte: new Date(from), $lte: new Date(to) },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: format, date: { $toDate: '$created_at' }, timezone: '-06:00' },
          },
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
      { $sort: { date: 1 } },
    ]);
  } catch (error) {
    console.error('Error Get Users by Month Report', error);
    return [];
  }
};

const swgTapByUrlReport = async (parent: any, args: SwgUrlVisitReportArgs, context: any) => {
  try {
    const { from, to, tenantId, section, order } = args.where;
    const { page, pageSize } = args;

    let match: SwgTapByUrlMatch = {
      name: { $eq: 'swg_register_user' },
      user_id: { $ne: 0 },
      created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
      original_url: { $ne: '' },
      tenant_id: new ObjectId(tenantId),
    };

    if (section)
      match = {
        ...match,
        section,
      };

    const data = await AnalyticsModel.aggregate([
      {
        $match: match,
      },
      {
        $group: { _id: '$original_url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
      { $sort: { count: order === 'desc' ? -1 : 1 } },
      { $skip: page * pageSize },
      { $limit: pageSize },
    ]);

    const res = await AnalyticsModel.aggregate([
      {
        $match: match,
      },
      {
        $group: { _id: '$original_url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
    ]);

    return {
      data,
      total: res.length,
    };
  } catch (error) {
    console.error('Error Get Url Visit Report', error);
    return [];
  }
};

const swgTapByUrlReportMetric = async (parent: any, args: SwgUrlVisitReportArgs, context: any) => {
  try {
    const { from, to, tenantId, section } = args.where;

    let match: SwgTapByUrlMatch = {
      name: { $eq: 'swg_register_user' },
      user_id: { $ne: 0 },
      created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
      original_url: { $ne: '' },
      tenant_id: new ObjectId(tenantId),
    };

    if (section)
      match = {
        ...match,
        section,
      };

    const data = await AnalyticsModel.aggregate([
      {
        $match: match,
      },
      {
        $group: { _id: '$original_url', count: { $sum: 1 } },
      },
      {
        $project: { url: '$_id', count: '$count', _id: false },
      },
      { $sort: { count: -1 } },
    ]);

    return {
      data,
    };
  } catch (error) {
    console.error('Error Get Url Visit Report', error);
    return [];
  }
};

const getClickedReportUser = async (parent: any, args: any, context: any) => {
  try {
    // eslint-disable-next-line prefer-const
    let { events, from, to, tenantId } = args.where;
    from = new Date(`${from}`);
    to = new Date(`${to}`);
    console.log(JSON.stringify({ args }));
    return await EventsMetricsModel.aggregate([
      {
        $match: {
          name: { $in: events },
          created_at: { $gte: from, $lte: to },
          tenant_id: new ObjectId(tenantId),
        },
      },
      { $group: { _id: '$uuid', count: { $sum: 1 } } },
      { $project: { uuid: '$_id', count: '$count', _id: false } },
    ]);
  } catch (error) {
    console.error('Error Get Clicked Events Report', error);
    return [];
  }
};

const userSession = async (parent: any, args: UserSessionArgs, context: any) => {
  let response = [];
  const { session = false, from, to, tenantId } = args.where;

  try {
    const tenant = await TenantModel.findById(tenantId);
    const group = session ?
      { user_id: '$user_id' } : { uuid: '$uuid' };

    const user = session ? { user_id: { $ne: 0 } } : { user_id: { $eq: 0 } };

    response = await EventModel.aggregate([
      {
        $match: {
          tenant_id: tenant?._id,
          created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
          ...user,
        },
      },
      {
        $addFields: {
          date: {
            $dateToString: {
              format: '%Y-%m-%d %H:%M',
              date: { $toDate: '$created_at' },
              timezone: tenant?.timezone || 'America/Mexico_City',
            },
          },
        },
      },
      {
        $group: {
          _id: {
            date: '$date', ...group,
          },
        },
      },
      {
        $group: {
          _id: '$_id.date',
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
      { $sort: { date: -1 } },
    ]);

  } catch (error) {
    console.log({ error });
  }


  return response;
};

export const winnerNotes = async (parent: any, args: WinnerNoteArgs, context: any) => {
  const { from, to, tenantId } = args.where;
  const { page = 0, pageSize = 10, order = 'desc' } = args;
  let items = [];
  let total = 0;

  const aggregate = [
    {
      $match: {
        name: {
          $in: [
            'register_google',
            'register_facebook',
            'register_user',
            'register_apple',
            'register_google_one_tap',
          ],
        },
        uuid: {
          $ne: '',
        },
        tenant_id: new ObjectId(tenantId),
        created_at: { $gte: new Date(`${from}`), $lte: new Date(`${to}`) },
      },
    },
    {
      $lookup: {
        from: 'event_meta',
        localField: 'event_meta',
        foreignField: '_id',
        pipeline: [{
          $match: {
            $and: [{ meta_key: 'url' }, { meta_value: { $ne: '' } }, { meta_value: { $ne: 'Desconocido' } }],
          },
        }],
        as: 'meta',
      },
    },
    { $unwind: '$meta' },
    {
      $project: {
        _id: 1,
        url: { $substr: ['$meta.meta_value', 0, { $indexOfBytes: ['$meta.meta_value', '?'] }] },
      },
    },
    {
      $project: {
        _id: 1,
        url: { $substr: ['$url', 0, { $indexOfBytes: ['$url', '#'] }] },
      },
    },
    {
      $group: {
        _id: '$url',
        count: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        url: '$_id',
        count: 1,
        _id: 0,
      },
    },
  ];

  try {
    items = await EventModel.aggregate([
      ...aggregate,
      // { $skip: page * pageSize },
      // { $limit: pageSize },
    ]);

    const totalCount = await EventModel.aggregate([
      ...aggregate,
      {
        $count: 'totalCount',
      },
    ]);

    total = totalCount.find((item) => item.totalCount)?.totalCount || 0;
  } catch (error) {
    console.log({ error });
  }

  console.log({
    items,
    total,
  });

  return {
    items,
    total,
  };
};


export const metricsQueryResolvers = {
  getClickedReport,
  getRegisteredUserReport,
  getHeatMapReport,
  getUrlVisitReport,
  getUsersByMonthReport,
  visitPageByUsers,
  sectionReport,
  getSwgTap,
  swgTapBySectionReport,
  swgTapByMonthReport,
  swgTapByUrlReport,
  swgTapByUrlReportMetric,
  getClickedReportUser,


  userSession,
  winnerNotes,

};
