import type { Dictionary } from '@/dictionaries/utils/dictionary-type'

const da: Dictionary = {
	meta: {
		title: 'Daniel Bermann Schmidt — Softwareingenj\u00f8r',
		description:
			'Backend-fokuseret softwareingenj\u00f8r med produktionserfaring i C#/.NET, TypeScript og Azure. Baseret i Odense, Danmark.',
	},
	nav: {
		about: 'Om',
		experience: 'Erfaring',
		projects: 'Projekter',
		skills: 'Kompetencer',
		contact: 'Kontakt',
		cv: 'CV',
		language: 'Sprog',
		theme: 'Tema',
		light: 'Lyst',
		dark: 'M\u00f8rkt',
		system: 'System',
		toggleTheme: 'Skift tema',
	},
	languages: {
		da: 'Dansk',
		en: 'Engelsk',
	},
	hero: {
		title: 'Softwareingenj\u00f8r',
		tagline:
			'Backend-fokuseret ingenj\u00f8r med produktionserfaring i C#/.NET og TypeScript. Jeg bygger systemer der virker\u2009\u2014\u2009fra IoT-overv\u00e5gning og telemetri til multi-tenant enterprise-l\u00f8sninger.',
		location: 'Odense, Danmark',
		availability: 'Tilg\u00e6ngelig nu',
		cta: {
			cv: 'Download CV',
			contact: 'Kontakt mig',
		},
	},
	about: {
		heading: 'Om mig',
		body: 'Nyuddannet softwareingenj\u00f8r med 2 \u00e5rs produktionserfaring fra EFFIMAT, hvor jeg byggede event-drevne overv\u00e5gningsplatforme, arkitekterede Azure-telemetripipelines der behandler ~40.000 datapunkter dagligt, og leverede multi-tenant applikationer med enterprise SSO. Jeg underviste ogs\u00e5 i cloud computing p\u00e5 SDU, hvor jeg guidede 140+ studerende gennem GCP, Docker og Terraform. Jeg trives bedst, n\u00e5r jeg kan tage ejerskab over et problem fra start til slut og shippe noget der g\u00f8r en forskel.',
	},
	experience: {
		heading: 'Erfaring',
		roles: [
			{
				company: 'EFFIMAT',
				title: 'Studentermedarbejder / Praktikant \u2014 Softwareudvikling',
				period: 'Nov 2023 \u2014 Jan 2026',
				location: 'Odense',
				bullets: [
					'Byggede event-drevet IoT-overv\u00e5gningsplatform i C#/.NET, der erstattede manuel Excel-sporing og gav serviceafdelingen mulighed for at h\u00e5ndtere 140+ h\u00e6ndelser med statushistorik, automatiske notifikationer og PDF-rapportgenerering.',
					'Arkitekterede telemetripipeline via Azure IoT Hub og Functions, der behandler ~40.000 datapunkter dagligt uden uplanlagt nedetid siden lancering.',
					'Leverede multi-tenant salgskonfigurator (TypeScript, React, PostgreSQL) med enterprise SSO via Microsoft Entra ID, OAuth2/OIDC og applikationslags-RBAC.',
					'Ejede CI/CD-pipelines, Docker-containerisering og Azure-infrastruktur (App Services, DNS/SSL, brugerdefinerede dom\u00e6ner) p\u00e5 tv\u00e6rs af flere milj\u00f8er.',
				],
			},
			{
				company: 'Syddansk Universitet',
				title: 'Undervisningsassistent \u2014 Cloud Computing',
				period: 'Aug 2025 \u2014 Jan 2026',
				location: 'Odense & S\u00f8nderborg',
				bullets: [
					'Guidede 140+ studerende gennem cloud-arkitektur: Google Cloud Platform (GCP), Docker, Terraform og infrastructure-as-code-m\u00f8nstre.',
					'Udarbejdede og bed\u00f8mte praktiske \u00f8velser i containerisering, cloud-deployment med Terraform, serviceorkestrering p\u00e5 GCP og cloud-native applikationsdesign.',
				],
			},
		],
	},
	projects: {
		heading: 'Projekter',
		subtitle: 'Udvalgte projekter \u2014 open source og produktion.',
		items: [
			{
				key: 'itsdu',
				tag: 'Desktop-app \u00b7 Open source',
				title: 'ITSDU',
				description:
					'Tv\u00e6rplatforms desktop-klient til itslearning, der erstatter en langsom webgr\u00e6nseflade for universitetsstuderende. Integrerer OAuth2-autentificering, REST API-forbrug og RAG-drevet documents\u00f8gning med LangChain og Qdrant.',
			},
			{
				key: 'boulderklub',
				tag: 'Bachelorprojekt \u00b7 Full-stack',
				title: 'Odense Boulderklub Platform',
				description:
					'Cloud-native f\u00e6llesskabsplatform for en klatreklub med 200+ medlemmer. Erstattede Facebook-afh\u00e6ngighed med feeds, \u00e5bningstidsstyring og eventkoordinering. Designet med leverand\u00f8ruafh\u00e6ngig deployment som kerneprincip.',
			},
			{
				key: 'finance',
				tag: 'Data engineering \u00b7 Sideprojekt',
				title: 'Finance Index Trackers',
				description:
					'Automatiseret indsamler af CNN Fear & Greed Index. Indsamler finansielle sentimentdata efter tidsplan, gemmer historiske snapshots og visualiserer trends over tid.',
			},
			{
				key: 'sdk',
				tag: 'Bibliotek \u00b7 Open source',
				title: 'itslearning SDK',
				description:
					'Type-sikkert TypeScript SDK til itslearnings REST API. Modul\u00e6r arkitektur med dedikerede klasser per API-dom\u00e6ne\u2009\u2014\u2009Kalender, Kurser, Beskeder, Notifikationer\u2009\u2014\u2009med automatiseret OAuth2-tokenh\u00e5ndtering.',
			},
		],
		labels: {
			live: 'Live',
			code: 'Kildekode',
			caseStudy: 'Casestudie',
		},
	},
	skills: {
		heading: 'Kompetencer',
		subtitle: 'Teknologier jeg arbejder med, grupperet efter hvor jeg bruger mest tid.',
		categories: [
			{
				label: 'Backend',
				items: ["C#", ".NET", "ASP.NET Core", "Node.js", "REST API'er", "Entity Framework Core", "Prisma", "OAuth2/OIDC", "JWT"],
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
				label: 'Databaser',
				items: ['PostgreSQL', 'SQL Server', 'Azure Cosmos DB', 'Redis'],
			},
		],
	},
	education: {
		heading: 'Uddannelse',
		entries: [
			{
				degree: 'Diplomingenj\u00f8r \u2014 Software Teknologi',
				school: 'Syddansk Universitet (SDU)',
				period: '2022 \u2014 2026',
				location: 'Odense',
			},
			{
				degree: 'HTX \u2014 Robot Teknologi',
				school: 'ZBC \u2014 Zealand Business College',
				period: '2018 \u2014 2021',
				location: 'Slagelse',
			},
		],
	},
	contact: {
		heading: 'Kontakt',
		body: 'Jeg er \u00e5ben for backend-, full-stack- og cloud engineering-roller i hele Danmark.',
		email: 'daniel@danielz.dev',
	},
	footer: {
		source: 'Kildekode p\u00e5 GitHub',
	},
	errors: {
		notFound: {
			title: 'Siden blev ikke fundet',
			message: 'Siden du leder efter findes ikke. Du vil blive omdirigeret til forsiden.',
		},
	},
}

export default da
