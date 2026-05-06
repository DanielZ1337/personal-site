import type { Dictionary } from '@/dictionaries/utils/dictionary-type'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'
import { getLogoAccentColor } from '@/lib/logo-accent'
import { CalendarDays, ExternalLink, MapPin } from 'lucide-react'
import Image from 'next/image'
import type { CSSProperties } from 'react'

function getInitials(company: string) {
	return company
		.split(/\s+/)
		.filter(Boolean)
		.slice(0, 2)
		.map((word) => word[0])
		.join('')
		.toUpperCase()
}

function getAccentColor(role: Dictionary['experience']['roles'][number]) {
	return getLogoAccentColor(role.logoSrc) ?? 'hsl(var(--primary))'
}

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
				<div className='relative space-y-10 before:absolute before:left-5 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-border sm:before:left-6'>
					{dict.experience.roles.map((role) => {
						const accentColor = getAccentColor(role)
						const initials = role.logoInitials ?? getInitials(role.company)
						const accentStyle = { '--experience-accent': accentColor } as CSSProperties

						return (
							<article key={`${role.company}-${role.title}`} className='group/role relative pl-14 sm:pl-20' style={accentStyle}>
								<div
									className='absolute left-[13px] top-8 z-10 h-4 w-4 rounded-full bg-[var(--experience-accent)] ring-8 ring-[color:var(--experience-accent)]/15 transition-transform duration-300 group-hover/role:scale-110 sm:left-[17px]'
								/>
								<div
									className='relative overflow-hidden rounded-xl border border-border bg-card/90 shadow-sm transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-1 before:bg-[var(--experience-accent)] hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--experience-accent)_30%,transparent)] hover:shadow-md dark:bg-card/70'
								>
									<div className='bg-[linear-gradient(90deg,color-mix(in_srgb,var(--experience-accent)_14%,transparent),transparent)] px-6 pb-5 pt-6'>
										<div className='flex items-start gap-3 sm:gap-4'>
											<div className='flex w-[4.25rem] shrink-0 items-start justify-center pt-0.5 sm:w-20' aria-hidden='true'>
												{role.logoSrc ? (
													<Image
														src={role.logoSrc}
														alt=''
														width={80}
														height={56}
														className='h-auto max-h-14 w-auto max-w-full object-contain'
														sizes='80px'
													/>
												) : (
													<div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm'>
														{initials}
													</div>
												)}
											</div>
											<h3 className='min-w-0 flex-1 pt-1 text-xl font-semibold leading-tight'>
												{role.companyUrl ? (
													<a
														href={role.companyUrl}
														target='_blank'
														rel='noopener noreferrer'
														aria-label={`${role.company} website`}
														className='rounded transition-colors group hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
													>
														{role.company}
														<span className='ml-1.5 inline-flex align-middle group-hover:text-primary text-muted-foreground'>
															<ExternalLink className='h-3.5 w-3.5' aria-hidden='true' />
														</span>
													</a>
												) : (
													role.company
												)}
											</h3>
											{role.status && (
												<span className='shrink-0 rounded-full border px-3 py-1 text-xs font-medium text-[var(--experience-accent)] [background:color-mix(in_srgb,var(--experience-accent)_10%,transparent)] [border-color:color-mix(in_srgb,var(--experience-accent)_28%,transparent)]'>
													{role.status}
												</span>
											)}
										</div>
										<div className='mt-3 sm:mt-2 sm:pl-24'>
											<p className='text-sm font-medium text-foreground/85'>{role.title}</p>
											<div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground'>
												<span className='inline-flex items-center gap-1'>
													<CalendarDays className='h-3 w-3 shrink-0' aria-hidden='true' />
													{role.period}
												</span>
												<span className='inline-flex items-center gap-1'>
													<MapPin className='h-3 w-3 shrink-0' aria-hidden='true' />
													{role.location}
												</span>
											</div>
										</div>
									</div>

									<div className='space-y-5 px-6 pb-6 pt-5'>
										<ul className='space-y-3 sm:pl-24'>
											{role.bullets.map((bullet) => (
												<li key={bullet} className='flex gap-3 text-sm leading-relaxed text-muted-foreground'>
													<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--experience-accent)]' />
													<span>{bullet}</span>
												</li>
											))}
										</ul>

										{role.techStack && role.techStack.length > 0 && (
											<div className='flex flex-wrap gap-1.5 sm:pl-24'>
												{role.techStack.map((tech) => (
													<span key={tech} className='rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground'>
														{tech}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							</article>
						)
					})}
				</div>
			</InViewWrapper>
		</section>
	)
}
