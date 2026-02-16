import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteConfig.url,
			lastModified: new Date(),
		},
		...siteConfig.langs.map((lang) => ({
			url: `${siteConfig.url}/${lang}`,
			lastModified: new Date(),
		})),
	]
}
