import i18next from 'i18next';
import * as yup from 'yup';

import resources from './locales';

const i18n = i18next.createInstance();

const defaultLanguage = 'ru';

const initI18n = () =>
  i18n.init({ lng: defaultLanguage, resources }).then(() => {
    yup.setLocale({
      mixed: { required: 'required' },
      string: { url: 'invalidUrl' },
    });
    return i18n;
  });

export { i18n, initI18n };
