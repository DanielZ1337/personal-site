import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

export default function SkillsSection({ dict }: { readonly dict: Dictionary }) {
	return (
		<section id='skills' className='py-20 px-6'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold mb-2'>{dict.skills.heading}</h2>
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
			</div>
		</section>
	)
}
