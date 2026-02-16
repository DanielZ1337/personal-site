import { Metadata } from 'next'
import he from 'he'
import { YouTubeSearchReponseSnippetIdVideo } from '@/types/youtube-response'
import { getDictionary } from '@/dictionaries/utils/dictionaries'

export const metadata: Metadata = {
	title: 'YouTube',
}

export default async function Page({ params: { lang } }: { params: { lang: string } }) {
	const youtubeData = await fetch(
		`https://youtube.googleapis.com/youtube/v3/search?part=id,snippet&channelId=UCgwEofmAfTn9Crpc3NdYSQw&maxResults=12&key=${process.env.YOUTUBE_KEY}&type=video`
	).then(async (res) => await res.json()) as YouTubeSearchReponseSnippetIdVideo
	const videos = youtubeData.items ?? []
	const dict = await getDictionary(lang)

	return (
		<main className='flex flex-col items-center px-6 py-20'>
			<div className='max-w-5xl w-full'>
				<h1 className='text-4xl md:text-5xl font-bold text-center'>{dict.youtube.title}</h1>
				<p className='text-xl text-muted-foreground text-center mt-4 mb-12'>{dict.youtube.description}</p>
				{videos.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{videos.map((video) => (
							<div key={video.id.videoId} className='rounded-xl border border-border bg-card overflow-hidden'>
								<iframe
									width='100%'
									height='200'
									src={`https://www.youtube.com/embed/${video.id.videoId}`}
									title={video.snippet.title}
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									className='border-b border-border'
								/>
								<div className='p-4'>
									<h2 className='font-semibold leading-snug'>{he.decode(video.snippet.title)}</h2>
								</div>
							</div>
						))}
					</div>
				) : (
					<p className='text-center text-muted-foreground'>No videos available right now.</p>
				)}
			</div>
		</main>
	)
}
