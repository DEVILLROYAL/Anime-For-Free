import WatchPage from '@/components/WatchPage'

export default async function page({params}) {
    const {slug} = await params;

        const ul = `https://youtubeapi-tmc9.onrender.com/api/playlist?playlistId=${slug}`;
        const data = await fetch(ul);
        let res = await data.json();

  return (
    <>
        <WatchPage url={res[0].embedUrl} />
    </>
  )
}
