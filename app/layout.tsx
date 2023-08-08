import Providers from '@/components/providers'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {cn} from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {siteConfig} from "@/lib/site";

const inter = Inter({subsets: ['latin']})

if (process.env.NODE_ENV === 'development') {
    siteConfig.url = 'http://localhost:3000'
}

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        template: `%s | ${siteConfig.title}`,
        default: siteConfig.title,
    },
    
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
        },
        creator: siteConfig.links.twitter,
        card: "summary_large_image"
    },
    creator: siteConfig.links.twitter,
    authors: [
        {
            name: siteConfig.creator,
            url: siteConfig.links.twitter,
        }
    ],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn('min-h-[100dvh] font-sans antialiased', inter.className)}>
        <Providers>
            <div className="relative flex min-h-[100dvh] flex-col">
                <Header/>
                <div className="flex-1 mt-16">{children}</div>
                <Footer/>
            </div>
        </Providers>
        </body>
        </html>
    )
}
