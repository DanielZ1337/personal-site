'use client'

import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {m, useInView} from "framer-motion";
import {useRef} from "react";
import {Dictionary} from "@/dictionaries/utils/dictionary-type";

export default function SkillCard({skill}: { skill: Dictionary["skills"][number] }) {
    const {title, description, icon} = skill;
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {once: true});

    return (
        <HoverCard
            openDelay={25}
            closeDelay={25}
        >
            <HoverCardTrigger className="flex items-center flex-col gap-2 justify-center w-20 h-20 rounded-full"
                              asChild>
                <div>
                    <span className={"text-primary"}>{icon}</span>
                    <m.p ref={ref}
                         initial={{opacity: 0}}
                         animate={isInView ? {opacity: 1} : {opacity: 0}}
                         transition={{duration: 1.5, delay: 0.5, ease: "easeInOut"}}
                         className={"text-center text-accent-foreground"}
                    >
                        {title}
                    </m.p>
                </div>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className={"flex flex-col space-y-2"}>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-sm">{description}</p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
