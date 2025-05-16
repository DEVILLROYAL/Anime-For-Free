import StreamPlayer from '@/components/Video/StreamPlayer';
import React from 'react';

export default function Page() {
  const stream = 'https://windflash93.xyz/_v7/0fece0b01b5b1d19095d6f7bb3cc0be7827e65eac0885997133d5c946d9be3ecc96d33f219a7bb17001d57b274f137777855a64a792e149a39597de79becb0698f75a275a2945bd5dadd493a6183d54b3f8d6ff432860163cfbab1355ccd873c311954e8b86ddcd301d8fc6c28d9048f7e106b83aa5d98f3a20b5857f4fc0bfe/master.m3u8';
  const proxyUrl = `/api/stream?url=${encodeURIComponent(stream)}`;

  return (
    <div>
      <StreamPlayer url={proxyUrl} />
    </div>
  );
}