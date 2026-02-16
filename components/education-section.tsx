import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

export default function EducationSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='education' className='py-20 px-6'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold mb-10'>{dict.education.heading}</h2>
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
			</div>
		</section>
	)
}
