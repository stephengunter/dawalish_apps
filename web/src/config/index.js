import { isTrue } from '@/utils';
export const APP_CLOSED = isTrue(process.env.VUE_APP_CLOSE);
export const PRODUCTION = process.env.NODE_ENV === 'production';
export const SITE_URL = process.env.VUE_APP_URL;
export const SITE_TITLE = process.env.VUE_APP_TITLE;
export const API_URL = process.env.VUE_APP_API_URL;

export const LOGO_SRC = './img/logo.png';
//AUTH
export const GOOGLE_AUTH_PARAMS = {
   client_id: process.env.VUE_APP_GOOGLE_AUTH_CLIENT_ID,
   scope: 'email'
};

export const GOOGLE_RECAPTCHA_PARAMS = {
   sitekey: process.env.VUE_APP_GOOGLE_RECAPTCHA_SITEKEY,
};


//UI
export const DIALOG_MAX_WIDTH = 420;