'use client'

import {useEffect} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useToast} from "@/components/ui/use-toast";
import {getDictionary} from "@/dictionaries/utils/dictionaries";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";

export default function NotFound() {
    const router = useRouter()
    const {lang} = useParams();
    const {data: dict} = useQuery(['dict', lang], () => getDictionary(String(lang)), {
        retry: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    })

    const {toast} = useToast()

    useEffect(() => {
        if (dict) {
            toast({
                title: dict.errors.NotFound.title,
                description: dict.errors.NotFound.detail,
            })
            setTimeout(() => {
                router.push('/')
            }, 5000)
        }
    }, [dict, dict?.errors.NotFound.detail, dict?.errors.NotFound.title, router, toast]);

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-foreground tracking-widest">404</h1>
            <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5 group">
                <a
                    className="relative inline-block text-sm font-medium text-primary group active:text-primary-foreground focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"
                    />

                    <span className="relative block px-8 py-3 bg-foreground dark:bg-black/90 border border-primary">
                        <Link href={'/'} className={"group-active:shadow-2xl group-active:shadow-primary"}>You&apos;ll be redirected to homepage, or you can click here</Link>
                    </span>
                </a>
            </button>
        </div>
    )
}