import YouCard from "./YouCard";
import Slidebtn from "./Slidebtn";

export default async function YouList(props) {

  const ul = 'https://youtubeapi-tmc9.onrender.com/api/home';
  const data = await fetch(ul);
  let res = await data.json();

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
          {res.map((item, index)=>{return( <YouCard key={item.playlistId} id={item.engTitle ?? item.animeTitle} playlist={item.playlistId} image={item.image} name={item.engTitle ?? item.animeTitle} /> )})}
        </div>
        </div>
    </>
  )
}
