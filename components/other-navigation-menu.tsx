'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn, shouldOpenInNewTab } from "@/lib/utils"
import { Dictionary } from "@/dictionaries/utils/dictionary-type"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface OtherNavigationMenuProps {
    // @ts-ignore
    readonly navbarOthers: Dictionary["navbar"]["others"]
    // @ts-ignore
    readonly othersText: Dictionary["text"]["others"]
}

export default function OtherNavigationMenu({ navbarOthers, othersText }: OtherNavigationMenuProps) {

    const pathname = usePathname()

    return (
        <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{othersText}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className={"flex flex-col gap-2"}>
                            {Object.entries(navbarOthers[0]).map(([key, value]) => (
                                // @ts-ignore
                                <li key={value.anchor}>
                                    <NavigationMenuLink
                                        // @ts-ignore
                                        active={pathname === value.anchor}
                                        // @ts-ignore
                                        target={shouldOpenInNewTab(value.anchor) ? "_blank" : '_self'}
                                        // @ts-ignore
                                        rel={shouldOpenInNewTab(value.anchor) ? "noopener noreferrer" : undefined}
                                        // @ts-ignore
                                        className={cn("group text-accent-foreground hover:text-primary", pathname === value.anchor && "text-primary underline")}
                                        asChild
                                    >
                                        {/* @ts-ignore */}
                                        <Link href={value.anchor}>
                                            {/* @ts-ignore */}
                                            {value.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
} 