export interface Dictionary {
	meta: {
		title: string
		description: string
	}
	nav: {
		about: string
		experience: string
		projects: string
		skills: string
		contact: string
		cv: string
		language: string
		theme: string
		light: string
		dark: string
		system: string
		toggleTheme: string
	}
	languages: {
		da: string
		en: string
	}
	hero: {
		title: string
		tagline: string
		location: string
		availability: string
		cta: {
			cv: string
			contact: string
		}
	}
	about: {
		heading: string
		body: string
	}
	experience: {
		heading: string
		roles: {
			company: string
			title: string
			period: string
			location: string
			bullets: string[]
		}[]
	}
	projects: {
		heading: string
		subtitle: string
		items: {
			key: string
			tag: string
			title: string
			description: string
		}[]
		labels: {
			live: string
			code: string
			caseStudy: string
		}
	}
	skills: {
		heading: string
		subtitle: string
		categories: {
			label: string
			items: string[]
		}[]
	}
	education: {
		heading: string
		entries: {
			degree: string
			school: string
			period: string
			location: string
		}[]
	}
	contact: {
		heading: string
		body: string
		email: string
	}
	footer: {
		source: string
	}
	errors: {
		notFound: {
			title: string
			message: string
		}
	}
}
