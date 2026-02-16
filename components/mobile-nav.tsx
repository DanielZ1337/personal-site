'use client'

import Link from 'next/link'
import { Drawer } from 'vaul'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { useState } from 'react'
import { m } from 'framer-motion'
import useDictionary from '@/dictionaries/useDictionary'

export default function MobileNav({ lang }: { readonly lang: string }) {
	const [isOpen, setIsOpen] = useState(false)
	const { data: dict } = useDictionary(lang)

	if (!dict) return null

	const navLinks = [
		{ href: `/${lang}#about`, label: dict.nav.about },
		{ href: `/${lang}#experience`, label: dict.nav.experience },
		{ href: `/${lang}#projects`, label: dict.nav.projects },
		{ href: `/${lang}#skills`, label: dict.nav.skills },
		{ href: `/${lang}#contact`, label: dict.nav.contact },
		// { href: `/${lang}/youtube`, label: 'YouTube' },
		{ href: '/cv.pdf', label: dict.nav.cv, external: true },
	]

	const linkClass =
		'flex items-center gap-2 text-xl bg-primary/10 rounded-full px-4 py-2 active:bg-primary/20 hover:bg-primary/20 transition-colors w-full text-primary'

	return (
		<div className='block md:hidden'>
			<Drawer.Root open={isOpen} onOpenChange={setIsOpen} shouldScaleBackground>
				<Drawer.Trigger asChild>
					<m.div
						initial={{ opacity: 0, y: 50 }}
						animate={!isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ duration: 0.5 }}
						onClick={() => setIsOpen(!isOpen)}
						className='fixed bottom-0 left-0 right-0 flex justify-center items-center mx-auto w-20 z-50 mb-10 bg-muted-foreground/50 rounded-full'
					>
						<MdKeyboardDoubleArrowUp className='w-10 h-10 text-primary' />
					</m.div>
				</Drawer.Trigger>
				<Drawer.Portal>
					<Drawer.Overlay className='fixed inset-0 bg-black/40 z-50' />
					<Drawer.Content className='bg-card flex flex-col rounded-t-[10px] h-fit mt-96 fixed bottom-0 left-0 right-0 z-50'>
						<div className='p-4 rounded-t-[10px] flex-1'>
							<div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-muted mb-8' />
							<div className='flex flex-col gap-2 justify-center items-center'>
								{navLinks.map(({ href, label, external }) => (
									<Link
										key={href}
										href={href}
										className={linkClass}
										target={external ? '_blank' : undefined}
										rel={external ? 'noopener noreferrer' : undefined}
										onClick={() => setIsOpen(false)}
									>
										{label}
									</Link>
								))}
							</div>
						</div>
					</Drawer.Content>
				</Drawer.Portal>
			</Drawer.Root>
		</div>
	)
}
