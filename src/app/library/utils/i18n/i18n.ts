import { initReactI18next } from 'react-i18next';

import { ENVConfig } from '@config/env';
import i18n, { LanguageDetectorAsyncModule, Resource } from 'i18next';

import { resources } from './locales';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: (callback: (lng: string | readonly string[] | undefined) => void) => {
    callback(ENVConfig.DEFAULT_FALLBACK_LNG_I18n);
  },
  init: () => {
    console.log('init I18n');
  },
  cacheUserLanguage: () => {
    console.log('cacheUserLanguage I18n');
  },
};

export const initOptionsI18n = (source: Resource) => {
  return {
    fallbackLng: ENVConfig.DEFAULT_FALLBACK_LNG_I18n,

    resources: source,

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',
    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  };
};

/**
 * Config i18n for app
 */
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init(initOptionsI18n(resources));

export default i18n;
