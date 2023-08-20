'use client'

import {siteConfig} from "@/lib/site";
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiMailSend} from "react-icons/bi";
import Link from "next/link";
import {m} from "framer-motion";
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getDictionary} from "@/dictionaries/utils/dictionaries";
import useDictionary from "@/dictionaries/useDictionary";
import socials from "@/lib/socials";

export default function SideNavSocials() {

    const {lang} = useParams();
    const {data: dict, isLoading} = useDictionary(lang as string)

    if (!dict) {
        return null
    }

    return (
        <m.div
            className={"h-[400px] w-[100px] fixed my-auto right-10 top-0 bottom-0 bg-muted rounded-xl break-all z-10 py-6 px-4 shadow-lg hidden lg:block"}
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 50}}
        >
            <p className={"text-center font-semibold text-secondary-foreground"}>{dict.text.socials}</p>
            <div
                className={"flex flex-col gap-4 h-full justify-center items-center absolute left-0 right-0 bottom-0 top-14 m-auto"}>
                {Object.entries(socials).map(([key, value]) => (
                    <Link href={value.href} key={key}
                          className={"flex justify-center items-center p-2 px-4 rounded-full hover:bg-primary hover:text-background text-primary text-2xl"}
                          target="_blank"
                          rel="noreferrer"
                    >
                        {value.icon}
                    </Link>
                ))}
            </div>
        </m.div>
    )
}