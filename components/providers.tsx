'use client'

import {ThemeProvider} from 'next-themes'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {domMax, LazyMotion} from "framer-motion";

export default function Providers({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                <LazyMotion features={domMax} strict>
                    {children}
                </LazyMotion>
            </QueryClientProvider>
        </ThemeProvider>
    )
}