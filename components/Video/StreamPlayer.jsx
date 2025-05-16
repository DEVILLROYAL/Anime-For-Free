'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useState, useEffect } from 'react';
import Hls from 'hls.js';

export default function StreamPlayer({ url }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Hls.isSupported() && url) {
      const video = document.createElement('video');
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
        setHasError(true);
        setIsLoading(false);
      });
    }
  }, [url]);

  return (
    <div id="stream-p-border">
      {isLoading && <p>Loading stream...</p>}
      {hasError && <p>Error loading stream. Please try again.</p>}
      <ReactPlayer
        url={url}
        controls
        playing
        config={{
          file: {
            forceHLS: true,
            hlsOptions: {
              xhrSetup: (xhr) => {
                xhr.withCredentials = false; // Ensure no credentials are sent
              },
            },
          },
        }}
        onReady={() => setIsLoading(false)}
        onError={(e) => {
          console.error('Player error:', e);
          setHasError(true);
          setIsLoading(false);
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
}