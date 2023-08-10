import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {siteConfig} from "@/lib/site";
import Skills from "@/components/skills";
import Link from "next/link";
import InViewWrapper from "@/components/in-view-wrapper";
import Image from "next/image";
import logo from "@/public/logo_old.svg";
import avatar from "@/public/avatar.jpg";
import Welcome from "@/components/welcome";

export async function generateStaticParams() {
    return siteConfig.langs.map(lang => ({lang}))
}

export default async function Home({params: {lang}}: { params: { lang: string } }) {
    const dict = await getDictionary(lang)
    const shuffle = (arr: typeof dict.skills) => [...arr].sort(() => Math.random() - 0.5);
    const skills = shuffle(dict.skills)


    return (
        <div className={"flex-1 flex-col flex text-center"}>
            <div className={"h-[100dvh] w-full top-0 left-0 -z-50 bg-background absolute"}/>
            <Welcome dict={dict}/>
            <InViewWrapper
                initial={{opacity: 0, y: 50}}
                whenInView={{opacity: 1, y: 0}}
                whenNotInView={{opacity: 0, y: 50}}
                transition={{duration: 0.5}}
            >
                <h1 id={"om"} className={"text-4xl mt-4 font-bold"}>{dict.text.skills}</h1>
                <p className={"text-xl mt-6 mb-5 text-muted-foreground"}>{dict.text.skillsDescription}</p>
            </InViewWrapper>
            <Skills skills={skills}/>

            <p className="text-xl mt-6 mb-5 text-muted-foreground">{dict.text.projectsDescription2}</p>
            <p className="text-xl mb-5 text-muted-foreground">{dict.text.projectsDescription3}</p>

            <p className="text-xl mt-6 mb-5 text-muted-foreground">{dict.text.contact}</p>
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
    )
}
