import { UserInvitationModel, UserModel } from './user.models';
import {
  TenantUserInvitationArgs
} from '../tenant/tenant.types';
import { UserInvitation } from './user.types';

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


export const userQueryResolvers = {
  currentUser,
  userInvitations,
};
