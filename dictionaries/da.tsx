import {
    SiCplusplus,
    SiGit,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiTypescript
} from "react-icons/si";
import {DiJava} from "react-icons/di";
import {siteConfig} from "@/lib/site";

const ICON_SIZE = "2rem";

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
                    "anchor": "/da",
                    "title": "Hjem"
                },
                "about": {
                    "anchor": "#om",
                    "title": "Om"
                },
                "contact": {
                    "anchor": "#kontakt",
                    "title": "Kontakt"
                },
                "resume": {
                    "anchor": "/assets/da/resume.pdf",
                    "title": "CV"
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
        "visit": "Besøg",
        "skills": "Færdigheder",
        "skillsDescription": "Her er nogle af de færdigheder, jeg har opnået gennem min uddannelse og projekter.",
        "hello": `Hej, mit navn er `,
        "about": "Jeg er en 21-årig softwareingeniør. Jeg studerer i øjeblikket Diplomingeniør i Software Teknologi på Syddansk Universitet og er på mit 2. semester.",
        "contact": "Du kan kontakte mig ved at sende en e-mail til ",
        "resume": "Du kan finde mit CV her: ",
        "projects": "Projekter",
        "projectsDescription": "Her er nogle af de projekter, jeg har arbejdet på. Du kan finde flere på min GitHub-profil.",
        "projectsDescription2": "Jeg har arbejdet på et par projekter, både alene og sammen med andre. Jeg har arbejdet både med frontend og backend og har arbejdet med både relationelle og ikke-relationelle databaser. Jeg har også arbejdet med både TypeScript og JavaScript.",
        "projectsDescription3": "Jeg har arbejdet med React og Next.js, og jeg har også arbejdet med Node.js. Jeg har arbejdet med både PostgreSQL og MongoDB, og jeg har også arbejdet med Redis. Jeg har arbejdet med både JavaScript og TypeScript.",
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
    ]
}

