import { getDictionary } from '@/dictionaries/utils/dictionaries'
import { siteConfig } from '@/lib/site'
import Welcome from '@/components/welcome'
import ContactForm from '@/components/contact-form'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import { NowPlaying } from '@/components/now-playing'

export async function generateStaticParams() {
	return siteConfig.langs.map((lang) => ({ lang }))
}

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
	const dict = await getDictionary(lang)
	const shuffle = (arr: typeof dict.skills) => [...arr].sort(() => Math.random() - 0.5)
	const skills = shuffle(dict.skills)

	return (
		<div className={'flex-1 flex-col flex text-center mt-16'}>
			<div className={'h-[100dvh] w-full top-0 left-0 -z-50 bg-background absolute'} />
			<Welcome dict={dict} />
			<Skills
				skills={skills}
				dict={dict}
			/>
			<Projects dict={dict} />
			<ContactForm dict={dict} />
		</div>
	)
}
