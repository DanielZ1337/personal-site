'use client'

import {useEffect, useState} from "react";
import {m} from "framer-motion";
import {useTheme} from "next-themes";

export default function HeaderScroll({children}: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);
    const {theme} = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);
    return (
        <m.header
            initial={{borderBottom: '1px solid rgba(0,0,0,0)', boxShadow: 'none'}}
            animate={{borderBottom: scrollY > 0 ? theme==="dark" ? '1px solid rgba(38,38,38,1)' : '1px solid rgba(20,20,20,0.05)' : '1px solid rgba(0,0,0,0)', boxShadow: scrollY > 0 ? theme==="dark" ? '0 0 10px rgba(0,0,0,0.5)': '0 0 7px rgba(0,0,0,0.5)' : 'none'}}


            className={'backdrop-blur-xl dark:shadow-md shadow border-b transition-all duration-500 fixed w-full items-center justify-center flex'}>
            {children}
        </m.header>
    )
}