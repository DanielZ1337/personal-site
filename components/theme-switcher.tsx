"use client"

import * as React from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import useDictionary from "@/dictionaries/useDictionary";

export default function ThemeSwitcher() {
    const {setTheme, theme} = useTheme()
    const {data, error} = useDictionary(typeof window === "undefined" ? undefined : window.location.href.split("/")[3])

    if (!data) {
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">{data.navbar.toggleTheme}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-theme={theme} className={"group"}>
                <DropdownMenuItem className={"group-data-[theme=light]:bg-primary/10 group-data-[theme=light]:text-foreground"}
                                  onClick={() => setTheme("light")}>
                    {data.navbar.light}
                </DropdownMenuItem>
                <DropdownMenuItem className={"group-data-[theme=dark]:bg-primary/10 group-data-[theme=dark]:text-foreground"} onClick={() => setTheme("dark")}>
                    {data.navbar.dark}
                </DropdownMenuItem>
                <DropdownMenuItem className={"group-data-[theme=system]:bg-primary/10 group-data-[theme=system]:text-foreground"}
                                  onClick={() => setTheme("system")}>
                    {data.navbar.system}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
