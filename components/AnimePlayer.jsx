'use client'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"),{ssr: false});

export default function AnimePlayer(props) {
  return (
    <>
       <div id="animeplayer-border">
        <ReactPlayer controls url="https://ea.netmagcdn.com:2228/hls-playback/32463ee95246022ada2f99f35d5e575d88fde34129af86463cec97af69ecf094028b4c516c9ae8772a7aefaab576fa16ae0ffcb663f154949f720d2f3b4bcadd8d292ed6ddb4fe60460fe82dcdb10be40e3629dfa2c59425a36b52d9c39aef1b7779f724bfc2184756d5447658dbf654f9da59f205bda62c22689d08277db98e220f869dfbd924f5c40167714b8110f6/master.m3u8" width='900px' height='500px' />
        </div>
    </>
  )
}
