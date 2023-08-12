'use client'

import {siteConfig} from "@/lib/site";
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiMailSend} from "react-icons/bi";
import Link from "next/link";
import {m} from "framer-motion";
import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getDictionary} from "@/dictionaries/utils/dictionaries";

export default function SideNavSocials() {

    const {lang} = useParams();
    const {data: dict} = useQuery(['dict', lang], () => getDictionary(String(lang)), {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    })

    const socials = {
        "LinkedIn": {
            "href": siteConfig.links.linkedin,
            "icon": <BiLogoLinkedin/>
        },
        "GitHub": {
            "href": siteConfig.links.github,
            "icon": <BiLogoGithub/>
        },
        "Email": {
            "href": siteConfig.links.emailto,
            "icon": <BiMailSend/>
        },
        "Twitter": {
            "href": siteConfig.links.twitter,
            "icon": <BiLogoTwitter/>
        },
        "YouTube": {
            "href": siteConfig.links.youtube,
            "icon": <BiLogoTwitter/>
        }
    }

    if (!dict) {
        return null
    }

    return (
        <m.div className={"h-[400px] w-[100px] fixed my-auto right-10 top-0 bottom-0 bg-muted rounded-xl break-all z-10 py-6 px-4 shadow-lg"}
               initial={{opacity: 0, x: 50}}
               animate={{opacity: 1, x: 0}}
               exit={{opacity: 0, x: 50}}
        >
            <p className={"text-center font-semibold text-secondary-foreground"}>{dict.text.socials}</p>
            <div className={"flex flex-col gap-4 h-full justify-center items-center absolute left-0 right-0 bottom-0 top-0 m-auto"}>
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