import mongoose from 'mongoose';
import { IFindOneOrCreate, IUser, UserInvitation } from './user.types';
import { ITenantUserInvitation } from '../tenant/tenant.types';

const { Schema, model } = mongoose;

interface IUserModel extends mongoose.Model<IUser> {
  findOneOrCreate(params: IFindOneOrCreate): IUser;
}

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: String,
    email: {
      unique: true,
      type: String,
    },
    password: String,
    avatar: String,
    timezone: String,
    role: {
      type: String,
      enum: ['ADMINISTRATOR', 'USER'],
      default: 'USER',
    },
    tenantUsers: [
      {
        type: Schema?.Types.ObjectId,
        ref: 'TenantUsers',
      },
    ],
    last_login: {
      type: Date,
    },
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    collection: 'users',
  },
);

const UserInvitationSchema = new Schema<UserInvitation>(
  {
    role: {
      type: String,
      enum: ['ADMINISTRATOR', 'USER'],
      default: 'USER',
    },
    status: {
      type: String,
      enum: ['ACCEPTED', 'REJECTED', 'PENDING'],
      default: 'PENDING',
    },
    email: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'user_invitations' },
);

const userResetPasswordSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expired_at: {
      type: Date,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
      index: true,
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  { collection: 'user_reset_password' },
);

userSchema.static('findOneOrCreate', async function findOneOrCreate(params: IFindOneOrCreate) {
  const user = await this.findOne(params);
  return user ? user : await this.create(params);
});

export const UserModel = model<IUser, IUserModel>('Users', userSchema);
export const UserInvitationModel = model('UserInvitations', UserInvitationSchema);
export const UserResetPasswordModel = model('user_reset_password', userResetPasswordSchema);
