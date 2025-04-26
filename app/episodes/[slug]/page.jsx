import AnimePlayer from '@/components/AnimePlayer';
import SourcePlayer from '@/components/SourcePlayer';
import React from 'react'

export default async function EpisodePage({params}) {
    const {slug} = await params;
    console.log(slug);

    const ul = `https://aniwatch-api-v1-0.onrender.com/api/server/${slug}`;
    const data = await fetch(ul);
    let res = await data.json();
    const source = await res.dub;

    const streamData = await fetch(`https://aniwatch-api-v1-0.onrender.com/api/src-server/${source[1].srcId}`);
    let streamRes = await streamData.json();
    console.log(source);


  return (
    <>
       <div id="anime-border">
        <AnimePlayer sourcelink={source[0].srcId} />
        <div id="source-border">
              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Source
                </button>
                <div className="dropdown-menu">
                {source.map((item, index)=>{return(<SourcePlayer key={index} sourcename={item.server} />)})}
                </div>
              </div>
        </div>
       </div>
    </>
  )
}
