const dictionaryImports = {
    "en-us": (file: string) => import(`@/dictionaries/en-us/${file}.json`),
    "pt-br": (file: string) => import(`@/dictionaries/pt-br/${file}.json`)
};

export function languageFactory(locale: string) {
    return dictionaryImports[locale as Languages] ?? dictionaryImports[defaultLocale];
}

export const defaultLocale: Languages = "en-us";

export const languagesArray = Object.keys(dictionaryImports)

export type Languages = keyof typeof dictionaryImports;
