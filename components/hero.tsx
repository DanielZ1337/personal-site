import Image from 'next/image'
import avatar from '@/public/avatar.jpg'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import { MapPin } from 'lucide-react'
import InViewWrapper from './in-view-wrapper'
import logo from '@/public/logo_old.svg'
import { NowPlaying } from './now-playing'

export default function Hero({ dict }: { readonly dict: Dictionary }) {
	return (
		<section className='flex flex-col items-center justify-center min-h-[85vh] px-6 text-center'>
			<div className={'relative md:w-80 md:h-80 w-52 h-52 drop-shadow-xl mb-8'}>
				<InViewWrapper
					initial={{ opacity: 0 }}
					whenInView={{ opacity: 1 }}
					whenNotInView={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Image
						className='rounded-full object-cover'
						placeholder='blur'
						src={avatar}
						alt={siteConfig.creator}
						fill
						sizes={'100%'}
						priority
					/>
					<div className={'absolute bottom-0 right-0 flex justify-center items-center'}>
						<Image
							src={logo}
							className={'absolute md:p-6 p-3.5 object-contain'}
							alt={siteConfig.title}
							width={200}
							height={200}
						/>
						<div className={'w-full h-full bg-black md:p-10 p-6 rounded-full'} />
					</div>
					<div className={'absolute md:bottom-0 md:right-16 right-10 -bottom-1 flex justify-center items-center'}>
						<NowPlaying />
					</div>
				</InViewWrapper>
			</div>
			<h1 className='text-4xl md:text-5xl font-bold tracking-tight'>{siteConfig.creator}</h1>
			<p className='text-xl md:text-2xl text-muted-foreground mt-2'>{dict.hero.title}</p>
			<p className='max-w-2xl text-lg text-muted-foreground mt-6 text-balance leading-relaxed'>{dict.hero.tagline}</p>
			<div className='flex items-center gap-4 mt-6 text-sm text-muted-foreground'>
				<span className='flex items-center gap-1.5'>
					<MapPin className='w-4 h-4' />
					{dict.hero.location}
				</span>
				<span className='w-1.5 h-1.5 rounded-full bg-green-500' />
				<span className='text-green-600 dark:text-green-400 font-medium'>{dict.hero.availability}</span>
			</div>
			<div className='flex items-center gap-4 mt-8'>
				<Link
					href='/cv.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors'
				>
					{dict.hero.cta.cv}
				</Link>
				<Link
					href='#contact'
					className='inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent transition-colors'
				>
					{dict.hero.cta.contact}
				</Link>
			</div>
		</section>
	)
}
