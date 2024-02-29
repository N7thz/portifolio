import type { Locale } from "@/i18n-config";

const dictionaries = {
    en: () => import("@/dictionaries/en").then(module => module.default),
    pt: () => import("@/dictionaries/pt").then(module => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
