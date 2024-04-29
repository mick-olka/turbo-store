export const i18n = {
  defaultLocale: "ua",
  locales: ["en", "de", "ua"],
  localStorage: "lang",
} as const;

export type Locale = (typeof i18n)["locales"][number];
