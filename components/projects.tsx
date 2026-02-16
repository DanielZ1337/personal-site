import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import ProjectCard from '@/components/project-card'
import { projects } from '@/lib/projects'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export default function Projects({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='projects' className='py-20 px-6'>
			<InViewWrapper
				initial={{ opacity: 0, y: 20 }}
				whenInView={{ opacity: 1, y: 0 }}
				whenNotInView={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='max-w-5xl mx-auto'
			>
				<SectionHeading id='projects' className='text-3xl font-bold mb-2'>{dict.projects.heading}</SectionHeading>
				<p className='text-muted-foreground mb-10'>{dict.projects.subtitle}</p>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{dict.projects.items.map((item) => {
						const config = projects[item.key]
						if (!config) return null
						return (
							<ProjectCard
								key={item.key}
								tag={item.tag}
								title={item.title}
								description={item.description}
								techStack={config.techStack}
								image={config.image}
								links={config.links}
								labels={dict.projects.labels}
							/>
						)
					})}
				</div>
			</InViewWrapper>
		</section>
	)
}
