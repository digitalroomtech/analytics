import mongoose from 'mongoose';
import { IFindOneOrCreate, IUser } from './user.types';

const { Schema, model } = mongoose;

interface IUserModel extends mongoose.Model<IUser> {
  findOneOrCreate(params: IFindOneOrCreate): IUser;
}

const userSchema = new Schema<IUser, IUserModel>(
  {
    user_id: Number,
    authenticate_analytic: {
      type: Schema?.Types.ObjectId,
      ref: 'AuthenticateAnalytics',
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

userSchema.static('findOneOrCreate', async function findOneOrCreate(params: IFindOneOrCreate) {
  const user = await this.findOne(params);

  return user ? user : await this.create(params);
});

export const User = model<IUser, IUserModel>('Users', userSchema);
