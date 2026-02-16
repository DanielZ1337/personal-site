'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import useDictionary from '@/dictionaries/useDictionary'

export default function NotFound() {
	const router = useRouter()
	const { lang } = useParams()
	const { data: dict } = useDictionary(String(lang))

	useEffect(() => {
		const timeout = setTimeout(() => {
			router.push('/')
		}, 5000)
		return () => clearTimeout(timeout)
	}, [router])

	return (
		<div className='h-full w-full flex-1 flex flex-col justify-center items-center gap-4'>
			<h1 className='text-9xl font-extrabold text-foreground tracking-widest'>404</h1>
			<p className='text-lg text-muted-foreground'>
				{dict?.errors.notFound.title}
			</p>
			<Link
				href={`/${lang}`}
				className='mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors'
			>
				{dict?.errors.notFound.message ?? 'Go home'}
			</Link>
		</div>
	)
}
