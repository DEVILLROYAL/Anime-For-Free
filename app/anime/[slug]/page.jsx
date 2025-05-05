import TrailerPlayer from '@/components/TrailerPlayer';
import AnimeDetail from '../../../components/AnimeDetail';
import Episodes from '@/components/Episodes';


export default async function AnimePage({ params }) {
    const { slug } = await params;
    const ul = `https://aniwatch-api-v1-0.onrender.com/api/related/${slug}`;
    const data = await fetch(ul);
    let res = await data.json();
    const animeData = await res.infoX;

    const lnk = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`
    const info = await fetch(lnk);
    const cmData = await info.json();
    const tlr = await cmData.data[0].trailer;
    const titles = await cmData.data;

  return (
        <>
               <div id="detail-border">
                <div id="detail-player">
                    {titles.map((item,index)=>{return(<AnimeDetail key={index} name={item.title_english} duration={item.duration} episodes={item.episodes} type={item.type} rating={item.rating} />)})}
                    <div id="youtube-player">
                       <TrailerPlayer url={tlr.embed_url} />
                       <div id="black-filter"></div>
                    </div>
                    </div>
                <div id="detail-desc"> 
                <p>{titles[0]?.synopsis}</p>
                </div>
                <div id="libraury-title" >
                  <div id='lib-child'>
                  <h4>Episode List</h4>
                  </div>
                  </div>
                  <div className="container" id="search-result-control" >
                  <div className="row" id='search-result'>
                 </div>
                 </div>

                </div>
        </>
  )
}
