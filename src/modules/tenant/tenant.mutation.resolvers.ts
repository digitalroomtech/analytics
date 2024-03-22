import {
  CreateTenantArgs,
  CreateTenantUserInvitationArgs,
  TenantUserInvitationStatuses,
  TenantUserRoles,
  UpdateTenantArgs,
  UpdateTenantUserArgs,
  UpdateTenantUserInvitationArgs,
} from './tenant.types';
import { TenantModel, TenantUserInvitationModel, TenantUserModel } from './tenant.models';
import { ObjectId } from 'mongodb';
import { UserModel } from '../user/user.models';
import stream from 'node:stream';
import { createUploadStream } from '../../utils/s3';
import { DO_SPACES_ROUTE, FRONT_URL } from '../../utils/constants';
import { sendPostmarkSignupEmail } from '../../utils/mail/sendMail';

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
  const { plan, id, file, ...params } = args.input;

  if (!id) throw new Error('El ID del tenant es requerido');

  let result;

  if (file) {
    try {
      const { createReadStream, filename } = await file;
      const _stream = createReadStream();
      const body = new stream.PassThrough();
      _stream.pipe(body);
      result = await createUploadStream(`${DO_SPACES_ROUTE}/tenants/${id}/${filename}`, body);
    } catch (error) {
      throw new Error('Tenemos problema para actualizar el usuario');
    }

    params.logo = result?.Location as string;
  }

  try {
    tenant = await TenantModel.findOneAndUpdate(new ObjectId(id), {
      ...params,
      plan: plan ? new ObjectId(plan.id) : null,
    });
  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el tenant');
  }

  return tenant?.populate('plan');
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

    const tenantById = await TenantModel.findOne({ _id: new ObjectId(tenant?.id) });

    await sendPostmarkSignupEmail({
      email: email ?? '',
      tenant: tenantById?.name ?? '',
      role: role === TenantUserRoles.TENANT_ADMINISTRATOR ? 'Administrador' : 'Usuario',
      logo: tenantById?.logo ?? '',
      url: FRONT_URL,
    });
  } catch (e) {
    console.log('e', e);
    throw new Error('Tenemos problemas para crear la invitación');
  }

  return tenantUserInvitation?.populate('tenant');
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

  return tenantUserInvitation?.populate('tenant');
};

const updateTenantUser = async (parent: any, args: UpdateTenantUserArgs) => {
  const { id, status, role, user } = args.input;

  let tenantUser;
  try {
    tenantUser = await TenantUserModel.findByIdAndUpdate(
      new ObjectId(id),
      { role, status },
      {
        returnNewDocument: true,
        new: true,
      },
    );

    if (user) {
      await UserModel.findByIdAndUpdate(new ObjectId(user.id), { name: user.name });
    }
  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el usuario');
  }

  return await tenantUser?.populate('user');
};

export const tenantMutationResolvers = {
  createTenant,
  updateTenant,
  createTenantUserInvitation,
  updateTenantUserInvitation,
  updateTenantUser,
};
