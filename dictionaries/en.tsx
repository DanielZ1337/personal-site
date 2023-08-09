import {
    SiCplusplus, SiGit,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiTypescript
} from "react-icons/si";
import {DiJava} from "react-icons/di";

const ICON_SIZE = "2rem";

export default {
    "errors": {
        "NotFound": {
            "toast": {
                "title": "Not Found",
                "detail": "The requested resource could not be found"
            },
            "page": {
                "title": "Page not found",
                "message": "You'll be redirected to homepage, or you can click here"
            }
        }
    },
    "navbar": {
        "links": [
            {
                "home": {
                    "anchor": "#home",
                    "title": "Home"
                },
                "about": {
                    "anchor": "#about",
                    "title": "About"
                },
                "contact": {
                    "anchor": "#contact",
                    "title": "Contact"
                },
                "resume": {
                    "anchor": "#cv",
                    "title": "CV"
                }
            }
        ],
        "home": "Home",
        "about": "About",
        "contact": "Contact",
        "language": "Language",
        "theme": "Theme",
        "light": "Light",
        "dark": "Dark",
        "system": "System",
        "toggleTheme": "Toggle theme"
    },
    "languages": {
        "da": "Danish",
        "en": "English"
    },
    "footer": {
        "creator": "Made with ❤\uFE0F by Daniel Bermann Schmidt",
        "source": "Source code on"
    },
    "text": {
        "visit": "Visit",
        "skills": "Skills",
        "skillsDescription": "Here are some of the skills I've gained through my education and projects.",
        "about": "I'm a 21 year old software engineer from Denmark. I'm currently studying Computer Science at Aalborg University, and I'm in my 4th semester. I have a passion for programming and I'm always looking to learn new things. I'm currently working on a couple of projects, which you can read more about below.",
        "contact": "You can contact me by sending an email to mailto:danielz2nd@hotmai.com",
        "resume": "You can find my resume here: ",
        "projects": "Projects",
        "projectsDescription": "Here are some of the projects I've worked on. You can find more on my GitHub profile.",
        "projectsDescription2": "I've worked on a couple of projects, both alone and with others. I've worked on both frontend and backend, and I've worked with both relational and non-relational databases. I've also worked with both TypeScript and JavaScript.",
        "projectsDescription3": "I've worked with React and Next.js, and I've also worked with Node.js. I've worked with both PostgreSQL and MongoDB, and I've also worked with Redis. I've worked with both JavaScript and TypeScript.",
    },
    "skills": [
        {
            "title": "React",
            "description": "Next.js is built on React and is a framework for React; it's my primary experience with React.",
            "icon": <SiReact size={ICON_SIZE}/>
        },
        {
            "title": "Next.js",
            "description": "I've worked on a couple of projects with Next.js, gaining experience with it.",
            "icon": <SiNextdotjs size={ICON_SIZE}/>
        },
        {
            "title": "TypeScript",
            "description": "Most of what I do is written in TypeScript, as it makes things easier with type safety.",
            "icon": <SiTypescript size={ICON_SIZE}/>
        },
        {
            "title": "Java",
            "description": "I studied Java at university for a few semesters and scored top grades (12) in both.",
            "icon": <DiJava size={ICON_SIZE}/>
        },
        {
            "title": "C++",
            "description": "During my high school education (Mathematics A - Programming B), I learned C++. Therefore, I have a solid understanding of C++.",
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
            "description": "I used MongoDB for a single semester at university.",
            "icon": <SiMongodb size={ICON_SIZE}/>
        },
        {
            "title": "PostgreSQL",
            "description": "PostgreSQL is the type of database I have the most experience with. It was our primary database at university, and I also used it for a project during high school.",
            "icon": <SiPostgresql size={ICON_SIZE}/>
        },
        {
            "title": "Git",
            "icon": <SiGit size={ICON_SIZE}/>
        }
    ]
}