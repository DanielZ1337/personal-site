import InViewWrapper from "@/components/in-view-wrapper";
import ProjectBox from "@/components/project-box";
import React from "react";
import {Dictionary} from "@/dictionaries/utils/dictionary-type";

export default function Projects({dict}: { dict: Dictionary}) {
    return (
        <div id={dict.navbar.links[0].projects.id} className={"bg-background min-h-screen relative"}>
            <div className={"mt-40 max-w-[90vw] lg:max-w-[70vw] mx-auto"}>
                <h1 className={"text-5xl font-bold mb-10"}>{dict.text.projects}</h1>
                <h2 className={"text-2xl font-bold mb-10"}>{dict.text.projectssubtitle}</h2>
                <div
                    className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 mb-10 bg-neutral-200 dark:bg-black rounded-xl py-6 px-6 md:px-12 shadow-md"}>
                    {dict.projects.map((project, index) => (
                        <InViewWrapper key={project.title}
                                       initial={{opacity: 0}}
                                       whenInView={{opacity: 1}}
                                       whenNotInView={{opacity: 0}}
                                       transition={{duration: 0.5, delay: index * 0.1}}
                        >
                            <ProjectBox title={project.title} description={project.description}
                                        extraDescription={project.extraDescription}
                                        image={project.image}
                                        technologies={project.technologies} links={project.links}/>
                        </InViewWrapper>
                    ))}
                </div>
            </div>
        </div>
    )
}