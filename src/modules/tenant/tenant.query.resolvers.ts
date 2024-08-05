import {
  ITenant,
  ITenantUser,
  ITenantUserInvitation,
  TenantArgs,
  TenantsArgs,
  TenantUserInvitationArgs,
  TenantUserInvitationStatuses,
  TenantUserRoles,
  TenantUsersArgs,
} from './tenant.types';
import { TenantModel, TenantUserInvitationModel, TenantUserModel } from './tenant.models';
import { ObjectId } from 'mongodb';
import { SortOrder } from 'mongoose';

const tenantUserInvitations = async (
  parent: any,
  args: TenantUserInvitationArgs,
): Promise<{
  items: ITenantUserInvitation[];
  count: number;
}> => {
  const { page = 0, pageSize = 10 } = args;
  const { tenant, ...params } = args.where;

  let data: {
    email?: string;
    tenant?: string | null | ObjectId;
    status?: TenantUserInvitationStatuses;
    role?: TenantUserRoles;
  } = {
    ...params,
  };

  if (tenant) {
    data = {
      ...data,
      tenant: tenant ? new ObjectId(tenant.id) : null,
    };
  }

  const tenants = await TenantUserInvitationModel.find(data)
    .skip(page * pageSize)
    .limit(pageSize)
    .populate('tenant');

  const count = await TenantUserInvitationModel.countDocuments(data);

  return {
    items: tenants,
    count,
  };
};

const tenants = async (
  parent: any,
  args: TenantsArgs,
): Promise<{
  items: ITenant[];
  count: number;
}> => {
  const tenants = await TenantModel.find().populate('plan');
  const count = await TenantModel.countDocuments();
  return {
    items: tenants,
    count,
  };
};

const tenantUsers = async (
  parent: any,
  args: TenantUsersArgs,
): Promise<{
  items: ITenantUser[];
  count: number;
}> => {
  const { tenant, search, sort } = args.where;
  const { page = 1, pageSize = 10 } = args;

  const match = !search || search === '' ? {} : { 'user.name': { $regex: search, $options: 'i' } };
  const sortField: Record<string, 1 | -1> | undefined = sort
    ? { [sort.field]: sort.order === 'ASC' ? -1 : 1 }
    : undefined;

  const tenantUsers = await TenantUserModel.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $unwind: '$user',
    },
    {
      $lookup: {
        from: 'tenants',
        localField: 'tenant',
        foreignField: '_id',
        as: 'tenant',
      },
    },
    {
      $unwind: '$tenant',
    },
    {
      $match: {
        $and: [{ 'tenant._id': tenant ? new ObjectId(tenant.id) : { $exists: true } }, match],
      },
    },
    {
      $skip: page * pageSize,
    },
    {
      $limit: pageSize,
    },
    ...(sortField ? [{ $sort: sortField }] : []),
  ]);

  const count = await TenantUserModel.find({
    tenant: tenant ? new ObjectId(tenant.id) : null,
  }).countDocuments();

  return {
    items: tenantUsers,
    count,
  };
};
const tenant = async (parent: any, args: TenantArgs): Promise<ITenant | null> => {
  return await TenantModel.findById(new ObjectId(args.id)).populate('plan');
};

export const tenantQueryResolvers = {
  tenants,
  tenant,
  tenantUsers,
  tenantUserInvitations,
};
