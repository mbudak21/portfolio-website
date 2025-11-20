import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Gemini generated
export function useTranslations(lang: keyof typeof ui) {
  // 1. Capture the type of your English keys
  // This creates a union type: 'pageTitle' | 'homePage.h1' | 'footer.note.link' | ...
  type TranslationKey = keyof typeof ui[typeof defaultLang];

  return function t(key: TranslationKey) {
    // 2. Since your keys are now flat strings like 'homePage.h1', 
    // you don't need the complex 'reduce' or 'split' logic anymore!
    
    // @ts-ignore: TypeScript might complain if 'tr' is missing a key that 'en' has, 
    // but we handle fallback below.
    let text = ui[lang][key];
    
    if (text === undefined && lang !== defaultLang) {
      // Fallback to default language
      text = ui[defaultLang][key];
    }

    return text || key;
  }
}