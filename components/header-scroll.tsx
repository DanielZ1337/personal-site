'use client'

import {useEffect, useState} from "react";
import {m} from "framer-motion";

export default function HeaderScroll({children}: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    return (
        <m.header
            initial={{borderBottom: '1px solid rgba(0,0,0,0)', boxShadow: 'none'}}
            animate={{borderBottom: scrollY > 0 ? '1px solid rgba(38,38,38,1)' : '1px solid rgba(0,0,0,0)', boxShadow: scrollY > 0 ? '0 0 10px rgba(0,0,0,0.5)' : 'none'}}


            className={'backdrop-blur-xl shadow-md border-b transition-all duration-300 fixed w-full items-center justify-center flex'}>
            {children}
        </m.header>
    )
}