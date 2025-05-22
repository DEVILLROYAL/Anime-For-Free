import Server from '@/components/Cards/Server';
import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default async function StreamPage({ params }) {
  const { slug } = await params;

  const ul = `https://test-delta-eight-77.vercel.app/api/v2/hianime/episode/sources?animeEpisodeId=${decodeURIComponent(slug)}&server=hd-2&category=sub`;
  const data = await fetch(ul);
  const res = await data.json();
  const stream = await res?.data?.sources[0].url;

  const jikanUl = `https://api.jikan.moe/v4/anime/${res.data.malID}`;
  const jikanData = await fetch(jikanUl);
  const jikanRes = await jikanData.json();
  console.log(jikanRes.data.title_english);

  return (
    <>
        <div id="stream-p-main">
          <div id="stream-p">
            <div id="t-stream">
              <div id="stream-b">
                <StreamPlayer url={stream} />
              </div>
              <div id="stream-controls"></div>
            </div>
            <div id="t-detail">
              <div id="detail-b">
                <div id="p-title">
                  <p>{jikanRes.data.title_english}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}