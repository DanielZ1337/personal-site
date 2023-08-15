'use client'

import SkillCard from "@/components/skill-card";
import {m, useInView} from "framer-motion";
import {useRef} from "react";
import {Dictionary} from "@/dictionaries/utils/dictionary-type";

export default function SkillsGrid({skills}: { skills: Dictionary["skills"] }) {
    const ref = useRef<HTMLUListElement>(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div className={"flex items-center justify-center"}>
            <ul ref={ref}
                className={"max-w-[350px] md:w-[500px] items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"}>
                {skills.map((skill, index) => (
                    <m.li
                        key={index}
                        initial={{opacity: 0, x: index % 3 === 0 ? -50 : 50}}
                        animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 50}}
                        transition={{duration: 0.5, delay: index * 0.2}}
                        className={"flex items-center justify-center "}
                    >
                        <SkillCard skill={skill}/>
                    </m.li>
                ))}
            </ul>
        </div>
    )
}