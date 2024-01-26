import { AuthPayload, LoginArgs, SignupArgs } from './auth.types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwtSign } from './auth.actions';
import { APP_SECRET } from '../../utils/constants';
import { UserRoles } from '../user/user.types';
import { UserModel } from '../user/user.models';

/**
 * Sign up user.
 *
 * @param {any}parent - Any params.
 * @param {SignupArgs}args - Sign up args.
 * @param {any}context - Prisma Resolver.
 * @returns {AuthPayload} - Return payload data.
 */
const signup = async (parent: any, args: SignupArgs): Promise<AuthPayload> => {
  const password = await bcrypt.hash(args.password, 10);
  let user;

  try {
    user = await UserModel.create({
      name: args.name,
      email: args.email,
      password,
      role: UserRoles.USER,
    });
  } catch (e) {
    throw new Error('El usuario ya se encuentra registrado');
  }

  if (!user) throw Error('Tenemos problemas para crear el usuario');

  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

/**
 * Login user.
 *
 * @param {any}parent - Any params.
 * @param {LoginArgs}args - Sign up args.
 * @param {any}context - Prisma Resolver.
 * @returns {AuthPayload} - Return payload data.
 */
const login = async (parent: any, args: LoginArgs, context: any): Promise<AuthPayload> => {
  const user = await UserModel.findOne({ email: args.email });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const valid = await bcrypt.compare(args.password, user.password as string);

  if (!valid) {
    throw new Error('Contraseña invalida');
  }

  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

export const authMutationResolvers = {
  signup,
  login,
};
