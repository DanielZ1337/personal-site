import type { SpotifyPlaybackState } from '@/types/spotify-corrected-types'
import { queryOptions } from '@tanstack/react-query'

export const spotifyQueryOptions = {
	keys: {
		getCurrentlyPlayingTrack: () => ['getCurrentlyPlayingTrack'],
	},
	queries: {
		getCurrentlyPlayingTrack: () =>
			queryOptions({
				queryKey: [...spotifyQueryOptions.keys.getCurrentlyPlayingTrack()],
				queryFn: async () => {
					const response = await fetch('/api/spotify-playing')

					if (!response.ok) {
						throw new Error('Failed to fetch data')
					}
					return (await response.json()) as SpotifyPlaybackState
				},
				// 5 seconds
				refetchInterval: 5000,
			}),
	},
}
