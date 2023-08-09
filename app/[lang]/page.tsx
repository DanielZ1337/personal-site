import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {siteConfig} from "@/lib/site";
import Skills from "@/components/skills";

export async function generateStaticParams() {
    return siteConfig.langs.map(lang => ({lang}))
}

export default async function Home({params: {lang}}: { params: { lang: string } }) {
    const dict = await getDictionary(lang)
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const skills = shuffle(dict.skills)


    return (
        <div className={"text-center"}>
            <h1 className={"text-4xl mt-4 font-bold"}>{dict.text.skills}</h1>
            <p className={"text-xl mt-6 mb-5 text-muted-foreground"}>{dict.text.skillsDescription}</p>
            <Skills skills={skills}/>


        </div>
    )
}
