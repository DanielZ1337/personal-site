'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {siteConfig} from "@/lib/site";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import useDictionary from "@/dictionaries/useDictionary";

const availableLanguages = siteConfig.langs

export default function LanguageSelector() {
    const [langCode, setLangCode] = useState<string | undefined>(undefined);
    const [langName, setLangName] = useState<string | undefined>(undefined);
    const router = useRouter()
    useEffect(() => {
        const lang = window.location.href.split("/")[3]
        if (lang) {
            setLangCode(lang)
        }

    }, []);

    const {data, error} = useDictionary(langCode)

    useEffect(() => {

        if (!data || !langCode) {
            return
        }

        // find language name from useDictionary
        if (data && langCode) {
            const langName = data.languages[langCode as keyof typeof data.languages]
            setLangName(langName)
        }
    }, [data, langCode]);

    if (!langCode || !langName) {
        return null
    }

    if (availableLanguages.length <= 1) {
        return null
    }

    if (!data) {
        return null
    }

    function changeLang(lang: string) {
        setLangCode(lang)
        const url = window.location.href.split("/")
        url[3] = lang
        router.push(url.join("/"))
    }

    return (
        <div>
            <Select value={langCode} onValueChange={changeLang}>
                <SelectTrigger className={"relative overflow-clip"}>
                    <SelectValue aria-label={langCode} className={"absolute"}>
                        <span>{langName}</span>
                        <Image src={`/languages/${langCode}.svg`}
                               alt={data.languages[langCode as keyof typeof data.languages] + ' Language'}
                               fill className={"object-cover h-full absolute top-0 left-0 opacity-10"}/>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {availableLanguages.map((lang) => (
                        <SelectItem key={lang}
                                    value={lang}>
                            {data.languages[lang as keyof typeof data.languages]}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}