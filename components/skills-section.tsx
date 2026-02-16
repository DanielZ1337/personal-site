import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export default function SkillsSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='skills' className='py-20 px-6'>
			<InViewWrapper
				initial={{ opacity: 0, y: 20 }}
				whenInView={{ opacity: 1, y: 0 }}
				whenNotInView={{ opacity: 0, y: 20 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className='max-w-3xl mx-auto'
			>
				<SectionHeading id='skills' className='text-3xl font-bold mb-2'>{dict.skills.heading}</SectionHeading>
				<p className='text-muted-foreground mb-10'>{dict.skills.subtitle}</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
					{dict.skills.categories.map((category) => (
						<div key={category.label}>
							<h3 className='text-lg font-semibold mb-3'>{category.label}</h3>
							<div className='flex flex-wrap gap-2'>
								{category.items.map((item) => (
									<span
										key={item}
										className='px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground'
									>
										{item}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</InViewWrapper>
		</section>
	)
}
