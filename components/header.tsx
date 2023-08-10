import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.svg";
import ThemeSwitcher from "@/components/theme-switcher";
import {ReactNode} from "react";
import LanguageSelector from "@/components/language-selector";
import {getDictionary} from "@/dictionaries/utils/dictionaries";
import HeaderScroll from "@/components/header-scroll";

export default async function Header({lang}: { lang: string }) {
    const dict = await getDictionary(lang)

    const headerLinks = Object.keys(dict.navbar.links[0]).map(key => ({
        href: dict.navbar.links[0][key as keyof typeof dict.navbar.links[0]].anchor,
        text: dict.navbar.links[0][key as keyof typeof dict.navbar.links[0]].title
    }));

    return (
        <HeaderScroll>
            <div className="flex items-center justify-between p-4 h-16 w-full" style={{
                width: "min(calc(100vw - 20px), 500px + 40vw)"
            }}>
                <Link href="/">
                    <Image src={logo} alt="Logo" className="w-8 h-8"/>
                </Link>
                <ul className="flex left-0 absolute w-full text-center items-center justify-center">
                    {headerLinks.map(({href, text}) => (
                        <li key={href} className={"px-4 py-2"}>
                            <NavLink href={href}>
                                <p className={"relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-primary before:group-hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"}>{text}</p>
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
        </HeaderScroll>
    )
}

interface NavLinkProps {
    readonly href: string
    readonly children: ReactNode
}

function NavLink({href, children}: NavLinkProps) {
    return (
        <Link href={href}
              className="group text-accent-foreground hover:text-primary">
            {children}
        </Link>
    )
}