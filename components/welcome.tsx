import InViewWrapper from "@/components/in-view-wrapper";
import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import {siteConfig} from "@/lib/site";
import logo from "@/public/logo_old.svg";
import Link from "next/link";
import type {Dictionary} from '@/dictionaries/utils/dictionary-type';

export default function Welcome({dict}: { dict: Dictionary }) {
    return (
        <div className={"h-[100dvh] z-10 mb-10 md:mb-0"}>
            <div
                className={"flex-1 flex-col flex items-center h-full my-40 bg-gradient-to-b from-background from-50% to-100% to-neutral-200 dark:to-black"}>
                <div>
                    <div className={"relative md:w-96 md:h-96 w-64 h-64 drop-shadow-xl"}>
                        <InViewWrapper
                            initial={{opacity: 0}}
                            whenInView={{opacity: 1}}
                            whenNotInView={{opacity: 0}}
                            transition={{duration: 0.5}}
                        >
                            <Image className={"rounded-full object-cover"} placeholder={"blur"} src={avatar}
                                   alt={siteConfig.title} fill sizes={"100%"}/>
                            <div className={"absolute bottom-0 right-0 flex justify-center items-center"}>
                                <Image src={logo} className={"absolute p-6 object-contain"} alt={siteConfig.title}
                                       width={200}
                                       height={200}/>
                                <div className={"w-full h-full bg-black p-10 rounded-full"}/>
                            </div>
                        </InViewWrapper>
                    </div>
                </div>
                <h1 className={"mt-14 text-4xl font-bold md:mx-0 mx-10"}>
                    <InViewWrapper
                        initial={{opacity: 0, y: 50}}
                        whenInView={{opacity: 1, y: 0}}
                        whenNotInView={{opacity: 0, y: 50}}
                        transition={{duration: 0.5}}
                    >
                        <p>
                            {dict.text.hello}
                            <Link href={siteConfig.links.linkedin}
                                  className={"text-primary underline"}
                                  target="_blank"
                                  rel="noreferrer"
                            >
                                {siteConfig.creator}
                            </Link>
                            !
                        </p>
                    </InViewWrapper>
                </h1>
                <InViewWrapper
                    initial={{opacity: 0, y: 50}}
                    whenInView={{opacity: 1, y: 0}}
                    whenNotInView={{opacity: 0, y: 50}}
                    transition={{duration: 0.5}}
                >
                    <p className={"max-w-md text-xl mt-6 mb-5 text-muted-foreground md:mx-0 mx-10"}>{dict.text.about}</p>
                </InViewWrapper>
            </div>
        </div>
    )
}