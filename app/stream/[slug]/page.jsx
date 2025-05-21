import Server from '@/components/Cards/Server';
import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const ul = `https://test-delta-eight-77.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=${decodeURIComponent(slug)}&server=hd-2&category=sub`;
  const data = await fetch(ul);
  const res = await data.json();
  const stream = await res?.data?.sources[0].url;
  console.log(decodeURIComponent(slug));

  return (
    <div id='stream-b'>
      <div id="stream-detail-b"></div>
      <StreamPlayer url={stream}/>
    </div>
  );
}