import {MetadataRoute} from 'next'
import {siteConfig} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${siteConfig.url}`,
            lastModified: new Date(),
        },
        {
            url: `${siteConfig.url}/da/resume.pdf`,
            lastModified: new Date(),
        },
        {
            url: `${siteConfig.url}/da`,
            lastModified: new Date(),
        },
        {
            url: `${siteConfig.url}/da/test`,
            lastModified: new Date(),
        },
        {
            url: `${siteConfig.url}/en`,
            lastModified: new Date(),
        },
        {
            url: `${siteConfig.url}/en/test`,
            lastModified: new Date(),
        },
    ]
}
