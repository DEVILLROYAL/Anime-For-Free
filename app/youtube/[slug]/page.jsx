import Playlist from '@/components/Playlist';
import YoutubePlayer from '@/components/YoutubePlayer';

export default async function page({params}) {
    const {slug} = await params;

        const ul = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
        const data = await fetch(ul);
        let res = await data.json();
        console.log(res);

  return (
    <>
    <Playlist res={res} />
    </>
  )
}
