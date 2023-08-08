import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.svg";
import ThemeSwitcher from "@/components/theme-switcher";
import {ReactNode} from "react";
import Chip from "@/components/chip";
import {siteConfig} from "@/lib/site";
import {BsArrowRight, BsGithub} from "react-icons/bs";

const headerLinks = [
    {
        href: "/#projects",
        text: "Projects"
    },
    {
        href: "/#about",
        text: "About"
    },
    {
        href: "/#contact",
        text: "Contact"
    },
    {
        href: "/#blog",
        text: "Blog"
    },
    {
        href: "/#resume",
        text: "Resume"
    }
]

export default function Header() {
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
                    <Chip
                        prompt={
                            <>
                                Visit
                                <BsArrowRight/>
                            </>
                        }
                        link={siteConfig.links.github_repo}
                    >
                        <BsGithub/> Github
                    </Chip>
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