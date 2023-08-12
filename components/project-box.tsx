import React from 'react';
import InViewWrapper from "@/components/in-view-wrapper";
import {getDictionary} from "@/dictionaries/utils/dictionaries";
import Link from "next/link";
import {SiGithub} from "react-icons/si";
import TechnologiesUsedBadge from "@/components/technologies-used-badge";
import TechUsedIcons from "@/components/tech-used-icons";

const ICON_SIZE = 24; // You can adjust the icon size as needed

interface ProjectBoxProps {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly links: {
        readonly title: string;
        readonly url: string;
    }[];
    readonly technologies: string[];
    readonly icons: {
        readonly title: string;
        readonly icon: React.ReactElement;
    }[];
    readonly lang: string;

}

export default async function ProjectBox({
                                             title,
                                             description,
                                             image,
                                             links,
                                             technologies,
                                             icons,
                                             lang
                                         }: ProjectBoxProps) {
    const dict = await getDictionary(lang)

    return (
        <InViewWrapper
            initial={{opacity: 0, x: 50}}
            whenInView={{opacity: 1, x: 0}}
            whenNotInView={{opacity: 0, x: 50}}
            transition={{duration: 0.5}}
        >
            <div className="flex border rounded p-4 m-4">
                <img src={image} alt={title} className="max-w-150 mr-4"/>
                <div className="flex flex-col flex-grow">
                    <h2 className="text-2xl mb-2">{title}</h2>
                    <p className="mb-2">{description}</p>
                    <div className="flex mb-2">
                        {links.map((link, idx) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mr-2 flex gap-2"
                            >
                                {link.title} {idx === 1 && <SiGithub size={ICON_SIZE}/>}
                            </Link>
                        ))}
                    </div>
                    <div className="mb-2">
                        <h3>{dict.text.technologiesused}</h3>
                        <ul className="list-none p-0">
                            {technologies.map(tech => (
                                <li key={tech}>
                                    <TechnologiesUsedBadge>{tech}</TechnologiesUsedBadge>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <TechUsedIcons icons={icons}/>
                </div>
            </div>
        </InViewWrapper>
    );
}