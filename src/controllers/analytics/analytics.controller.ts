import { Request as ExpressRequest, Response } from 'express';
import {
  AuthenticateAnalytic,
  PageAnalytic,
  SocialNetworkAnalytic,
  SocialNetworkSessionAnalytic,
} from './analytics.models';
import { User } from '../user/user.models';
import { IAuthenticateAnalyticName } from './analytics.types';
import {
  PageAnalyticNames,
  SocialNetworkAnalyticNames,
  SocialNetworkSessionAnalyticNames,
} from '../../utils/constants';

interface Request extends ExpressRequest {
  tenant_id?: string;
  name?: IAuthenticateAnalyticName;
  authenticate?: string;
  originUrl?: string;
}

export async function authenticate(req: Request, res: Response) {
  let authenticateAnalyticsCreate;

  try {
    const user = await User.findOneOrCreate({ user_id: req.body.user_id || 0 });

    authenticateAnalyticsCreate = await AuthenticateAnalytic.create({
      tenant: {
        _id: req.body.tenant_id,
      },
      users: [user],
      url: req.headers.origin || req.body.originUrl,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Authenticate successfully.', uuid: authenticateAnalyticsCreate._id });
}

export async function analyticsCreate(req: Request, res: Response) {
  const data = req.body;
  if (!(data.name || data.tenant_id || data.authenticateId || data.user_id || data.originUrl)) {
    return res.status(500).json({ message: 'El name y uuid son requeridos' });
  }
  try {
    const params = {
      name: data.name,
      url: data.originUrl,
      tenant: {
        _id: data.tenant_id,
      },
      authenticate_analytic: {
        _id: data.authenticate,
      },
    };

    if (PageAnalyticNames.includes(data.name)) {
      await PageAnalytic.create(params);
    } else if (SocialNetworkAnalyticNames.includes(data.name)) {
      await SocialNetworkAnalytic.create(params);
    } else if (SocialNetworkSessionAnalyticNames.includes(data.name)) {
      await SocialNetworkSessionAnalytic.create(params);
    }

    const authenticateAnalyticsUser = await AuthenticateAnalytic.findOne({
      _id: data.authenticate,
    }).populate({
      path: 'users',
      match: { user_id: data.user_id },
    });

    const users = authenticateAnalyticsUser?.users || [];

    if (!users.length) {
      const createdUser = await User.create({ user_id: data.user_id });

      await AuthenticateAnalytic.findOneAndUpdate(
        {
          _id: data.authenticate,
        },
        { $push: { users: { _id: createdUser._id } } },
      );
    }
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  return res.json({ message: 'Register event successfully.' });
}

export const isAuthenticateAnalytics = async (id: string) => {
  return await AuthenticateAnalytic.findById(id);
};
