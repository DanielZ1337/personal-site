import {BsArrowRight, BsGithub} from "react-icons/bs";
import Chip from "@/components/chip";
import {siteConfig} from "@/lib/site";

export default function Footer() {
    return (
        <div className={"w-full flex justify-center h-32 items-center space-x-4 whitespace-nowrap"}>
            <p>Made with ❤️ by Daniel Bermann Schmidt</p>
            <Chip
                prompt={
                    <>
                        Visit
                        <BsArrowRight/>
                    </>
                }
                link={siteConfig.links.github_repo}
            >
                Source on <BsGithub/> Github
            </Chip>
        </div>
    )
}