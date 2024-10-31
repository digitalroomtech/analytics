import { UserInvitationModel, UserModel } from './user.models';
import {
  TenantUserInvitationArgs,
} from '../tenant/tenant.types';
import { UserEventSArgs, UserInvitation } from './user.types';
import { EventModel } from '../analytics/v2/analytics.models';
import { ObjectId } from 'mongodb';

const currentUser = async (parent: any, args: any, context: any) => {
  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');
  const user = await UserModel.findById(id);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  return user.populate({ path: 'tenantUsers', populate: { path: 'tenant', populate: { path: 'plan' } } });
};

const userInvitations = async (
  parent: any,
  args: TenantUserInvitationArgs,
): Promise<{
  items: UserInvitation[];
  count: number;
}> => {
  const { ...params } = args.where;


  const users = await UserInvitationModel.find(params);
  const count = await UserInvitationModel.countDocuments();

  return {
    items: users,
    count,
  };
};

const userEvents = async (
  parent: any,
  args: UserEventSArgs,
) => {
  const { user_id, tenant_id } = args;
  console.log({ user_id });
  const groupAuthenticate = await EventModel.aggregate([
    {
      $match: {
        user_id: { $eq: user_id },
      },
    },
    {
      $group: {
        _id: '$uuid',
      },
    },
    {
      $project: { _id: '$_id' },
    },

  ]);

  const events = await EventModel.aggregate([
    {
      $match: {
        uuid: {
          $in: [...groupAuthenticate.map((data) => data._id)],
        },
      },
    },
    { $sort: { created_at: -1 } },
    {
      $lookup: {
        from: 'event_meta',
        localField: 'event_meta',
        foreignField: '_id',
        as: 'event_meta',
      },
    },
    {
      $project: {
        id: '$_id',
        name: 1,
        created_at: 1,
        user_id: 1,
        event_meta: {
          $map: {
            input: '$event_meta',
            as: 'event_meta',
            in: {
              id: '$$event_meta._id',
              meta_value: '$$event_meta.meta_value',
              meta_key: '$$event_meta.meta_key',
            },
          },
        },
      },
    },
  ]);

  console.log(JSON.stringify(events, null, 2));


  return {
    events,
  };
};


export const userQueryResolvers = {
  currentUser,
  userInvitations,
  userEvents,
};
