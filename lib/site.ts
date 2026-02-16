export const siteConfig = {
	title: 'Daniel Bermann Schmidt',
	creator: 'Daniel Bermann Schmidt',
	url: 'https://danielz.dev',
	ogImage: 'https://danielz.dev/og.png',
	description:
		'Backend-focused software engineer with production experience in C#/.NET, TypeScript, and Azure. Based in Odense, Denmark.',
	links: {
		github: 'https://github.com/DanielZ1337',
		linkedin: 'https://www.linkedin.com/in/daniel-bermann-schmidt',
		email: 'daniel@danielz.dev',
		emailto: 'mailto:daniel@danielz.dev',
		github_repo: 'https://github.com/DanielZ1337/personal-site',
		twitter: 'https://twitter.com/danielz1337',
		youtube: 'https://www.youtube.com/@danielz1337tm',
	},
	langs: ['en', 'da'] as const,
	defaultLang: 'en' as const,
}

export type SiteConfig = typeof siteConfig
export type Languages = (typeof siteConfig)['langs'][number]
