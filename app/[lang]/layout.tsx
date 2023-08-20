import Providers from '@/components/providers'
import '@/app/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {cn} from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {siteConfig} from "@/lib/site";
import {Toaster} from "@/components/ui/toaster";
import ScrollToTop from "@/components/scroll-to-top";
import SideNavSocials from "@/components/sidenav-socials";
import {Suspense} from "react";
import MobileNav from "@/components/mobile-nav";

const inter = Inter({subsets: ['latin']})

export function getStaticPaths() {
    return {
        paths: siteConfig.langs.map((lang) => ({params: {lang}})),
        fallback: false,
    }
}

if (process.env.NODE_ENV === 'development') {
    siteConfig.url = 'http://localhost:3000'
}

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        template: `%s | ${siteConfig.title}`,
        default: siteConfig.title,
    },
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: new URL('/favicon.ico', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: new URL('/favicon-32x32.png', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: new URL('/favicon-16x16.png', siteConfig.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/svg+xml',
            url: new URL('/favicon.svg', siteConfig.url).toString(),
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: new URL('/apple-touch-icon.png', siteConfig.url).toString(),
        },
        {
            rel: 'manifest',
            url: new URL('/manifest.json', siteConfig.url).toString(),
        },
        {
            rel: 'mask-icon',
            url: new URL('/safari-pinned-tab.svg', siteConfig.url).toString(),
            color: '#000000',
        },
    ],
    description: 'Personal website of @danielz1337',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        siteName: siteConfig.title,
        title: siteConfig.title,
        description: siteConfig.description,
        images: {
            url: new URL('/og.png', siteConfig.url).toString(),
            width: 1200,
            height: 630,
        },
    },
    twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
        site: siteConfig.links.twitter,
        images: {
            url: new URL('/og.png', siteConfig.url).toString(),
            width: 1200,
            height: 630,
            alt: siteConfig.title,
        },
        creator: siteConfig.links.twitter,
        card: "summary_large_image"
    },
    creator: siteConfig.links.twitter,
    authors: [
        {
            name: siteConfig.creator,
            url: siteConfig.links.twitter,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.github,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.linkedin,
        },
        {
            name: siteConfig.creator,
            url: siteConfig.links.email,
        },
    ],
    other: {
        'theme-color': '#000000',
        'msapplication-TileColor': '#000000',
        'msapplication-config': new URL('/browserconfig.xml', siteConfig.url).toString(),
    }
}

export default function RootLayout({
                                       children, params: {lang},
                                   }: {
    children: React.ReactNode, params: { lang: string }
}) {
    return (
        <html lang={lang} suppressHydrationWarning>
        <body className={cn('min-h-[100dvh] font-sans antialiased leading-6', inter.className)}>
        <Suspense>
            <Providers>
                <div className="relative flex min-h-[100dvh] flex-col">
                    <Header lang={lang}/>
                    <MobileNav lang={lang}/>
                    <div className="flex-1 flex-col flex mt-16">{children}</div>
                    <Footer lang={lang}/>
                </div>
                <Toaster/>
                <ScrollToTop/>
                <SideNavSocials/>
            </Providers>
        </Suspense>
        </body>
        </html>
    )
}
