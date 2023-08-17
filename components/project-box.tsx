import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {TbExternalLink} from "react-icons/tb";
import Chip from "@/components/chip";
import {SiGithub} from "react-icons/si";

const ICON_SIZE = 24; // You can adjust the icon size as needed

interface ProjectBoxProps {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly links: {
        readonly title: string;
        readonly url: string;
    }[];
    readonly technologies: {
        readonly title: string;
        readonly icon: React.ReactElement;
    }[];
    readonly extraDescription?: {
        readonly title: string;
        readonly credentials: {
            readonly link: string;
            readonly username: string;
        };
    };

}

export default async function ProjectBox({
                                             title,
                                             description,
                                             image,
                                             links,
                                             technologies,
                                             extraDescription
                                         }: ProjectBoxProps) {

    return (
        <div
            className="flex flex-col gap-4 border border-primary/10 dark:border-border rounded-xl h-full p-4 bg-background shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-between items-center">
                <Image
                    src={image} alt={title}
                    width={0} height={0}
                    sizes={"(min-width: 1536px) 384px, (min-width: 1280px) 320px, (min-width: 1024px) 256px, (min-width: 768px) 384px, (min-width: 640px) 320px, 100vw"}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    className={"object-contain mx-auto"}
                    placeholder={"blur"}
                    blurDataURL={image}
                />
            </div>
            <div className="flex flex-col gap-4 h-full justify-between">
                <div>
                    <Link href={links[1].url}
                          className="text-2xl font-bold mb-2 hover:underline" target="_blank"
                          rel="noreferrer">
                        {title}
                        <TbExternalLink
                            className={"ml-2 mb-2 inline-block flex-shrink-0 flex-grow-0 text-primary"}/>
                        <span className={"sr-only"}>{links[0].title}</span>
                    </Link>
                    <p className="text-lg mb-5">{description}</p>
                    <small className="text-sm text-muted-foreground flex-col flex">
                        {extraDescription && (
                            <>
                                <span className="font-bold">{extraDescription.title}</span>
                                <span>{extraDescription.credentials.link}</span>
                                <span>{extraDescription.credentials.username}</span>
                            </>
                        )}
                    </small>
                </div>
                <div className="flex flex-wrap gap-2">
                    {technologies.map(technology => (
                        <span
                            key={technology.title}
                            className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary/50 gap-2 shadow-sm hover:bg-primary/20 hover:text-primary transition-all"
                        >
                                {React.cloneElement(technology.icon, {size: '1.25rem', className: "text-primary"})}
                            {technology.title}
                            <span className={"sr-only"}>{technology.title}</span>
                            </span>
                    ))}
                </div>
            </div>
            <div>
                <Chip
                    link={links[0].url}
                    prompt={links[0].title}
                    className={"mx-auto mt-6 w-full"}
                >
                    <SiGithub className={"text-primary"}/>
                </Chip>
            </div>
        </div>
    );
}