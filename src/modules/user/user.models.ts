import mongoose from 'mongoose';
import { IFindOneOrCreate, IUser } from './user.types';

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

userSchema.static('findOneOrCreate', async function findOneOrCreate(params: IFindOneOrCreate) {
  const user = await this.findOne(params);
  return user ? user : await this.create(params);
});

export const UserModel = model<IUser, IUserModel>('Users', userSchema);
