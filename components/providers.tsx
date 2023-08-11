'use client'

import {ThemeProvider} from 'next-themes'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {domMax, LazyMotion} from "framer-motion";

export default function Providers({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <LazyMotion features={domMax} strict>
                    {children}
                </LazyMotion>
            </ThemeProvider>
        </QueryClientProvider>
    )
}