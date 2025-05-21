'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { useState } from 'react';

export default function StreamPlayer(props) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <div id="stream-p-border">
      {isLoading && <p>Loading stream...</p>}
      {hasError && <p>Error loading stream. Please try again.</p>}
      <ReactPlayer
        url={`https://the-stream-proxy.vercel.app/m3u8-proxy?url=${props.url}`}
        controls
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