import { AuthPayload, LoginArgs, SignupArgs } from './auth.types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwtSign } from './auth.actions';
import { APP_SECRET } from '../../utils/constants';
import { ROLES } from '../user/user.types';

/**
 * Sign up user.
 *
 * @param {any}parent - Any params.
 * @param {SignupArgs}args - Sign up args.
 * @param {any}context - Prisma Resolver.
 * @returns {AuthPayload} - Return payload data.
 */
const signup = async (parent: any, args: SignupArgs, context: any): Promise<AuthPayload> => {
  const password = await bcrypt.hash(args.password, 10);
  const role = await context.prisma.user_roles.findFirst({ where: { name: ROLES.USER } });
  if (!role) throw new Error('No hay rol de usuario dentro del sistema');
  let user;

  try {
    user = await context.prisma.users.create({
      data: {
        name: args.name,
        email: args.email,
        password,
        role_id: role.id,
      },
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
  const user = await context.prisma.users.findUnique({ where: { email: args.email } });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const valid = await bcrypt.compare(args.password, user.password);

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
