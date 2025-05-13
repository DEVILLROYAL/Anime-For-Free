import React from 'react'
import YouTubePlayer from './YoutubePlayer'

export default function WatchPage(props) {
  return (
    <>
       <div id="watch-border">
         <div id="stream-border">
            <div id="previous-border"></div>
            <div id="current-border">
                <YouTubePlayer url={props.url} />
            </div>
            <div id="next-border"></div>
         </div>
       </div>
    </>
  )
}
