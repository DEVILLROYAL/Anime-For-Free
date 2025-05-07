import Card from "./Card";
import Slidebtn from "./Slidebtn";

export default async function Trend(props) {

  const ul = 'http://localhost:3000/hindi-dub-anime';
  const data = await fetch(ul);
  let res = await data.json();
  console.log(res);

  return (
    <>
      <div id="libraury-border">
      <div id="libraury-title" >
        <div id='lib-child'>
        <h4>Hindi Dubbed Animes</h4>
        </div>
        <div id="lib-child">
        <Slidebtn view='trendingAnimes'/>
        </div>
        </div>
        <div id="container">
          {res.map((item, index)=>{return( <Card key={item.playlistId} id={item.playlistId} image={index.image} name={index.youtubeTitle} /> )})}
        </div>
        </div>
    </>
  )
}
