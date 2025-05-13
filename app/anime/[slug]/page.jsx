import TrailerPlayer from '@/components/TrailerPlayer';
import AnimeDetail from '../../../components/AnimeDetail';
import Episodes from '@/components/Episodes';


export default async function AnimePage({ params }) {
    const { slug } = await params;

    const lnk = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`
    const info = await fetch(lnk);
    const cmData = await info.json();
    const tlr = await cmData.data[0].trailer;
    const titles = await cmData.data;
    const tlrImage = await cmData.data[0].images.webp;

  return (
        <>
               <div id="detail-border">
                <div id="detail-player">
                    {titles.map((item,index)=>{return(<AnimeDetail key={index} name={titles[0].title_english ?? titles[0].title} duration={item.duration} episodes={item.episodes} type={item.type} rating={item.rating} />)})}
                    {tlr.embed_url === null ? <div id="trailerImg-border">
                      <img src={tlrImage.large_image_url} id='trailerImage' />
                      <div  id='trailerImage-2'></div>
                    </div> : 
                    <div id="youtube-player">
                       <TrailerPlayer url={tlr.embed_url} />
                       <div id="black-filter"></div>
                    </div>
                      }
                    </div>
                <div id="detail-desc"> 
                <p>{titles[0]?.synopsis}</p>
                </div>
                </div>
        </>
  )
}
