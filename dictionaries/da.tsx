import {
    SiBootstrap,
    SiCplusplus,
    SiGit,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from "react-icons/si";
import {DiJava} from "react-icons/di";
import {projects} from "@/lib/projects";

const ICON_SIZE = "2.5rem";

export default {
    "errors": {
        "NotFound": {
            "toast": {
                "title": "Ikke fundet",
                "detail": "Den side du leder efter findes ikke."
            },
            "page": {
                "title": "Side ikke fundet",
                "message": "Du vil blive omdirigeret til forsiden, eller du kan trykke her for at gå til forsiden."
            }
        }
    },
    "navbar": {
        "links": [
            {
                "home": {
                    "id": "hjem",
                    "anchor": "/da",
                    "title": "Hjem"
                },
                "skills": {
                    "id": "færdigheder",
                    "anchor": "#færdigheder",
                    "title": "Færdigheder"
                },
                "projects": {
                    "id": "projekter",
                    "anchor": "#projekter",
                    "title": "Projekter"
                },
                "contact": {
                    "id": "kontakt",
                    "anchor": "#kontakt",
                    "title": "Kontakt"
                },
                "resume": {
                    "id": "cv",
                    "anchor": "/resume.pdf",
                    "title": "CV"
                }
            }
        ],
        "others": [
            {
                "youtube": {
                    "title": "YouTube Værker",
                    "anchor": "/da/youtube",
                }
            }
        ],
        "home": "Hjem",
        "about": "Om",
        "contact": "Kontakt",
        "language": "Sprog",
        "theme": "Tema",
        "light": "Lyst",
        "dark": "Mørkt",
        "system": "System",
        "toggleTheme": "Skift tema"
    },
    "languages": {
        "da": "Dansk",
        "en": "Engelsk"
    },
    "footer": {
        "creator": "Lavet med ❤\uFE0F af Daniel Bermann Schmidt",
        "source": "Kildekode på"
    },
    "text": {
        "email": "E-mail",
        "name": "Navn",
        "message": "Besked",
        "contactform":{
            "name": "Navn...",
            "email":"E-mail...",
            "message": "Skriv din besked her...",
            "sendemail": "Send e-mail",
            "sending": "Sender...",
            "toast": {
                "title": "E-mail sendt",
                "description": "Din e-mail er blevet sendt. Jeg vil svare dig så hurtigt som muligt."
            }
        },
        "others": "Andre",
        "socials": "Sociale medier",
        "navigation": "Navigation",
        "visit": "Besøg",
        "skills": "Færdigheder",
        "skillsDescription": "Her er nogle af de færdigheder, jeg har opnået gennem min uddannelse og projekter.",
        "skillsDescription2": "Disse er de erfaringer, jeg har fået gennem projekter på gymnasiet, universitetet og fritidsprojekter.",
        "hello": `Hej, mit navn er `,
        "about": "Jeg er en 21-årig softwareingeniør. Jeg studerer i øjeblikket Diplomingeniør i Software Teknologi på Syddansk Universitet og er på mit 3. semester.",
        "contacttitle": "Kontakt mig",
        "contact": "Du kan kontakte mig ved at sende en e-mail til ",
        "resume": "Du kan finde mit CV her: ",
        "projects": "Projekter",
        "projectssubtitle": "Her er nogle af de projekter, jeg har arbejdet på.",
        "projectsDescription": "Går lige nu på 3. semester på SDU, hvor jeg læser til softwareingeniør. Her har jeg arbejdet mest med PostgreSQL og Java.",
        "projectsDescription2": "Jeg har arbejdet på et par projekter, både alene og sammen med andre. Så har jeg også arbejdet med frontend og backend, samt med både relationelle og ikke-relationelle databaser.",
        "projectsDescription3": "Derefter har jeg også arbejdet med Next.js og React, hvor Next.js har været min primære erfaring med React. Dette har været i JavaScript og TypeScript (bedst).",
        "projectsDescription4": "Jeg har også arbejdet med C++ og har en god forståelse for det. Dette har været i forbindelse med gymnasiet, hvor jeg tog HTX (Matematik A - Programmering B).",
        "technologiesused": "Teknologier brugt",
    },
    "youtube": {
        "title": "YouTube",
        "description": "Her er nogle af mine YouTube-videoer"
    },
    "skills": [
        {
            "title": "React",
            "description": "Next.js er bygget på react og er et framework til react; det er min primære erfaring med React",
            "icon": <SiReact size={ICON_SIZE}/>
        },
        {
            "title": "Next.js",
            "description": "Har lavet et par projekter med Next.js, og har derfor erfaring med det",
            "icon": <SiNextdotjs size={ICON_SIZE}/>
        },
        {
            "title": "TypeScript",
            "description": "Meste af hvad jeg laver er skrevet i TypeScript, da det gør tingene nemmere med type-safety",
            "icon": <SiTypescript size={ICON_SIZE}/>
        },
        {
            "title": "Java",
            "description": "Har haft Java på universitetet i et par semestre, hvor jeg har scoret 12 i begge",
            "icon": <DiJava size={ICON_SIZE}/>
        },
        {
            "title": "C++",
            "description": "Da jeg tog HTX (Matematik A - Programmering B), havde jeg C++ i gymnasiet. Så har en god forståelse for C++",
            "icon": <SiCplusplus size={ICON_SIZE}/>
        },
        {
            "title": "Node.js",
            "icon": <SiNodedotjs size={ICON_SIZE}/>
        },
        {
            "title": "Redis",
            "icon": <SiRedis size={ICON_SIZE}/>
        },
        {
            "title": "MongoDB",
            "description": "MongoDB blev brugt i ét enkelt semester på universitet",
            "icon": <SiMongodb size={ICON_SIZE}/>
        },
        {
            "title": "PostgreSQL",
            "description": "PostgreSQL er den form for database, jeg har mest erfaring med. Det var vores primære database på universitetet, samt har selv brugt det tilbage i gymnasiet til et projekt",
            "icon": <SiPostgresql size={ICON_SIZE}/>
        },
        {
            "title": "Git",
            "icon": <SiGit size={ICON_SIZE}/>
        },
    ],
    "projects": [
        {
            "title": "Personlig Hjemmeside",
            "description": "Denne hjemmeside er min personlige hjemmeside, hvor jeg fremviser mine projekter og færdigheder.",
            "image": projects["personal-website"].image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects["personal-website"].github
                },
                {
                    "title": "Besøg",
                    "url": projects["personal-website"].production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                }
            ]
        },
        {
            "title": "GitHub Markdown-Noter App",
            "description": "Dette er en simpel app, der giver dig mulighed for at gennemse dine GitHub-repositorier, der har markdown-filer, og se dem. Den er bygget med Next.js og bruger GitHub API'en til at hente data.",
            "extraDescription": {
                "title": "Til at teste skal du bruge følgende:",
                "credentials": {
                    "link": "Link: https://github.com/testdanielz/test-mds",
                    "username": "Brugernavn: testdanielz"
                }
            },
            "image": projects["github-markdown-reader"].image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects["github-markdown-reader"].github
                },
                {
                    "title": "Besøg",
                    "url": projects["github-markdown-reader"].production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiRedis size={ICON_SIZE}/>,
                    "title": "Redis"
                }
            ],
        },
        {
            "title": "Ghroovy E-Handel",
            "description": "Dette er en e-handels hjemmeside, bygget med Next.js",
            "image": projects["ghroovy"].image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects["ghroovy"].github
                },
                {
                    "title": "Besøg",
                    "url": projects["ghroovy"].production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiRedis size={ICON_SIZE}/>,
                    "title": "Redis"
                }
            ],
        },
        /*{
            "title": "E-Handel",
            "description": "Dette er en e-handels hjemmeside, bygget med Next.js og PostgreSQL. Det er en simpel hjemmeside, der giver dig mulighed for at tilføje produkter til din indkøbskurv og foretage betaling.",
            "image": projects["e-commerce"].image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects["e-commerce"].github
                },
                {
                    "title": "Besøg",
                    "url": projects["e-commerce"].production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiBootstrap size={ICON_SIZE}/>,
                    "title": "Bootstrap"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
                {
                    "icon": <SiPostgresql size={ICON_SIZE}/>,
                    "title": "PostgreSQL"
                }
            ]
        },*/
        {
            "title": "ValorVault",
            "description": "ValorVault er en hjemmeside, der giver dig mulighed for at følge dine Valorant-statistikker. Den er bygget med Next.js og bruger Valorant API'en til at hente data.",
            "image": projects.valorvault.image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects.valorvault.github
                },
                {
                    "title": "Besøg",
                    "url": projects.valorvault.production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                },
            ]
        },
        /*{
            "title": "Simpel Spil Singleplayer og Multiplayer App",
            "description": "Dette er en simpel app, der giver dig mulighed for at spille spil med andre personer. Den er bygget med Next.js og bruger Socket.IO (med Express backend) til multiplayer-funktionaliteten.",
            "image": projects["simple-games-singleplayer-and-multiplayer-app"].image,
            "links": [
                {
                    "title": "Kildekode",
                    "url": projects["simple-games-singleplayer-and-multiplayer-app"].github
                },
                {
                    "title": "Besøg",
                    "url": projects["simple-games-singleplayer-and-multiplayer-app"].production
                }
            ],
            "technologies": [
                {
                    "icon": <SiNextdotjs size={ICON_SIZE}/>,
                    "title": "Next.js"
                },
                {
                    "icon": <SiReact size={ICON_SIZE}/>,
                    "title": "React"
                },
                {
                    "icon": <SiTypescript size={ICON_SIZE}/>,
                    "title": "TypeScript"
                },
                {
                    "icon": <SiTailwindcss size={ICON_SIZE}/>,
                    "title": "TailwindCSS"
                },
                {
                    "icon": <SiSocketdotio size={ICON_SIZE}/>,
                    "title": "Socket.IO"
                },
                {
                    "icon": <SiVercel size={ICON_SIZE}/>,
                    "title": "Vercel"
                }
            ],
        }*/
    ]
}

