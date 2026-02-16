import { siteConfig } from '@/lib/site'
import { getDictionary } from '@/dictionaries/utils/dictionaries'
import Link from 'next/link'

export default async function Footer({ lang }: { lang: string }) {
	const dict = await getDictionary(lang)

	return (
		<footer className='border-t border-border py-8 px-6'>
			<div className='max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground'>
				<p>&copy; {new Date().getFullYear()} {siteConfig.creator}</p>
				<Link
					href={siteConfig.links.github_repo}
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-primary transition-colors'
				>
					{dict.footer.source}
				</Link>
			</div>
		</footer>
	)
}
