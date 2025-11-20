import { en } from './locales/en';
import { tr } from './locales/tr';
import { ru } from './locales/ru';
import { zh } from './locales/zh';

export const languages = {
  en: 'English',
  tr: 'Türkçe',
  ru: 'Русский',
  zh: '简体中文' // Simplified Chinese
};

export const defaultLang = 'en';

export const ui = {
  en, tr, ru, zh
} as const;
