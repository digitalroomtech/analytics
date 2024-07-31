import {
  AuthPayload,
  ForgotPasswordArgs,
  ForgotPasswordPayload,
  LoginArgs,
  SignupArgs,
  ChangePasswordArgs,
  UserPayload,
} from './auth.types';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { jwtSign } from './auth.actions';
import { APP_SECRET } from '../../utils/constants';
import { IUser, UserRoles } from '../user/user.types';
import { UserModel, UserResetPasswordModel } from '../user/user.models';
import { ObjectId } from 'mongodb';
import moment from 'moment';
import crypto from 'crypto';
import { sendPostmarkChangePassword, sendPostmarkForgotPassword } from '../../utils/mail/sendMail';

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
  console.log({ password }, args);

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

  console.log({ user });

  const valid = await bcrypt.compare(args.password, user.password as string);
  console.log({ valid });

  if (!valid) {
    throw new Error('Contraseña invalida');
  }

  try {
    await UserModel.findByIdAndUpdate(
      user._id,
      {
        last_login: moment().toISOString(),
      },
      {
        returnNewDocument: true,
        new: true,
      },
    );
  } catch (e) {
    throw new Error('Tenemos problemas para actualizar el usuario');
  }

  const token = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token,
    user,
  };
};

/**
 * Forgot password user.
 *
 * @param {any}parent - Any params.
 * @param {ForgotPasswordArgs}args - Forgot password args.
 * @param {any}context - Prisma Resolver.
 * @returns {ForgotPasswordPayload} - Return payload data.
 */
const forgotPassword = async (
  parent: any,
  args: ForgotPasswordArgs,
  context: any,
): Promise<ForgotPasswordPayload> => {
  const { email } = args;

  const user = await UserModel.findOne({
    email,
  });

  if (!user) throw Error('El correo ingresado no existe');

  const token = crypto.randomBytes(64).toString('hex');

  try {
    await UserResetPasswordModel.create({
      token,
      email,
      expired_at: moment().add(2, 'days').toDate(),
    });
  } catch (e) {
    throw new Error('Tenemos problemas para crear el link de recuperación');
  }

  try {
    await sendPostmarkForgotPassword(args, token);
  } catch (e) {
    return {
      success: false,
    };
  }

  return {
    success: true,
  };
};

/**
 * Change password user.
 *
 * @param {any}parent - Any params.
 * @param {ChangePasswordArgs}args - Change  password args.
 * @param {ContextResolver}context - Prisma Resolver.
 * @returns {users} - Return payload data.
 */
export const changePassword = async (
  parent: any,
  args: ChangePasswordArgs,
  context: any,
): Promise<UserPayload> => {
  const { email, password, token } = args;

  const passwordReset = await UserResetPasswordModel.findOne({
    token: token as string,
  });

  if (!passwordReset) throw new Error('El token es incorrecto');

  let user = await UserModel.findOne({
    email,
  });

  if (!user) throw Error('El correo ingresado no existe');

  const isActive = moment().isBetween(
    moment(passwordReset?.created_at),
    moment(passwordReset?.expired_at),
  );

  if (!isActive) throw new Error('El token es expirado');

  try {
    const newPassword = await bcrypt.hash(password as string, 10);

    user = await UserModel.findByIdAndUpdate(
      new ObjectId(user._id),
      { password: newPassword },
      {
        returnNewDocument: true,
        new: true,
      },
    );

    await sendPostmarkChangePassword(user as IUser);

    await UserResetPasswordModel.findByIdAndUpdate(
      new ObjectId(passwordReset._id),
      {
        expired_at: moment().toDate(),
      },
      {
        returnNewDocument: true,
        new: true,
      },
    );
  } catch (e) {
    throw new Error('Error to update user');
  }

  const authToken = jwt.sign(jwtSign(user), APP_SECRET);

  return {
    token: authToken,
    user: user as IUser,
    show_onboarding: false,
  };
};

export const authMutationResolvers = {
  signup,
  login,
  forgotPassword,
  changePassword,
};
