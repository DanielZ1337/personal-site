import {
    SiCplusplus,
    SiGit,
    SiGithub,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedis,
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
        "email": "Email",
        "name": "Name",
        "message": "Message",
        "contactform": {
            "name": "Name...",
            "email": "Email...",
            "message": "Write your message...",
            "sendemail": "Send e-mail",
            "sending": "Sending...",
            "toast": {
                "title": "E-mail sent",
                "description": "Your e-mail has been sent successfully."
            }
        },
        "socials": "Social Media",
        "navigation": "Navigation",
        "visit": "Visit",
        "skills": "Skills",
        "skillsDescription": "Here are some of the skills I have acquired through my education and projects.",
        "skillsDescription2": "These are the experiences I have gained through projects in high school, university, and personal projects.",
        "hello": "Hello, my name is ",
        "about": "I am a 21-year-old software engineer. Currently, I am pursuing a Bachelor's degree in Software Technology at the University of Southern Denmark and I am in my 3rd semester.",
        "contacttitle": "Contact me",
        "contact": "You can contact me by sending an email to ",
        "resume": "You can find my resume here: ",
        "projects": "Projects",
        "projectssubtitle": "Here are some of the projects I have worked on.",
        "projectsDescription": "I am currently on my 3rd semester at SDU, where I am studying software engineering. During this time, I have mostly worked with PostgreSQL and Java.",
        "projectsDescription2": "I have been involved in several projects, both individually and collaboratively. I have experience with both frontend and backend development, as well as working with relational and non-relational databases.",
        "projectsDescription3": "Additionally, I have also worked with Next.js and React, with Next.js being my primary experience with React. This work has been done using both JavaScript and TypeScript (best).",
        "projectsDescription4": "I have also worked with C++ and have a good understanding of it. This was in connection with high school, where I took the Higher Technical Examination (HTX) (Mathematics A - Programming B).",
        "technologiesused": "Technologies used",
    },
    "youtube": {
        "title": "YouTube",
        "description": "Here are some of my YouTube videos",
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
            "image": projects["personal-website"].image,
            "links": [
                {
                    "title": "Source Code",
                    "url": projects["personal-website"].github
                },
                {
                    "title": "Visit",
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
            "title": "GitHub Markdown Notes App",
            "description": "This is a simple app that allows you to browse your GitHub repositories that have markdown files and view them. It's built with Next.js and uses the GitHub API to fetch data.",
            "extraDescription": {
                "title": "For testing use the following:",
                "credentials": {
                    "link": "Link: https://github.com/testdanielz/test-mds",
                    "username": "Username: testdanielz"
                }
            },
            "image": projects["github-markdown-reader"].image,
            "links": [
                {
                    "title": "Source Code",
                    "url": projects["github-markdown-reader"].github
                },
                {
                    "title": "Visit",
                    "url": projects["github-markdown-reader"].production
                }
            ],
            "technologies": [
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
            ],
        },
        /*{
            "title": "E-Commerce",
            "description": "This is an e-commerce website built with Next.js and PostgreSQL. It's a simple website that allows you to add products to your cart and checkout.",
            "image": projects["e-commerce"].image,
            "links": [
                {
                    "title": "Source Code",
                    "url": projects["e-commerce"].github
                },
                {
                    "title": "Visit",
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
            ],
        },*/
        {
            "title": "ValorVault",
            "description": "ValorVault is a website that allows you to track your Valorant stats. It's built with Next.js and uses the Valorant API to fetch data.",
            "image": projects.valorvault.image,
            "links": [
                {
                    "title": "Source Code",
                    "url": projects["valorvault"].github
                },
                {
                    "title": "Visit",
                    "url": projects["valorvault"].production
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
            ],
        },
        /*{
            "title": "Simple Games Singleplayer and Multiplayer App",
            "description": "This is a simple app that allows you to play games with other people. It's built with Next.js and uses Socket.IO (with Express backend) for the multiplayer functionality.",
            "image": projects["simple-games-singleplayer-and-multiplayer-app"].image,
            "links": [
                {
                    "title": "Source Code",
                    "url": projects["simple-games-singleplayer-and-multiplayer-app"].github
                },
                {
                    "title": "Visit",
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
            ]
        }*/
    ]
}