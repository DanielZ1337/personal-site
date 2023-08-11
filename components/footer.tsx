import {BsArrowRight, BsGithub} from "react-icons/bs";
import Chip from "@/components/chip";
import {siteConfig} from "@/lib/site";
import {getDictionary} from "@/dictionaries/utils/dictionaries";

export default async function Footer({lang}:{ lang: string }) {
    const dict = await getDictionary(lang)

    return (
        <div className={"dark:bg-black w-full flex flex-col sm:flex-row justify-center h-32 items-center gap-4 whitespace-nowrap"}>
            <p>{dict.footer.creator}</p>
            <Chip
                prompt={
                    <>
                        {dict.text.visit}
                        <BsArrowRight/>
                    </>
                }
                link={siteConfig.links.github_repo}
            >
                {dict.footer.source} <BsGithub/> Github
            </Chip>
        </div>
    )
}