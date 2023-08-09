import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {siteConfig} from "@/lib/site";
import ThemeSelector from "@/components/theme-selector";
import Image from "next/image";

export async function generateStaticParams() {
    return siteConfig.langs.map(lang => ({lang: lang.code}))
}

export default async function Home({params: {lang}}: { params: { lang: string } }) {

    const dict = await getDictionary(lang)

    return (
        <div>
            <p>This is my website</p>
            {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />*/}

        </div>
    )
}
