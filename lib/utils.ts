import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function shouldOpenInNewTab(href: string) {
	return href.endsWith('.pdf')
}

export function formatSpotifyAccessTokenBody(clientId: string, clientSecret: string) {
	return btoa(`${clientId}:${clientSecret}`)
}

export async function getSpotifyAccessToken() {
	//curl -X "POST" -H "Authorization: Basic base64_encode(client_id:client_secret)" -d grant_type=client_credentials https://accounts.spotify.com/api/token

	const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

	if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
		throw new Error('Missing Spotify Client ID or Secret')
	}

	const response = await fetch('https://accounts.spotify.com/api/token', {method: 'POST',
		headers: {
			Authorization: `Basic ${formatSpotifyAccessTokenBody(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'client_credentials',
		}),
	})

	if (!response.ok) {
		throw new Error('Failed to get Spotify access token')
	}

	return (await response.json()) as {
		access_token: string
		expires: number
		token_type: string
	}
}

export async function getSpotifyAccessTokenWithRefreshToken(refreshToken: string) {
	const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env

	if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
		throw new Error('Missing Spotify Client ID or Secret')
	}

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			Authorization: `Basic ${formatSpotifyAccessTokenBody(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET)}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken,
		}),
	})

	if (!response.ok) {
		throw new Error('Failed to get Spotify access token')
	}
	
	const json = (await response.json()) as {
		access_token: string
		token_type: string
		expires_in: number
		scope: string
	}

	return json
}