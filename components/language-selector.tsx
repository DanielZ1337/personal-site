'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {siteConfig} from "@/lib/site";
import {Suspense, useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import useDictionary from "@/dictionaries/useDictionary";

const availableLanguages = siteConfig.langs

export default function LanguageSelector() {
    const [langCode, setLangCode] = useState<string | undefined>(useParams().lang as string);
    const [langName, setLangName] = useState<string | undefined>(undefined);
    const router = useRouter()

    const {data, isLoading, error} = useDictionary(langCode)

    useEffect(() => {
        if (!data || !langCode) {
            return
        }

        if (data && langCode) {
            const langName = data.languages[langCode as keyof typeof data.languages]
            setLangName(langName)
        }
    }, [data, langCode]);


    if (availableLanguages.length <= 1) {
        return null
    }

    if (isLoading || !data) {
        return (
            <div className={"relative overflow-clip"}>
                <div aria-label={langCode} className={"absolute"}>
                    {langName && <span>{langName}</span>}
                    {langCode && <Image src={`/languages/${langCode}.svg`}
                                        alt={' Language'}
                                        fill className={"object-cover h-full absolute top-0 left-0 opacity-10"}/>}
                </div>
            </div>
        )
    }

    function changeLang(lang: string) {
        setLangCode(lang)
        const url = window.location.href.split("/")
        url[3] = lang
        router.push(url.join("/"))
    }

    return (
        <div className={"z-10"}>
            <Select value={langCode} onValueChange={changeLang}>
                <SelectTrigger className={"relative overflow-clip"}>
                    <SelectValue aria-label={langCode} >
                        <Suspense>
                            <span>{langName}</span>
                            <Image src={`/languages/${langCode}.svg`}
                                   alt={data.languages[langCode as keyof typeof data.languages] + ' Language'}
                                   fill className={"object-cover h-full absolute top-0 left-0 opacity-10"}/>
                        </Suspense>
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