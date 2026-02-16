import { getDictionary } from '@/dictionaries/utils/dictionaries'
import { siteConfig } from '@/lib/site'
import Hero from '@/components/hero'
import ExperienceSection from '@/components/experience-section'
import Projects from '@/components/projects'
import SkillsSection from '@/components/skills-section'
import EducationSection from '@/components/education-section'
import ContactSection from '@/components/contact-section'

export async function generateStaticParams() {
	return siteConfig.langs.map((lang) => ({ lang }))
}

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
	const dict = await getDictionary(lang)

	return (
		<main className='flex flex-col'>
			<Hero dict={dict} />
			<section id='about' className='py-20 px-6'>
				<div className='max-w-3xl mx-auto'>
					<h2 className='text-3xl font-bold mb-6'>{dict.about.heading}</h2>
					<p className='text-muted-foreground leading-relaxed text-lg'>{dict.about.body}</p>
				</div>
			</section>
			<ExperienceSection dict={dict} />
			<Projects dict={dict} />
			<SkillsSection dict={dict} />
			<EducationSection dict={dict} />
			<ContactSection dict={dict} />
		</main>
	)
}
