import Providers from '@/components/providers'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { siteConfig } from '@/lib/site'
import ScrollToTop from '@/components/scroll-to-top'
import MobileNav from '@/components/mobile-nav'

const inter = Inter({ subsets: ['latin'] })

export function getStaticPaths() {
	return {
		paths: siteConfig.langs.map((lang) => ({ params: { lang } })),
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
		default: 'Daniel Bermann Schmidt \u2014 Software Engineer',
	},
	icons: [
		{ rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
		{ rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
		{ rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
		{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
		{ rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
		{ rel: 'manifest', url: '/manifest.json' },
	],
	description: siteConfig.description,
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		siteName: siteConfig.title,
		title: 'Daniel Bermann Schmidt \u2014 Software Engineer',
		description: siteConfig.description,
		images: { url: '/og.png', width: 1200, height: 630 },
	},
	twitter: {
		title: 'Daniel Bermann Schmidt \u2014 Software Engineer',
		description: siteConfig.description,
		images: { url: '/og.png', width: 1200, height: 630, alt: siteConfig.title },
		card: 'summary_large_image',
	},
	authors: [
		{ name: siteConfig.creator, url: siteConfig.links.github },
		{ name: siteConfig.creator, url: siteConfig.links.linkedin },
	],
	other: {
		'theme-color': '#000000',
		'msapplication-TileColor': '#000000',
	},
}

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode
	params: { lang: string }
}) {
	return (
		<html lang={lang} suppressHydrationWarning>
			<body className={cn('min-h-[100dvh] font-sans antialiased leading-6', inter.className)}>
				<Providers>
					<div className='relative flex min-h-[100dvh] flex-col'>
						<Header lang={lang} />
						<MobileNav lang={lang} />
						<div className='flex-1 flex flex-col mt-16'>{children}</div>
						<Footer lang={lang} />
					</div>
					<ScrollToTop />
				</Providers>
			</body>
		</html>
	)
}
