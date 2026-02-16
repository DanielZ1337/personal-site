'use client'

import { m } from 'framer-motion'
import { ReactNode } from 'react'

export default function SlideUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
	return (
		<m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay, ease: 'easeOut' }} className={className}>
			{children}
		</m.div>
	)
}
