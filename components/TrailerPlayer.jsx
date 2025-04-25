'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function TrailerPlayer(props) {
  return (
    <>
       <ReactPlayer
      url={props.url}
      playing
      muted                       
      loop
      height='550px'
      width='950px'
      controls={false}                     
      config={{
        youtube: {
          playerVars: {
            autoplay: 1,                   
            rel: 0,
            modestbranding: 1,
            controls: 0, 
            showinfo: 0,
            frameborder: 0,
            showsearch:0,
            rel:0,
            cc_load_policy:0,
            fs:0,},},}}/>
    </>
  )
}
