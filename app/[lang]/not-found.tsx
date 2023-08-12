'use client'

import {useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
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
                title: dict.errors.NotFound.toast.title,
                description: dict.errors.NotFound.toast.detail,
            })
            setTimeout(() => {
                router.push('/')
            }, 5000)
        }
    }, [dict, router, toast]);

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-foreground tracking-widest">404</h1>
            <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
                {dict?.errors.NotFound.page.title}
            </div>
            <button className="mt-5 group">
                <div
                    className="relative inline-block text-sm font-medium text-primary group active:text-primary-foreground focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"
                    />

                    <span className="relative block px-8 py-3 bg-foreground dark:bg-black/90 border border-primary">
                        <Link href={`/${lang}`}
                              className={"group-active:shadow-2xl group-active:shadow-primary"}>{dict?.errors.NotFound.page.message}</Link>
                    </span>
                </div>
            </button>
        </div>
    )
}