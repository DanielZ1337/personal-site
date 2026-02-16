import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import { Mail, Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export default function ContactSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='contact' className='py-20 px-6'>
			<InViewWrapper
				initial={{ opacity: 0, y: 20 }}
				whenInView={{ opacity: 1, y: 0 }}
				whenNotInView={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='max-w-3xl mx-auto text-center'
			>
				<SectionHeading id='contact' className='text-3xl font-bold mb-4 justify-center'>{dict.contact.heading}</SectionHeading>
				<p className='text-muted-foreground mb-8'>{dict.contact.body}</p>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
					<Link
						href={siteConfig.links.emailto}
						className='inline-flex items-center gap-2 text-primary hover:underline'
					>
						<Mail className='w-5 h-5' />
						{dict.contact.email}
					</Link>
					<Link
						href={siteConfig.links.linkedin}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-primary hover:underline'
					>
						<Linkedin className='w-5 h-5' />
						LinkedIn
					</Link>
					<Link
						href={siteConfig.links.github}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-primary hover:underline'
					>
						<Github className='w-5 h-5' />
						GitHub
					</Link>
					{/* <Link
						href={siteConfig.links.twitter}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-primary hover:underline'
					>
						<Twitter className='w-5 h-5' />
						X / Twitter
					</Link>
					<Link
						href={siteConfig.links.youtube}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-primary hover:underline'
					>
						<Youtube className='w-5 h-5' />
						YouTube
					</Link> */}
				</div>
			</InViewWrapper>
		</section>
	)
}
