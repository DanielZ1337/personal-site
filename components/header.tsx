import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/favicon.svg'
import ThemeSwitcher from '@/components/theme-switcher'
import LanguageSelector from '@/components/language-selector'
import { getDictionary } from '@/dictionaries/utils/dictionaries'
import HeaderScroll from '@/components/header-scroll'

export default async function Header({ lang }: { lang: string }) {
	const dict = await getDictionary(lang)

	const navLinks = [
		{ href: '#about', label: dict.nav.about },
		{ href: '#experience', label: dict.nav.experience },
		{ href: '#projects', label: dict.nav.projects },
		{ href: '#skills', label: dict.nav.skills },
		{ href: '#contact', label: dict.nav.contact },
	]

	return (
		<HeaderScroll>
			<div
				className='items-center justify-between p-4 h-16 w-full hidden md:flex'
				style={{ width: 'min(calc(100vw - 20px), 600px + 40vw)' }}
			>
				<Link href={`/${lang}`} className='z-10'>
					<Image src={logo} alt='Logo' className='w-8 h-8 text-foreground transition-colors' />
				</Link>
				<nav className='flex items-center gap-1 absolute left-0 w-full justify-center'>
					{navLinks.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className='px-3 py-2 text-sm text-accent-foreground hover:text-primary transition-colors relative group'
						>
							{label}
							<span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left' />
						</Link>
					))}
				</nav>
				<div className='flex items-center gap-2 z-10'>
					<Link
						href='/cv.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
					>
						{dict.nav.cv}
					</Link>
					<LanguageSelector />
					<ThemeSwitcher />
				</div>
			</div>
			<div className='flex items-center justify-between p-4 h-16 w-full md:hidden'>
				<Link href={`/${lang}`} className='z-10'>
					<Image src={logo} alt='Logo' className='w-8 h-8' />
				</Link>
				<div className='flex items-center gap-2'>
					<LanguageSelector />
					<ThemeSwitcher />
				</div>
			</div>
		</HeaderScroll>
	)
}
