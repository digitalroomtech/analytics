import { UserModel } from './user.models';

const currentUser = async (parent: any, args: any, context: any) => {
  const id = context.userId || 0;

  if (!id) throw Error('Usuario sin autorización');
  console.log('id', id);
  const user = await UserModel.findById(id);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  return user;
};

export const userQueryResolvers = {
  currentUser,
};
