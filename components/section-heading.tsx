'use client'

import { useState, useCallback } from 'react'
import { Link2, Check } from 'lucide-react'

export default function SectionHeading({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
	const [copied, setCopied] = useState(false)

	const copyLink = useCallback(() => {
		const url = `${window.location.origin}${window.location.pathname}#${id}`
		navigator.clipboard.writeText(url)
		setCopied(true)
		setTimeout(() => setCopied(false), 1500)
	}, [id])

	return (
		<h2 className={`group flex items-center gap-2 ${className ?? 'text-3xl font-bold'}`}>
			{children}
			<button
				onClick={copyLink}
				aria-label={`Copy link to ${id} section`}
				className='opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-primary'
			>
				{copied ? <Check className='w-5 h-5 text-green-500' /> : <Link2 className='w-5 h-5' />}
			</button>
		</h2>
	)
}
