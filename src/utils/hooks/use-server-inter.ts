import { languageFactory } from '../../i18n/i18n.config'
import { usePathServerSide } from '../../i18n/i18n.server';

function useServerInter<T>(dictionaryFile: string) {
    const internationalizationPath = usePathServerSide();
    const language = languageFactory(internationalizationPath)

    return language(dictionaryFile).then((modulo: T | null) => {
        return modulo
    });
}

export default useServerInter

