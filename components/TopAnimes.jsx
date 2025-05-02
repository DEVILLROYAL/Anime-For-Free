import Card from "./Card"

export default async function TopAnimes() {

    const ul = 'https://myanime-dun.vercel.app/aniwatch/';
    const data = await fetch(ul);
    let res = await data.json(); 
    const topTen = await res.top10Animes.day;

  return (
    <>
             <div id="libraury-border">
                <div id="libraury-header">
             <div id="libraury-title" >
               <h4>Top 10 Animes</h4>
               </div>
               <div id="libraury-button" >
               <button>Day</button>
               </div>
               </div>
               <div id="container">
                 {topTen.map((item, index)=>{return( <Card key={item.id} id={item.id} image={item.img} name={item.name} rank={item.rank} /> )})}
               </div>
               </div>
    </>
  )
}
