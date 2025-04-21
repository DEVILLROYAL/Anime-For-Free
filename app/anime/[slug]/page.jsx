import React from 'react'
import AnimeDetail from './AnimeDetail';

export default async function AnimePage({ params }) {
    const { slug } = await params;
    const ul = `https://aniwatch-api-v1-0.onrender.com/api/related/${slug}`;
    const data = await fetch(ul);
    let res = await data.json();
    const animeData = await res.infoX;

  return (
        <>
           <div>
               {animeData.map((item,index) => {return( <div key={item.id} >
                <AnimeDetail
                name={item.name} 
                pg={item.pganime}
                image={item.image}
                quality={item.quality} 
                sub={item.epsub} 
                dub={item.epdub} 
                totel={item.totelep} 
                format={item.format} 
                duration={item.duration}
                desc={item.desc} 
                /></div>)} )}
           </div>
        </>
  )
}
