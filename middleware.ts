import {NextRequest, NextResponse} from 'next/server'
import {match} from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import {siteConfig} from "@/lib/site";

function getLocale(request: NextRequest) {

    const headers = {'accept-language': request.headers.get('accept-language')!}
    const languages = new Negotiator({headers}).languages()
    const defaultLocale = siteConfig.defaultLang
    const availableLanguages = siteConfig.langs
    return match(languages, availableLanguages, defaultLocale) // -> 'en-US'
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = siteConfig.langs.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products

        // handle cors and allow Access-Control-Allow-Origin
        const origin = request.headers.get('origin') ?? '*'
        const headers = {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
        return NextResponse.redirect(
            new URL(`/${locale}${pathname ?? `/${pathname}`}`, request.url),
            {headers}
        )

        /*return NextResponse.redirect(
            new URL(`/${locale}${pathname ?? `/${pathname}`}`, request.url)
        )*/
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/((?!_next).*)',
        // Skip all static assets
        // '/((?!static).*)',
        // do it with static assets file extensions
        // '/((?!static).*(?:js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot))',
        // Optional: only run on root (/) URL
        // '/'

        "/((?!api|static|.*\\..*|_next).*)",
    ],
}