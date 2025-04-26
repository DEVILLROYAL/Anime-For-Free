'use client'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function AnimePlayer(props) {
  return (
    <>
       <div id="animeplayer-border">
        <ReactPlayer controls url={props.sourcelink} width='900px' height='500px' />
        </div>
    </>
  )
}
