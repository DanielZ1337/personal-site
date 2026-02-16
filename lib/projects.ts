import itsdu from '@/public/images/projects/itsdu.png'
import type { StaticImageData } from 'next/image'

export interface ProjectConfig {
	image?: StaticImageData
	links: {
		production?: string
		github?: string
		caseStudy?: string
	}
	techStack: string[]
}

export const projects: Record<string, ProjectConfig> = {
	itsdu: {
		image: itsdu,
		links: {
			production: 'https://itsdu.danielz.dev',
			github: 'https://github.com/DanielZ1337/ITSDU',
		},
		techStack: ['Electron', 'React', 'TypeScript', 'LangChain', 'Qdrant', 'PostgreSQL'],
	},
	boulderklub: {
		links: {},
		techStack: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Docker'],
	},
	// finance: {
	// 	links: {
	// 		production: 'https://finance-index-trackers.vercel.app',
	// 		github: 'https://github.com/DanielZ1337/finance-index-trackers',
	// 	},
	// 	techStack: ['Next.js', 'TypeScript', 'Drizzle ORM', 'Vercel'],
	// },
	sdk: {
		links: {
			github: 'https://github.com/DanielZ1337/itslearning-sdk',
		},
		techStack: ['TypeScript', 'OAuth2', 'REST', 'tsup'],
	},
}
