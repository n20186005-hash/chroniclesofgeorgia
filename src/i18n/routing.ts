import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ka', 'en', 'ru', 'zh-Hant', 'zh-Hans'],
  defaultLocale: 'ka'
});
