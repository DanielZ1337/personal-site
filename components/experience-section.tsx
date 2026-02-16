import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

export default function ExperienceSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='experience' className='py-20 px-6'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold mb-12'>{dict.experience.heading}</h2>
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
			</div>
		</section>
	)
}
