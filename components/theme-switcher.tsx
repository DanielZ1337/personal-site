"use client"

import * as React from "react"
import {useEffect, useState} from "react"
import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"

import {Button} from "@/components/ui/button"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import useDictionary from "@/dictionaries/useDictionary";
import {useParams} from "next/navigation";
import {AnimatePresence, m} from "framer-motion";

export default function ThemeSwitcher() {
    const {setTheme, theme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), []);

    useEffect(() => {
        console.log(resolvedTheme)
    }, [resolvedTheme]);

    const {
        data,
        isLoading,
        error
    } = useDictionary(useParams().lang as string)

    if (!mounted || isLoading || !data || error) {
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className={"z-10"}>
                    <AnimatePresence>
                        {resolvedTheme === "light" && (
                            <m.div
                                initial={{rotate: 90, scale: 0}}
                                animate={{rotate: 0, scale: 1}}
                                exit={{rotate: 90, scale: 0}}
                                className={"absolute h-[1.2rem] w-[1.2rem]"}
                            >
                                <Sun
                                    className="h-[1.2rem] w-[1.2rem]"/>
                            </m.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {resolvedTheme === "dark" && (
                            <m.div
                                initial={{rotate: 90, scale: 0}}
                                animate={{rotate: 0, scale: 1}}
                                exit={{rotate: 90, scale: 0}}
                                className={"absolute h-[1.2rem] w-[1.2rem]"}
                            >
                                <Moon
                                    className="h-[1.2rem] w-[1.2rem]"/>
                            </m.div>
                        )}
                    </AnimatePresence>
                    <span className="sr-only">{data.navbar.toggleTheme}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" data-theme={theme} className={"group"}>
                <DropdownMenuItem
                    className={"group-data-[theme=light]:bg-primary/10 group-data-[theme=light]:text-foreground"}
                    onClick={() => setTheme("light")}>
                    {data.navbar.light}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={"group-data-[theme=dark]:bg-primary/10 group-data-[theme=dark]:text-foreground"}
                    onClick={() => setTheme("dark")}>
                    {data.navbar.dark}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={"group-data-[theme=system]:bg-primary/10 group-data-[theme=system]:text-foreground"}
                    onClick={() => setTheme("system")}>
                    {data.navbar.system}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
