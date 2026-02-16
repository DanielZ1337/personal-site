import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
	readonly tag: string
	readonly title: string
	readonly description: string
	readonly techStack: string[]
	readonly image?: StaticImageData
	readonly links: {
		readonly production?: string
		readonly github?: string
		readonly caseStudy?: string
	}
	readonly labels: {
		readonly live: string
		readonly code: string
		readonly caseStudy: string
	}
}

export default function ProjectCard({ tag, title, description, techStack, image, links, labels }: ProjectCardProps) {
	return (
		<div className='flex flex-col rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow h-full'>
			{image && (
				<div className='relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-muted'>
					<Image
						src={image}
						alt={title}
						fill
						className='object-cover'
						placeholder='blur'
						sizes='(min-width: 768px) 50vw, 100vw'
					/>
				</div>
			)}
			<span className='text-xs font-medium text-primary uppercase tracking-wider mb-2'>{tag}</span>
			<h3 className='text-xl font-semibold mb-2'>{title}</h3>
			<p className='text-muted-foreground text-sm leading-relaxed mb-4 flex-1'>{description}</p>
			<div className='flex flex-wrap gap-1.5 mb-4'>
				{techStack.map((tech) => (
					<span key={tech} className='px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground'>
						{tech}
					</span>
				))}
			</div>
			<div className='flex items-center gap-4 pt-3 border-t border-border'>
				{links.production && (
					<Link
						href={links.production}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline'
					>
						<ExternalLink className='w-3.5 h-3.5' />
						{labels.live}
					</Link>
				)}
				{links.github && (
					<Link
						href={links.github}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline'
					>
						<Github className='w-3.5 h-3.5' />
						{labels.code}
					</Link>
				)}
				{links.caseStudy && (
					<Link
						href={links.caseStudy}
						className='inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline'
					>
						{labels.caseStudy}
					</Link>
				)}
			</div>
		</div>
	)
}
