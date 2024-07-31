import { ForgotPasswordArgs } from '../../modules/auth/auth.types';
import { IUser } from '../../modules/user/user.types';
import { BACKEND_URL, POSTMARK_FROM_EMAIL, POSTMARK_TOKEN } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const postmark = require('postmark');
const postmarkClient = new postmark.ServerClient(POSTMARK_TOKEN);

export const sendPostmarkSignupEmail = async (invitation: {
  email: string;
  tenant: string;
  role: string;
  logo: string;
  url: string;
}) => {
  try {
    await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'user-invitation',
      From: POSTMARK_FROM_EMAIL,
      To: invitation.email,
      TemplateModel: {
        email: invitation.email,
        tenant: invitation.tenant,
        role: invitation.role,
        logo: invitation.logo,
        url: invitation.url,
      },
    });
  } catch (e) {
    console.log('e', e);
    throw new Error('Error to sending sign up email');
  }
};

export const sendPostmarkForgotPassword = async (data: ForgotPasswordArgs, token: string) => {
  let response;
  try {
    response = await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'reset-password-easy-data',
      From: POSTMARK_FROM_EMAIL,
      To: data.email,
      TemplateModel: {
        url: `${BACKEND_URL}/auth/reset-password?token=${token}&redirect_url=${data.redirectUrl}`,
      },
    });
  } catch (e) {
    throw new Error('Error to sending forgot password');
  }
  return response;
};

export const sendPostmarkChangePassword = async (user: IUser) => {
  let response;
  try {
    response = await postmarkClient.sendEmailWithTemplate({
      TemplateAlias: 'confirmar',
      From: POSTMARK_FROM_EMAIL,
      To: user.email,
      TemplateModel: { email: user.email },
    });
  } catch (e) {
    throw new Error('Error to sending change password');
  }

  return response;
};
