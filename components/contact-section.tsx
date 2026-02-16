import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import { siteConfig } from '@/lib/site'
import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function ContactSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='contact' className='py-20 px-6'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-4'>{dict.contact.heading}</h2>
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
				</div>
			</div>
		</section>
	)
}
