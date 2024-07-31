import { Request, Response } from 'express';
import { FRONT_URL } from '../../utils/constants';
import moment from 'moment';
import { UserResetPasswordModel } from '../user/user.models';

export const jwtSign = (user: any) => ({ userId: user.id, email: user.email, role: user.role });

export const forgotPassword = async (req: Request, res: Response) => {
  const query = req.query;
  console.log({ query });
  if (!query.token) {
    return res.redirect(
      `${FRONT_URL}/auth?redirect_url=${
        query.redirect_url as string
      }&action=AUTH_FORGOT_PASSWORD_NOT_FOUND`,
    );
  }

  const passwordReset = await UserResetPasswordModel.findOne({
    token: query.token as string,
  });

  if (!passwordReset) {
    return res.redirect(
      `${FRONT_URL}/auth?redirect_url=${
        query.redirect_url as string
      }&action=AUTH_FORGOT_PASSWORD_NOT_FOUND`,
    );
  }

  const isActive = moment().isBetween(
    moment(passwordReset?.created_at),
    moment(passwordReset?.expired_at),
  );

  console.log({ isActive });

  if (!isActive)
    return res.redirect(
      `${FRONT_URL}/auth?redirect_url=${
        query.redirect_url as string
      }&action=AUTH_FORGOT_PASSWORD_NOT_FOUND`,
    );

  return res.redirect(
    `${FRONT_URL}/auth?redirect_url=${
      query.redirect_url as string
    }&action=AUTH_RESET_PASSWORD&password_reset_token=${query.token}&email=${encodeURIComponent(
      passwordReset.email,
    )}&form=${query.form}`,
  );
};
