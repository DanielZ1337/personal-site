import {Metadata} from "next";
import he from "he";
import {YouTubeSearchReponseSnippetIdVideo} from "@/types/youtube-response";
import {getDictionary} from "@/dictionaries/utils/dictionaries";

export const metadata: Metadata = {
    title: 'YouTube'
}

export default async function Page({params: {lang}}: { params: { lang: string } }) {
    const youtubeData = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=id,snippet&channelId=UCgwEofmAfTn9Crpc3NdYSQw&maxResults=10&key=AIzaSyCN5qThtBywG_VLnafinhpQoT7LICY4M2c&type=video').then(async res => await res.json()) as YouTubeSearchReponseSnippetIdVideo
    const videos = youtubeData.items
    const dict = await getDictionary(lang)

    return (
        <div className={"flex-1 flex-col flex text-center -mt-16 mb-16"}>
            <div className={"h-[100dvh] w-full top-0 left-0 -z-50 bg-background absolute"}/>
            <div
                className={"bg-neutral-200 dark:bg-black min-h-screen bg-gradient-to-b from-neutral-200 dark:from-black from-75% to-100% to-background dark:to-background"}>
                <div className={"mt-40 flex-1 flex-col flex items-center h-full"}>
                    <h1 className={"text-5xl font-bold"}>YouTube</h1>
                    <p className={"text-2xl mt-6 mb-10 dark:text-muted-foreground"}>{dict.youtube.description}</p>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[75vw]"}>
                        {videos.map((video, index) => (
                            <div key={video.id.videoId} className={"bg-neutral-200 dark:bg-black rounded-xl p-4"}>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    title={video.snippet.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className={"rounded-xl"}
                                />
                                <h2 className={"text-2xl font-bold mt-4"}>{he.decode(video.snippet.title)}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}