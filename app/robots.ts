import { MetadataRoute } from 'next'
import {siteConfig} from "@/lib/site";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
