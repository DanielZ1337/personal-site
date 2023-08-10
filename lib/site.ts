export const siteConfig = {
    title: "Daniel Schmidt",
    creator: "Daniel Bermann Schmidt",
    url: "https://danielz.dev",
    ogImage: "https://danielz.dev/og.png",
    description: 'Personal website of @danielz1337',
    links: {
        twitter: "https://twitter.com/danielz1337",
        github: "https://github.com/DanielZ1337",
        linkedin: "https://www.linkedin.com/in/daniel-bermann-schmidt",
        emailto: "mailto:danielz2nd@hotmail.com",
        email: "danielz2nd@hotmail.com",
        github_repo: "https://github.com/DanielZ1337/portfolio-site",
    },
    langs: ['en', 'da'],
    defaultLang: 'en',
}

export type SiteConfig = typeof siteConfig
export type Languages = (typeof siteConfig)['langs'][number]