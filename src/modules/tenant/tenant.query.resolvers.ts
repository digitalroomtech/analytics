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

const tenantUserInvitations = async (
  parent: any,
  args: TenantUserInvitationArgs,
): Promise<{
  items: ITenantUserInvitation[];
  count: number;
}> => {
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

  const tenants = await TenantUserInvitationModel.find(data).populate('tenant');
  const count = await TenantUserInvitationModel.countDocuments();

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
  const { tenant, search } = args.where;

  const match = search ? {
    or: [{
      name: search,

    }]
  } : {};

  const tenantUsers = await TenantUserModel.find({
    tenant: tenant ? new ObjectId(tenant.id) : null,
  }).populate({
    path: 'user',
    match,
  }).populate('tenant');

  const count = await TenantUserModel.countDocuments();
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
