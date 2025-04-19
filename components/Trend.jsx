import Card from "./Card";

export default async function Trend(props) {

  const ul = 'https://aniwatch-api-v1-0.onrender.com/api/parse';
  const data = await fetch(ul);
  let res = await data.json();
  let trend = res.trend;

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <h4>Trending Animes</h4>
        </div>
        <div id="container">
          {trend.map((index)=>{return( <Card key={index.iD} image={index.imgAni} name={index.name} rank={index.ranking} /> )})}
        </div>
        </div>
    </>
  )
}
