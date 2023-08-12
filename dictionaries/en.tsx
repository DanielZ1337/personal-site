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

const ICON_SIZE = "2.5rem";

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
                    "anchor": "/en",
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
                    "anchor": "/resume.pdf",
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
        "socials": "Social Media",
        "visit": "Visit",
        "skills": "Skills",
        "skillsDescription": "Here are some of the skills I have acquired through my education and projects.",
        "skillsDescription2": "These are the experiences I have gained through projects in high school, university, and personal projects.",
        "hello": "Hello, my name is ",
        "about": "I am a 21-year-old software engineer. Currently, I am pursuing a Bachelor's degree in Software Technology at the University of Southern Denmark and I am in my 2nd semester.",
        "contact": "You can contact me by sending an email to ",
        "resume": "You can find my resume here: ",
        "projects": "Projects",
        "projectsDescription": "I am currently in my 3rd semester at SDU, where I am studying software engineering. During this time, I have mostly worked with PostgreSQL and Java.",
        "projectsDescription2": "I have been involved in several projects, both individually and collaboratively. I have experience with both frontend and backend development, as well as working with relational and non-relational databases.",
        "projectsDescription3": "Additionally, I have also worked with Next.js and React, with Next.js being my primary experience with React. This work has been done using both JavaScript and TypeScript.",
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
            "description": "I studied Java at university for a couple of semesters and scored top grades (12) in both.",
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