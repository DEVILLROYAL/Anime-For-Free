import Card from "./Card";

export default async function UpcomingAnime(props) {

  const ul = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(ul);
  let res = await data.json();
  let upanime = res.topUpcomingAnimes;

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <h4>Upcoming Animes</h4>
        </div>
        <div id="container">
          {upanime.map((item,index)=>{return( <Card key={`${item.id}-${index}`} id={item.id} image={item.img} name={item.name} rank={item.format} /> )})}
        </div>
        </div>
    </>
  )
}
