import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {siteConfig} from "@/lib/site";
import Skills from "@/components/skills";
import InViewWrapper from "@/components/in-view-wrapper";
import Welcome from "@/components/welcome";
import Link from "next/link";

export async function generateStaticParams() {
    return siteConfig.langs.map(lang => ({lang}))
}

export default async function Home({params: {lang}}: { params: { lang: string } }) {
    const dict = await getDictionary(lang)
    const shuffle = (arr: typeof dict.skills) => [...arr].sort(() => Math.random() - 0.5);
    const skills = shuffle(dict.skills)


    return (
        <div className={"flex-1 flex-col flex text-center -mt-16"}>
            <div className={"h-[100dvh] w-full top-0 left-0 -z-50 bg-background absolute"}/>
            <Welcome dict={dict}/>
            <div
                id={dict.navbar.links[0].skills.id}
                className={"bg-neutral-200 dark:bg-black min-h-screen bg-gradient-to-b from-neutral-200 dark:from-black from-75% to-100% to-background dark:to-background"}>
                <InViewWrapper
                    initial={{opacity: 0, y: 50}}
                    whenInView={{opacity: 1, y: 0}}
                    whenNotInView={{opacity: 0, y: 50}}
                    transition={{duration: 0.5}}
                >
                    <div className={"mt-40 flex-1 flex-col flex items-center h-full"}>
                        <h1 className={"text-5xl font-bold"}>{dict.text.skills}</h1>
                        <p className={"text-2xl mt-6 mb-10 dark:text-muted-foreground"}>{dict.text.skillsDescription2}</p>
                        <Skills skills={skills}/>
                        <InViewWrapper
                            initial={{opacity: 0, y: 50}}
                            whenInView={{opacity: 1, y: 0}}
                            whenNotInView={{opacity: 0, y: 50}}
                            transition={{duration: 0.5}}
                        >
                            <div className={"max-w-[600px] text-center whitespace-pre-wrap flex-wrap"}>
                                <InViewWrapper
                                    initial={{filter: 'drop-shadow(0 0 0 hsla(var(--primary-foreground)))'}}
                                    animate={{filter: ['drop-shadow(0px 5px 30px hsla(var(--primary-foreground)))', 'drop-shadow(0px 3px 20px hsla(var(--primary-foreground)))', 'drop-shadow(0px 5px 25px hsla(var(--primary-foreground)))', 'drop-shadow(5px 7px 30px hsla(var(--primary-foreground)))', 'drop-shadow(0px 10px 35px hsla(var(--primary-foreground)))', 'drop-shadow(0px 5px 30px hsla(var(--primary-foreground)))']}}
                                    transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}
                                >
                                    <h1 className={"text-2xl mt-10 font-bold "}>{dict.text.projectsDescription}</h1>
                                </InViewWrapper>
                                <InViewWrapper
                                    initial={{opacity: 0, x: -50}}
                                    whenInView={{opacity: 1, x: 0}}
                                    whenNotInView={{opacity: 0, x: -50}}
                                    transition={{duration: 0.5}}
                                >
                                    <p className="text-xl mt-16 mb-5 dark:text-muted-foreground">{dict.text.projectsDescription2}</p>
                                </InViewWrapper>
                                <InViewWrapper
                                    initial={{opacity: 0, x: 50}}
                                    whenInView={{opacity: 1, x: 0}}
                                    whenNotInView={{opacity: 0, x: 50}}
                                    transition={{duration: 0.5}}
                                >
                                    <p className="text-xl mb-5 dark:text-muted-foreground">{dict.text.projectsDescription3}</p>
                                </InViewWrapper>
                            </div>
                        </InViewWrapper>
                    </div>
                </InViewWrapper>
            </div>
            <div id={dict.navbar.links[0].projects.id} className={"bg-background min-h-screen"}>
                <div className={"mt-40"}>
                    <h1 className={"text-5xl font-bold"}>{dict.text.projects}</h1>
                </div>
            </div>

            <div id={dict.navbar.links[0].contact.id} className={"bg-background min-h-screen"}>
                <div className={"mt-40"}>
                    <p className="text-xl mt-6 mb-5 dark:text-muted-foreground">{dict.text.contact}</p>
                    <a href={siteConfig.links.emailto} className="text-blue-500 underline">
                        {siteConfig.links.email}
                    </a>
                    <p className="text-xl mt-6 mb-5 text-muted-foreground">
                        {dict.text.resume}
                        <Link href="/resume.pdf" className="text-blue-500 underline">
                            Your Resume
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}
