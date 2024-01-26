import {
  CreateTenantArgs,
  CreateTenantUserInvitationArgs,
  TenantUserInvitationStatuses,
  UpdateTenantArgs,
  UpdateTenantUserInvitationArgs,
} from './tenant.types';
import { TenantModel, TenantUserInvitationModel, TenantUserModel } from './tenant.models';
import { ObjectId } from 'mongodb';
import { AuthenticateAnalytic } from '../analytics/analytics.models';
import { UserModel } from '../user/user.models';

const createTenant = async (parent: any, args: CreateTenantArgs) => {
  let tenant;

  try {
    tenant = await TenantModel.create(args.input);
  } catch (e) {
    throw new Error('El usuario ya se encuentra registrado');
  }

  return tenant;
};

const updateTenant = async (parent: any, args: UpdateTenantArgs) => {
  let tenant;
  const { plan, id, ...params } = args.input;

  if (!id) throw new Error('El ID del tenant es requerido');

  try {
    tenant = await TenantModel.findOneAndUpdate(new ObjectId(id), {
      ...params,
      plan: plan ? new ObjectId(plan.id) : null,
    });
  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el tenant');
  }

  return await tenant?.populate('plan');
};

const createTenantUserInvitation = async (parent: any, args: CreateTenantUserInvitationArgs) => {
  let tenantUserInvitation;

  const { tenant, role, email } = args.input;

  try {
    tenantUserInvitation = await TenantUserInvitationModel.create({
      role,
      email,
      tenant: new ObjectId(tenant?.id),
    });
  } catch (e) {
    throw new Error('Tenemos problemas para crear la invitación');
  }

  return await tenantUserInvitation?.populate('tenant');
};

const updateTenantUserInvitation = async (
  parent: any,
  args: UpdateTenantUserInvitationArgs,
  context: any,
) => {
  let tenantUserInvitation;
  const userId = context.userId || 0;
  const { id, status } = args.input;
  const invitationId = new ObjectId(id);
  const invitation = await TenantUserInvitationModel.findById(invitationId);

  if (invitation && invitation.status === TenantUserInvitationStatuses.ACCEPTED)
    throw new Error('La invitación ya fue aceptada');

  try {
    tenantUserInvitation = await TenantUserInvitationModel.findOneAndUpdate(
      invitationId,
      { status },
      {
        returnNewDocument: true,
        new: true,
      },
    );
  } catch (e) {
    throw new Error('Tenemos problemas para validar la invitación');
  }

  console.log('tenantUserInvitation', tenantUserInvitation);

  if (
    tenantUserInvitation &&
    tenantUserInvitation.status === TenantUserInvitationStatuses.ACCEPTED
  ) {
    const tenantUser = await TenantUserModel.create({
      role: tenantUserInvitation.role,
      user: new ObjectId(userId),
      tenant: tenantUserInvitation.tenant,
    });
    await UserModel.findOneAndUpdate(userId, { $push: { tenantUsers: { _id: tenantUser._id } } });
  }

  return await tenantUserInvitation?.populate('tenant');
};

export const tenantMutationResolvers = {
  createTenant,
  updateTenant,
  createTenantUserInvitation,
  updateTenantUserInvitation,
};
