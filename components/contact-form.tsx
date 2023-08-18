import {Dictionary} from "@/dictionaries/utils/dictionary-type";
import React from "react";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {siteConfig} from "@/lib/site";
import Link from "next/link";
import InViewWrapper from "@/components/in-view-wrapper";

export default function ContactForm({dict}: { dict: Dictionary }) {
    return (
        <InViewWrapper
            initial={{opacity: 0, y: 50}}
            whenInView={{opacity: 1, y: 0}}
            whenNotInView={{opacity: 0, y: 50}}
            transition={{duration: 0.5}}
        >
            <div
                id={dict.navbar.links[0].contact.id}
                className={"mt-16 mb-16 flex max-w-[90vw] lg:max-w-[70vw] mx-auto bg-neutral-200 dark:bg-black rounded-xl py-24 px-20 flex-col h-full shadow-md"}>
                <h1 className={"text-5xl font-bold text-center"}>{dict.text.contacttitle}</h1>
                <h2 className={"text-2xl mt-6 mb-8 dark:text-muted-foreground text-center"}>{dict.text.contact}</h2>
                <div className={"mx-auto flex gap-2 w-full md:w-2/3 xl:w-1/2"}>
                    <div className={"whitespace-pre-wrap flex-wrap w-full"}>
                        <p className={"text-xl mb-5 md:mt-0 mt-16 dark:text-muted-foreground text-start"}>{dict.text.email}: <span>
                <Link href={`mailto:${siteConfig.links.email}`}
                      className={"text-primary hover:underline"}
                      target={"_blank"}
                      rel={"noreferrer"}
                >
                    {siteConfig.links.email}
                </Link>
            </span>
                        </p>
                        <div className={"flex flex-col gap-4"}>
                            <form className={"flex flex-col gap-3 text-start"}>
                                <Input type="text" id="name" name="name" placeholder={dict.text.contactform.name}
                                       className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"}/>
                                <Input type="email" id="email" name="email" placeholder={dict.text.contactform.email}
                                       className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"}/>
                                <Textarea id="message" name="message" placeholder={dict.text.contactform.message}
                                          className={"p-2 rounded-md bg-neutral-200 dark:bg-black border border-primary/20 dark:border-border"}/>
                            </form>
                            <button
                                className={"bg-primary text-white p-2 rounded-md font-semibold hover:bg-primary/90 hover:text-white transition-all drop-shadow-[0_0px_4px_hsla(var(--primary))] active:drop-shadow-none"}
                                >
                                {dict.text.contactform.sendemail}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </InViewWrapper>
    )
}