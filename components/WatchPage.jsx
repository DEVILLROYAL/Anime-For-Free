import React from 'react'
import YouTubePlayer from './YoutubePlayer'

export default function WatchPage() {
  return (
    <>
       <div id="watch-border">
         <div id="stream-border">
            <div id="previous-border"></div>
            <div id="current-border">
                <YouTubePlayer url='https://www.youtube.com/embed/4A_X-Dvl0ws?enablejsapi=1&wmode=opaque&autoplay=1' />
            </div>
            <div id="next-border"></div>
         </div>
       </div>
    </>
  )
}
