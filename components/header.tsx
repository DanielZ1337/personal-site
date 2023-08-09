import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.svg";
import ThemeSwitcher from "@/components/theme-switcher";
import {ReactNode} from "react";
import LanguageSelector from "@/components/language-selector";
import {getDictionary} from "@/dictionaries/utils/dictionaries";

export default async function Header({lang}: { lang: string }) {
    const dict = await getDictionary(lang)

    const headerLinks = Object.keys(dict.navbar.links[0]).map(key => ({
        href: dict.navbar.links[0][key as keyof typeof dict.navbar.links[0]].anchor,
        text: dict.navbar.links[0][key as keyof typeof dict.navbar.links[0]].title
    }));

    if (typeof window === "undefined") {
        console.log("window is undefined")
    } else {
        console.log("window is defined")
    }

    return (
        <header className={"backdrop-blur-2xl fixed w-full shadow-md border-b items-center justify-center flex"}>
            <div className="flex items-center justify-between p-4 h-16 w-full" style={{
                width: "min(calc(100vw - 20px), 500px + 40vw)"
            }}>
                <Link href="/">
                    <Image src={logo} alt="Logo" className="w-8 h-8"/>
                </Link>
                <ul className="flex">
                    {headerLinks.map(({href, text}) => (
                        <li key={href}>
                            <NavLink href={href}>
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={"flex items-center gap-2"}>
                    {/*<Chip
                        prompt={
                            <>
                                Visit
                                <BsArrowRight/>
                            </>
                        }
                        link={siteConfig.links.github_repo}
                    >
                        <BsGithub/> Github
                    </Chip>*/}
                    <LanguageSelector/>
                    <ThemeSwitcher/>
                </div>
            </div>
        </header>
    )
}

interface NavLinkProps {
    readonly href: string
    readonly children: ReactNode
}

function NavLink({href, children}: NavLinkProps) {
    return (
        <Link href={href}
              className="text-accent-foreground hover:text-primary px-4 py-2">
            {children}
        </Link>
    )
}