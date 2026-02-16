import { getDictionary } from '@/dictionaries/utils/dictionaries'
import { siteConfig } from '@/lib/site'
import Hero from '@/components/hero'
import ExperienceSection from '@/components/experience-section'
import Projects from '@/components/projects'
import SkillsSection from '@/components/skills-section'
import EducationSection from '@/components/education-section'
import ContactSection from '@/components/contact-section'
import SectionHeading from '@/components/section-heading'
import InViewWrapper from '@/components/in-view-wrapper'

export async function generateStaticParams() {
	return siteConfig.langs.map((lang) => ({ lang }))
}

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
	const dict = await getDictionary(lang)

	return (
		<main className='flex flex-col'>
			<Hero dict={dict} />
			<section id='about' className='py-20 px-6'>
				<InViewWrapper
					initial={{ opacity: 0, y: 20 }}
					whenInView={{ opacity: 1, y: 0 }}
					whenNotInView={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.5, ease: 'easeOut' }}
					className='max-w-3xl mx-auto'
				>
					<SectionHeading id='about' className='text-3xl font-bold mb-6'>{dict.about.heading}</SectionHeading>
					<p className='text-muted-foreground leading-relaxed text-lg'>{dict.about.body}</p>
				</InViewWrapper>
			</section>
			<ExperienceSection dict={dict} />
			<Projects dict={dict} />
			<SkillsSection dict={dict} />
			<EducationSection dict={dict} />
			<ContactSection dict={dict} />
		</main>
	)
}
