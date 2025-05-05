'use client';

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    const actualM3U8Url = 'https://mistyvalley31.live/_v7/32463ee95246022ada2f99f35d5e575d88fde34129af86463cec97af69ecf094028b4c516c9ae8772a7aefaab576fa16ea81871ded50ec098ef40e00a38ff0ac1b7127af41c19fc5c6a5a3cee2727345de574afc0563db6358224a9955b9c74f4cb54dcec3976fa33f23167638050246c1edc148e5345330604a2a13e874374f/master.m3u8';
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(actualM3U8Url)}`;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(proxyUrl);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
      });

      return () => {
        hls.destroy();
      };
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      // Fallback for Safari
      videoRef.current.src = proxyUrl;
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        controls
        width="100%"
        style={{ borderRadius: '8px', background: '#000' }}
      />
    </div>
  );
}
