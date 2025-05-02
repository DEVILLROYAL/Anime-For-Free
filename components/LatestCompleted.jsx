import Card from "./Card";

export default async function LatestCompleted() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json();
    const lcAnime = await res.featuredAnimes.latestCompletedAnimes;

  return (
    <>
            <div id="libraury-border">
              <div id="libraury-title" >
                <h4>Trending Animes</h4>
                </div>
                <div id="container">
                  {lcAnime.map((index)=>{return( <Card key={index.id} id={index.id} image={index.img} name={index.name} /> )})}
                </div>
                </div>
    </>
  )
}
