// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.mbudak21.com",
  i18n: {
    locales: ["en", "tr", "ru", "zh"], //, "ru", "zh-CN", "sv"
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  }

});