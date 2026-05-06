import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CompanyLogoProps {
	readonly src?: string
	readonly alt: string
	readonly initials: string
	readonly fallbackColor?: string
	readonly className?: string
}

export default function CompanyLogo({ src, alt, initials, fallbackColor, className }: CompanyLogoProps) {
	if (src) {
		return (
			<Image
				src={src}
				alt={alt}
				width={80}
				height={56}
				className={cn('h-auto max-h-14 w-auto max-w-full object-contain', className)}
				sizes='80px'
			/>
		)
	}

	return (
		<div
			className={cn(
				'flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm ring-1 ring-inset ring-white/15',
				className,
			)}
			style={fallbackColor ? { backgroundColor: fallbackColor } : undefined}
		>
			{initials}
		</div>
	)
}
