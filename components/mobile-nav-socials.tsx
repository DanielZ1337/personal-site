'use client'

import {useParams} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {siteConfig} from "@/lib/site";
import {BiLogoGithub, BiLogoLinkedin, BiLogoTwitter, BiLogoYoutube, BiMailSend} from "react-icons/bi";
import Link from "next/link";
import {Drawer} from 'vaul';
import {MdKeyboardDoubleArrowUp} from "react-icons/md";
import {useState} from "react";
import {m} from "framer-motion";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {shouldOpenInNewTab} from "@/lib/utils";


type Tabs = "Nav" | "Socials"

export default function MobileNavSocials() {
    const {lang} = useParams();
    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState<Tabs>("Nav")
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
            "icon": <BiLogoYoutube/>
        }
    }

    if (!dict) return (<></>)

    const LinkVariant = 'flex items-center gap-2 text-xl bg-primary/10 rounded-full px-4 py-2 active:bg-primary/20 hover:bg-primary/20 transition-colors duration-200 ease-in-out w-full active:text-current text-primary'

    return (
        <div className={"block lg:hidden"}>
            <Drawer.Root open={isOpen} onOpenChange={setIsOpen} shouldScaleBackground>
                <Drawer.Trigger asChild>
                    <m.div
                        initial={{opacity: 0, y: 50}}
                        animate={!isOpen ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                        transition={{duration: 0.5}}
                        onClick={() => setIsOpen(!isOpen)}
                        className={"fixed bottom-0 left-0 right-0 flex justify-center items-center mx-auto w-20 z-50 mb-10 bg-muted-foreground/50 rounded-full"}>
                        <MdKeyboardDoubleArrowUp className={"w-10 h-10 text-primary"}/>
                    </m.div>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50"/>
                    <Drawer.Content
                        className="bg-neutral-200 dark:bg-black flex flex-col rounded-t-[10px] h-fit mt-96 fixed bottom-0 left-0 right-0 z-50">
                        <div className="p-4 bg-neutral-200 dark:bg-black rounded-t-[10px] flex-1">
                            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8"/>
                            <div className={"flex flex-col gap-2 justify-center items-center"}>
                                {tab === "Nav" ? (
                                    <>
                                        {Object.entries(dict.navbar.links[0]).map(([key, value]) => (
                                            <Link href={value.anchor} key={key} className={LinkVariant}>
                                                {value.title}
                                            </Link>
                                        ))}
                                        <p className={LinkVariant} onClick={() => setTab("Socials")}>{dict.text.socials} <GoArrowRight/></p>
                                    </>) : (
                                    <>
                                        {Object.entries(socials).map(([key, value]) => (
                                            <Link href={value.href} key={key}
                                                  className={LinkVariant}
                                                  target={shouldOpenInNewTab(value.href) ? "_blank" : '_self'}
                                                  rel={shouldOpenInNewTab(value.href) ? "noopener noreferrer" : undefined}
                                            >
                                                {value.icon}
                                                <span>{key}</span>
                                            </Link>
                                        ))}
                                        <p className={LinkVariant} onClick={() => setTab("Nav")}><GoArrowLeft/>{dict.text.navigation}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    )
}
/*<div className={"flex flex-col gap-2 z-10 fixed lg:hidden bottom-0 left-0 right-0 bg-background dark:bg-black/90 p-4"}>
    {Object.entries(socials).map(([key, value]) => (
        <Link href={value.href} key={key} className={"flex items-center gap-2"}>
            {value.icon}
            <span>{key}</span>
        </Link>
    ))}
</div>*/
