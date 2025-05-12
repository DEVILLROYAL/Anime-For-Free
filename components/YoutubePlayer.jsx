'use client'

import ReactPlayer from "react-player/youtube"

export default function YoutubePlayer(props) {
  return (
    <>
        <ReactPlayer id='ytanime-player' controls url={props.url} height={'100%'} width={'100%'} />
    </>
  )
}
