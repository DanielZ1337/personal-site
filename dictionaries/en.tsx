import {
    SiBootstrap,
    SiCplusplus,
    SiGit, SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis, SiSocketdotio, SiTailwindcss,
    SiTypescript, SiVercel
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
                    "id": "home",
                    "anchor": "/en",
                    "title": "Home"
                },
                "skills": {
                    "id": "skills",
                    "anchor": "#skills",
                    "title": "Skills"
                },
                "projects": {
                    "id": "projects",
                    "anchor": "#projects",
                    "title": "Projects"
                },
                "contact": {
                    "id": "contact",
                    "anchor": "#contact",
                    "title": "Contact"
                },
                "resume": {
                    "id": "resume",
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
        "about": "I am a 21-year-old software engineer. Currently, I am pursuing a Bachelor's degree in Software Technology at the University of Southern Denmark and I am in my 3rd semester.",
        "contact": "You can contact me by sending an email to ",
        "resume": "You can find my resume here: ",
        "projects": "Projects",
        "projectsDescription": "I am currently in my 3rd semester at SDU, where I am studying software engineering. During this time, I have mostly worked with PostgreSQL and Java.",
        "projectsDescription2": "I have been involved in several projects, both individually and collaboratively. I have experience with both frontend and backend development, as well as working with relational and non-relational databases.",
        "projectsDescription3": "Additionally, I have also worked with Next.js and React, with Next.js being my primary experience with React. This work has been done using both JavaScript and TypeScript (best).",
        "technologiesused": "Technologies used",
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
    ],
    "projects": [
        {
            "title": "Personal Website",
            "description": "This website is my personal website, where I showcase my projects and skills.",
            "image": "/images/projects/personal-website.png",
            "links": [
                {
                    "title": "Source Code",
                    "url": "https://github.com/danielz1337/personal-website"
                },
                {
                    "title": "Visit",
                    "url": "https://danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel"
            ],
            "icons": [
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
        {
            "title": "ValorVault",
            "description": "ValorVault is a website that allows you to track your Valorant stats. It's built with Next.js and uses the Valorant API to fetch data.",
            "image": "/images/projects/valorvault.png",
            "links": [
                {
                    "title": "Source Code",
                    "url": "https://github.com/danielz1337/valorvault"
                },
                {
                    "title": "Visit",
                    "url": "https://valorvault.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel"
            ],
            "icons": [
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
                    "icon": <SiGithub size={ICON_SIZE}/>,
                    "title": "GitHub API"
                },
            ]
        },
        {
            "title": "E-Commerce",
            "description": "This is an e-commerce website built with Next.js and Commerce.js. It's a simple website that allows you to add products to your cart and checkout.",
            "image": "/images/projects/e-commerce.png",
            "links": [
                {
                    "title": "Source Code",
                    "url": "https://github.com/danielz1337/e-commerce"
                },
                {
                    "title": "Visit",
                    "url": "https://e-commerce.danielz.dev/"
                }
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "Bootstrap",
                "Vercel",
                "PostgreSQL",
            ],
            "icons": [
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
        },
        {
            "title": "GitHub Markdown Notes App",
            "description": "This is a simple app that allows you to browse your GitHub repositories that have markdown files and view them. It's built with Next.js and uses the GitHub API to fetch data.",
            "image": "/images/projects/github-markdown-notes-app.png",
            "links": [
                {
                    "title": "Source Code",
                    "url": "https://github.com/danielz1337/github-markdown-notes-app"
                },
                {
                    "title": "Visit",
                    "url": "https://github-markdown-notes-app.danielz.dev/"
                },
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Vercel",
                "NextAuth.js",
                "Redis",
            ],
            "icons": [
                {
                    "icon": <SiRedis size={ICON_SIZE}/>,
                    "title": "Redis"
                },
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
                    "icon": <SiGithub size={ICON_SIZE}/>,
                    "title": "GitHub API"
                },
            ]
        },
        {
            "title": "Simple Games Singleplayer and Multiplayer App",
            "description": "This is a simple app that allows you to play games with other people. It's built with Next.js and uses Socket.IO for the multiplayer functionality.",
            "image": "/images/projects/simple-games-singleplayer-and-multiplayer-app.png",
            "links": [
                {
                    "title": "Source Code",
                    "url": "https://github.com/danielz1337/simple-games-singleplayer-and-multiplayer-app"
                },
                {
                    "title": "Visit",
                    "url": "https://simple-games-singleplayer-and-multiplayer-app.danielz.dev/"
                },
            ],
            "technologies": [
                "Next.js",
                "React",
                "TypeScript",
                "TailwindCSS",
                "Socket.IO",
                "Vercel",
                "NextAuth.js",
            ],
            "icons": [
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
                },
            ]
        }
    ]
}