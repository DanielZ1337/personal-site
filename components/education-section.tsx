import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export default function EducationSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='education' className='py-20 px-6'>
			<InViewWrapper
				initial={{ opacity: 0, y: 20 }}
				whenInView={{ opacity: 1, y: 0 }}
				whenNotInView={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='max-w-3xl mx-auto'
			>
				<SectionHeading id='education' className='text-3xl font-bold mb-10'>{dict.education.heading}</SectionHeading>
				<div className='space-y-6'>
					{dict.education.entries.map((entry) => (
						<div
							key={entry.degree}
							className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1'
						>
							<div>
								<h3 className='font-semibold'>{entry.degree}</h3>
								<p className='text-muted-foreground text-sm'>{entry.school}</p>
							</div>
							<p className='text-sm text-muted-foreground shrink-0'>
								{entry.period} &middot; {entry.location}
							</p>
						</div>
					))}
				</div>
			</InViewWrapper>
		</section>
	)
}
