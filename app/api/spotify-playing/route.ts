import { spotify } from '@/lib/spotify'

export const runtime = 'edge'
export const revalidate = 5

export async function GET() {
	const spotifyApi = await spotify()

	const currentlyPlaying = await spotifyApi.player.getCurrentlyPlayingTrack()

	return Response.json(currentlyPlaying)
}
