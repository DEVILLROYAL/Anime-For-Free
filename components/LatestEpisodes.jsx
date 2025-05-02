import Card from "./Card"

export default async function LatestEpisodes() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json();
    const latestEpisodes = await res.latestEpisodes;

  return (
    <>
              <div id="libraury-border">
              <div id="libraury-title" >
                <h4>Latest Episodes</h4>
                </div>
                <div id="container">
                  {latestEpisodes.map((index)=>{return( <Card key={index.id} id={index.id} image={index.img} name={index.name} /> )})}
                </div>
                </div>
    </>
  )
}
