'use client'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {siteConfig} from "@/lib/site";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";

const languages = siteConfig.langs.map(lang => ({value: lang.code, label: lang.name}))

export default function LanguageSelector() {
    const [langCode, setLangCode] = useState<string | undefined>(undefined);
    const [langName, setLangName] = useState<string | undefined>(undefined);
    const router = useRouter()


    useEffect(() => {
        const langCode = document.getElementsByTagName("html")[0].lang
        setLangCode(langCode)
        setLangName(languages[languages.findIndex(({value}) => value === langCode)].label)
    }, [langCode]);

    function changeLang(lang: string) {
        setLangCode(lang)
        const url = window.location.href.split("/")
        url[3] = lang
        router.push(url.join("/"))
    }

    return (
        <div>
            <Select value={langCode} onValueChange={changeLang}>
                <SelectTrigger className={"relative overflow-hidden"}>
                    <SelectValue aria-label={langCode}>
                        <span>{langName}</span>
                        <Image src={`/languages/${langCode}.svg`}
                               alt={languages[langCode ? languages.findIndex(({value}) => value === langCode) : 0].label + ' Language'}
                               fill className={"object-cover h-full absolute top-0 left-0 opacity-10"}/>
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {languages.map(({value, label}) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}