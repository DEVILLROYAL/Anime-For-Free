import Card from "./Card";

export default async function UpcomingAnime(props) {

  const ul = 'https://aniwatch-api-v1-0.onrender.com/api/parse';
  const data = await fetch(ul);
  let res = await data.json();
  let upanime = res.UpcomingAnime;

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <h4>Upcoming Animes</h4>
        </div>
        <div id="container">
          {upanime.map((index)=>{return( <Card key={index.idani} image={index.imgAnime} name={index.name} rank={index.format} /> )})}
        </div>
        </div>
    </>
  )
}
