'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {cn, shouldOpenInNewTab} from "@/lib/utils";
import {Dictionary} from "@/dictionaries/utils/dictionary-type";
import {usePathname} from "next/navigation";
import Link from "next/link";

interface OtherNavigationMenuProps {
    readonly navbarOthers: Dictionary["navbar"]["others"]
    readonly othersText: Dictionary["text"]["others"]
}

export default function OtherNavigationMenu({navbarOthers, othersText}: OtherNavigationMenuProps) {

    const pathname = usePathname()

    return (
        <NavigationMenu delayDuration={0}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{othersText}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className={"flex flex-col gap-2"}>
                            {Object.entries(navbarOthers[0]).map(([key, value]) => (
                                <li key={value.anchor}>
                                    <NavigationMenuLink
                                        active={pathname === value.anchor}
                                        target={shouldOpenInNewTab(value.anchor) ? "_blank" : '_self'}
                                        rel={shouldOpenInNewTab(value.anchor) ? "noopener noreferrer" : undefined}
                                        className={cn("group text-accent-foreground hover:text-primary", pathname === value.anchor && "text-primary underline")}
                                        asChild
                                    >

                                        <Link href={value.anchor}>
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