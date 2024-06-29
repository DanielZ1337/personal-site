'use client'

import { spotifyQueryOptions } from '@/queries/spotify-query-options'
import { useQuery } from '@tanstack/react-query'
import he from 'he'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { SiSpotify } from 'react-icons/si'
import { Loader2, PauseIcon, PlayIcon } from 'lucide-react'
import { Slider } from './ui/slider'
import { animate, m } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function NowPlaying() {
	const { data, isLoading } = useQuery(spotifyQueryOptions.queries.getCurrentlyPlayingTrack())

	return (
		<HoverCard>
			<HoverCardTrigger className='h-10 w-10 rounded-full bg-neutral-200 dark:bg-black flex items-center justify-center'>
				<SiSpotify
					className={cn(
						'h-8 w-8 text-primary-foreground m-auto transition-all duration-[900ms]',
						isLoading && 'animate-spin',
						data?.is_playing && 'text-primary animate-spin'
					)}
				/>
			</HoverCardTrigger>
			<HoverCardContent className='w-full max-w-lg'>
				{isLoading || !data ? (
					<div className='flex flex-col gap-2'>
						<Loader2 className='h-7 w-7 text-primary-foreground animate-spin m-auto' />
						<div className='text-sm text-muted-foreground'>Loading...</div>
					</div>
				) : (
					<NowPlayingCard
						isPlaying={data?.is_playing}
						title={{
							name: data?.item.name,
							href: data?.item.external_urls.spotify,
						}}
						artist={{
							name: data?.item.artists[0].name,
							href: data?.item.artists[0].external_urls.spotify,
						}}
						image={data?.item.album.images[0].url}
						endTime={data?.item.duration_ms}
						currentTime={data?.progress_ms}
					/>
				)}
			</HoverCardContent>
		</HoverCard>
	)
}

function getFormattedTime(given_seconds: number) {
	const dateObj = new Date(given_seconds * 1000)
	const hours = dateObj.getUTCHours()
	const minutes = dateObj.getUTCMinutes()
	const seconds = dateObj.getSeconds()

	const minutesStr = minutes < 10 ? `0${minutes}` : minutes

	const secondsStr = seconds < 10 ? `0${seconds}` : seconds

	const hoursStr = hours < 10 ? `0${hours}` : hours

	if (hours > 0) return `${hoursStr}:${minutesStr}:${secondsStr}`
	return `${minutesStr}:${secondsStr}`
}
function NowPlayingCard({
	isPlaying,
	title,
	artist,
	image,
	endTime,
	currentTime,
}: {
	isPlaying: boolean
	title: {
		name: string
		href: string
	}
	artist: {
		name: string
		href: string
	}
	image: string
	endTime: number
	currentTime: number
}) {
	const [fakeCurrentTime, setFakeCurrentTime] = useState(currentTime)

	useEffect(() => {
		setFakeCurrentTime(currentTime)
	}, [currentTime])

	useEffect(() => {
		if (!isPlaying) return

		const interval = setInterval(() => {
			setFakeCurrentTime(fakeCurrentTime + 1000)
		}, 1000)
		return () => clearInterval(interval)
	}, [fakeCurrentTime, currentTime, isPlaying])

	const PlayingIcon = isPlaying ? PauseIcon : PlayIcon

	const playingTime = fakeCurrentTime / 1000

	const end = endTime / 1000

	const progressPercent = Math.round((playingTime / end) * 100)

	console.log({
		playingTime,
		end,
		progressPercent,
	})

	const timeFormatted = getFormattedTime(playingTime)

	const endTimeFormatted = getFormattedTime(end)

	const containerVariants = {
		playing: {
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.1,
			},
		},
		paused: {},
	}

	const barVariants = {
		playing: {
			height: ['20%', '100%', '20%'],
			transition: { duration: 0.7, repeat: Infinity, ease: 'easeInOut' },
		},
		paused: {
			height: '20%',
			transition: { duration: 0.7, ease: 'easeInOut' },
		},
	}

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-row items-center justify-between gap-4'>
				<div className='flex flex-row items-center gap-4'>
					{/* <img src="/placeholder.svg" alt="Album Cover" width={64} height={64} className="rounded-lg" /> */}
					<img
						src={image}
						alt={title.name}
						width={64}
						height={64}
						className='rounded-lg'
					/>
					<div className='w-full flex flex-col gap-1'>
						<Link
							className='text-lg font-bold text-foreground line-clamp-1 hover:underline'
							href={title.href}
						>
							{title.name}
						</Link>
						<Link
							className='text-sm text-muted-foreground line-clamp-1 hover:underline'
							href={artist.href}
						>
							{artist.name}
						</Link>
					</div>
				</div>
				{/* <PlayingIcon className='shrink-0w-5 h-5 text-muted-foreground' /> */}
				<m.div
					className='flex space-x-1 items-center justify-center w-8 h-8 max-h-8 overflow-hidden'
					variants={containerVariants}
					initial='paused'
					animate={isPlaying ? 'playing' : 'paused'}
				>
					{[0, 1, 2].map((i) => (
						<m.div
							key={i}
							className='w-1 rounded-full bg-primary'
							variants={barVariants}
						/>
					))}
				</m.div>
			</div>
			<div className='flex flex-col gap-2'>
				<Slider
					className='w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-primary [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform'
					value={[progressPercent]}
				/>
				<div className='flex justify-between text-sm text-muted-foreground'>
					<div>{timeFormatted}</div>
					<div>{endTimeFormatted}</div>
				</div>
			</div>
		</div>
	)
}
