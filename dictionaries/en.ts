import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

const en: Dictionary = {
	meta: {
		title: 'Daniel Bermann Schmidt — Software Engineer',
		description:
			'Backend-focused software engineer with production experience in C#/.NET, TypeScript, and Azure. Based in Odense, Denmark.',
	},
	nav: {
		about: 'About',
		experience: 'Experience',
		projects: 'Projects',
		skills: 'Skills',
		contact: 'Contact',
		cv: 'CV',
		language: 'Language',
		theme: 'Theme',
		light: 'Light',
		dark: 'Dark',
		system: 'System',
		toggleTheme: 'Toggle theme',
	},
	languages: {
		da: 'Danish',
		en: 'English',
	},
	hero: {
		title: 'Software Engineer',
		tagline:
			'Backend-focused engineer with production experience in C#/.NET and TypeScript. I build systems that work\u2009—\u2009from IoT telemetry pipelines to multi-tenant enterprise apps.',
		location: 'Odense, Denmark',
		availability: 'Available immediately',
		cta: {
			cv: 'Download CV',
			contact: 'Get in touch',
		},
	},
	about: {
		heading: 'About',
		body: "Recently graduated software engineer with 2 years of production experience from EFFIMAT, where I built event-driven monitoring platforms, architected Azure telemetry pipelines processing ~40K data points daily, and delivered multi-tenant apps with enterprise SSO. I also taught cloud computing at SDU, guiding 140+ students through GCP, Docker, and Terraform. I work best when I can own a problem end-to-end and ship something that matters.",
	},
	experience: {
		heading: 'Experience',
		roles: [
			{
				company: 'EFFIMAT',
				title: 'Student Software Engineer / Intern',
				period: 'Nov 2023 \u2014 Jan 2026',
				location: 'Odense',
				bullets: [
					'Built event-driven IoT monitoring platform in C#/.NET that replaced manual Excel tracking, enabling the service department to manage 140+ incidents with status history, automated notifications, and PDF report generation.',
					'Architected telemetry pipeline via Azure IoT Hub and Functions, processing ~40K data points daily with zero unplanned downtime since launch.',
					'Delivered multi-tenant sales configurator (TypeScript, React, PostgreSQL) with enterprise SSO via Microsoft Entra ID, OAuth2/OIDC, and application-layer RBAC.',
					'Owned CI/CD pipelines, Docker containerization, and Azure infrastructure (App Services, DNS/SSL, custom domains) across multiple environments.',
				],
			},
			{
				company: 'University of Southern Denmark',
				title: 'Teaching Assistant \u2014 Cloud Computing',
				period: 'Aug 2025 \u2014 Jan 2026',
				location: 'Odense & S\u00f8nderborg',
				bullets: [
					'Guided 140+ students through cloud architecture: Google Cloud Platform (GCP), Docker, Terraform, and infrastructure-as-code patterns.',
					'Created and graded hands-on exercises covering containerization, cloud deployment with Terraform, service orchestration on GCP, and cloud-native application design.',
				],
			},
		],
	},
	projects: {
		heading: 'Projects',
		subtitle: 'Selected work \u2014 open source and production.',
		items: [
			{
				key: 'itsdu',
				tag: 'Desktop App \u00b7 Open Source',
				title: 'ITSDU',
				description:
					"Cross-platform desktop client for itslearning, replacing a slow web interface for university students. Integrates OAuth2 authentication, REST API consumption, and RAG-powered document search using LangChain and Qdrant.",
			},
			{
				key: 'boulderklub',
				tag: 'Bachelor Thesis \u00b7 Full-Stack',
				title: 'Odense Boulderklub Platform',
				description:
					'Cloud-native community platform for a 200+ member climbing club. Replaced Facebook dependency with feeds, opening hours management, and event coordination. Designed with vendor-neutral deployment as a core constraint.',
			},
			{
				key: 'finance',
				tag: 'Data Engineering \u00b7 Side Project',
				title: 'Finance Index Trackers',
				description:
					'Automated collector for the CNN Fear & Greed Index. Ingests financial sentiment data on a schedule, stores historical snapshots, and visualizes trends over time.',
			},
			{
				key: 'sdk',
				tag: 'Library \u00b7 Open Source',
				title: 'itslearning SDK',
				description:
					"Type-safe TypeScript SDK for itslearning's REST API. Modular architecture with dedicated classes per API domain\u2009\u2014\u2009Calendar, Courses, Messages, Notifications\u2009\u2014\u2009with automated OAuth2 token management.",
			},
		],
		labels: {
			live: 'Live',
			code: 'Code',
			caseStudy: 'Case Study',
		},
	},
	skills: {
		heading: 'Skills',
		subtitle: 'Technologies I work with, grouped by where I spend most of my time.',
		categories: [
			{
				label: 'Backend',
				items: ['C#', '.NET', 'ASP.NET Core', 'Node.js', 'REST APIs', 'Entity Framework Core', 'Prisma', 'OAuth2/OIDC', 'JWT'],
			},
			{
				label: 'Frontend',
				items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
			},
			{
				label: 'Cloud & DevOps',
				items: ['Azure', 'GCP', 'Docker', 'Terraform', 'CI/CD', 'Azure DevOps', 'Git'],
			},
			{
				label: 'Databases',
				items: ['PostgreSQL', 'SQL Server', 'Azure Cosmos DB', 'Redis'],
			},
		],
	},
	education: {
		heading: 'Education',
		entries: [
			{
				degree: 'Bachelor of Engineering \u2014 Software Engineering',
				school: 'University of Southern Denmark (SDU)',
				period: '2022 \u2014 2026',
				location: 'Odense',
			},
			{
				degree: 'HTX \u2014 Robot Technology',
				school: 'ZBC \u2014 Zealand Business College',
				period: '2018 \u2014 2021',
				location: 'Slagelse',
			},
		],
	},
	contact: {
		heading: 'Get in touch',
		body: "I'm open to backend, full-stack, and cloud engineering roles across Denmark.",
		email: 'daniel@danielz.dev',
	},
	footer: {
		source: 'Source on GitHub',
	},
	errors: {
		notFound: {
			title: 'Page not found',
			message: "The page you're looking for doesn't exist. You'll be redirected to the homepage.",
		},
	},
	youtube: {
		title: 'YouTube',
		description: 'Here are some of my YouTube videos',
	},
}

export default en
