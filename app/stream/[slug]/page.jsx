import Server from '@/components/Cards/Server';
import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const proxyUrl = `https://the-stream-proxy.vercel.app/m3u8-proxy?url=`;
  console.log(slug);

  return (
    <div>
      <StreamPlayer url={proxyUrl}/>
      <Server/>
    </div>
  );
}