// @ts-check
import { defineConfig } from 'astro/config';
import { defaultLang } from './src/i18n/ui';

// https://astro.build/config
export default defineConfig({
  site: "https://www.mbudak21.com",
  redirects: {
    "/": `/${defaultLang}`,
  },
  i18n: {
    locales: ["en", "tr", "ru", "zh"], //, "ru", "zh-CN", "sv"
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: true,
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

});