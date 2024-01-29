import { CreateUserInvitationArgs, UpdateUserArgs } from './user.types';
import { ObjectId } from 'mongodb';
import { UserInvitationModel, UserModel } from './user.models';
import bcrypt from 'bcrypt';
import stream from 'node:stream';
import { createUploadStream } from '../../utils/s3';
import { DO_SPACES_ROUTE } from '../../utils/constants';


export const updateUser = async (
  parent: any,
  args: UpdateUserArgs,
) => {
  const { id, file, ...params } = args.input;

  let result;
  if (file) {
    try {

      const { createReadStream, filename } = await file;
      const _stream = createReadStream();
      const body = new stream.PassThrough();
      _stream.pipe(body);
      result = await createUploadStream(`${DO_SPACES_ROUTE}/users/${id}/${filename}`, body);

    } catch (error) {
      throw new Error('Tenemos problema para actualizar el usuario');
    }

    params.avatar = result?.Location as string;
  }


  if (params.password) {
    params.password = await bcrypt.hash(params.password, 10);
  }
  let user;

  try {
    user = await UserModel.findByIdAndUpdate(new ObjectId(id), params,
      {
        returnNewDocument: true,
        new: true,
      });

  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el usuario');
  }

  return user;
};

const createUserInvitation = async (parent: any, args: CreateUserInvitationArgs) => {
  let userInvitation;

  const { ...params } = args.input;

  try {
    userInvitation = await UserInvitationModel.create(params);
  } catch (e) {
    throw new Error('Tenemos problemas para crear la invitación');
  }

  return userInvitation;
};

export const userMutationResolvers = {
  updateUser,
  createUserInvitation,
};
