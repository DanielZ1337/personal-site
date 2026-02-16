import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export default function ExperienceSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='experience' className='py-20 px-6'>
			<InViewWrapper
				initial={{ opacity: 0, y: 20 }}
				whenInView={{ opacity: 1, y: 0 }}
				whenNotInView={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='max-w-3xl mx-auto'
			>
				<SectionHeading id='experience' className='text-3xl font-bold mb-12'>{dict.experience.heading}</SectionHeading>
				<div className='space-y-12'>
					{dict.experience.roles.map((role) => (
						<div key={`${role.company}-${role.title}`} className='relative pl-6 border-l-2 border-border'>
							<div className='absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary' />
							<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3'>
								<div>
									<h3 className='text-xl font-semibold'>{role.company}</h3>
									<p className='text-muted-foreground'>{role.title}</p>
								</div>
								<p className='text-sm text-muted-foreground shrink-0'>
									{role.period} &middot; {role.location}
								</p>
							</div>
							<ul className='mt-4 space-y-3'>
								{role.bullets.map((bullet, i) => (
									<li key={i} className='text-muted-foreground leading-relaxed text-sm flex gap-2'>
										<span className='text-primary mt-0.5 shrink-0'>&bull;</span>
										<span>{bullet}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</InViewWrapper>
		</section>
	)
}
