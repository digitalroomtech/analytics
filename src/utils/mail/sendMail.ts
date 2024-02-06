import { POSTMARK_FROM_EMAIL, POSTMARK_TOKEN } from '../constants';

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
    throw new Error('Error to sending sign up email');
  }
};
