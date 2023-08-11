import {useQuery} from "@tanstack/react-query";
import {getDictionary} from "@/dictionaries/utils/dictionaries";

export default function useDictionary(lang: string | undefined) {
    return useQuery(['dict', lang], () => getDictionary(String(lang)), {
        enabled: !!lang,
    })
}