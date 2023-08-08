import Link from "next/link";
import Image from "next/image";
import logo from "@/public/favicon.svg";
import ThemeSwitcher from "@/components/theme-switcher";
import {ReactNode} from "react";

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
    }
]

export default function Header() {
    return (
        <header className={"backdrop-blur-2xl fixed w-full shadow-md border-b"}>
            <div className="flex items-center justify-between max-w-5xl mx-auto p-4 h-16">
                <Link href="/">
                    <Image src={logo} alt="Logo" className="w-8 h-8"/>
                </Link>
                <div className="flex items-center space-x-4">
                    {headerLinks.map(({href, text}) => (
                        <NavLink href={href} key={href}>
                            {text}
                        </NavLink>
                    ))}
                </div>
                <div>
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
              className="font-semibold text-accent-foreground hover:text-muted-foreground">
            {children}
        </Link>
    )
}