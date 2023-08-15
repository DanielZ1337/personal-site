'use client'

import {useEffect, useState} from "react";
import {m} from "framer-motion";
import {useTheme} from "next-themes";

export default function HeaderScroll({children}: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);
    const {theme} = useTheme()

    useEffect(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    const ANIMATE_WHEN_DISTANCE_FROM_TOP = 0;

    return (
        <m.header
            initial={{borderBottom: '1px solid rgba(0,0,0,0)', boxShadow: 'none'}}
            animate={{borderBottom: scrollY > ANIMATE_WHEN_DISTANCE_FROM_TOP ? theme==="dark" ? '1px solid rgba(38,38,38,1)' : '1px solid rgba(20,20,20,0.05)' : '1px solid rgba(0,0,0,0)', boxShadow: scrollY > ANIMATE_WHEN_DISTANCE_FROM_TOP ? theme==="dark" ? '0 0 10px rgba(0,0,0,0.5)': '0 0 7px rgba(0,0,0,0.5)' : '0 0 0px rgba(0,0,0,0)'}}
            className={'backdrop-blur-xl dark:shadow-md shadow border-b transition-all duration-500 fixed w-full top-0 left-0 items-center justify-center flex z-20'}
        >
            {children}
        </m.header>
    )
}