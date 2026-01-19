// Shared i18n configuration and utilities
export const LOCALES = ['en', 'tr', 'ru', 'zh'] as const;

export type Locale = typeof LOCALES[number];

// Helper function to generate static paths for all locales
export function getLocaleStaticPaths() {
  return LOCALES.map(locale => ({ params: { locale } }));
}
