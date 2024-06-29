import { SpotifyApi } from '@spotify/web-api-ts-sdk'
import { getSpotifyAccessTokenWithRefreshToken } from './utils'
import { unstable_noStore } from 'next/cache'

const { SPOTIFY_CLIENT_ID, SPOTIFY_REFRESH_TOKEN } = process.env

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REFRESH_TOKEN) {
	throw new Error('Missing Spotify Client ID or Refresh Token')
}

export const spotify = async () => {
	unstable_noStore()
	return SpotifyApi.withAccessToken(SPOTIFY_CLIENT_ID, {
		...(await getSpotifyAccessTokenWithRefreshToken(SPOTIFY_REFRESH_TOKEN)),
		refresh_token: SPOTIFY_REFRESH_TOKEN,
	})
}
