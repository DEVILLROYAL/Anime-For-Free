import SearchComponent from "../../../components/SearchComponent";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://aniwatch-api-v1-0.onrender.com/api/search/${slug}/page`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.searchYour;

return(
      <>
          <div  className="container" id="search-result-control">
            <div className="row" id="search-result">
              {searchData.map((item, index)=>{ return (<div key={item.idanime} className="col my-1" id="search-col" >
                <SearchComponent
                name={item.name}
                id={item.idanime}
                image={item.img}
                format={item.format}
                pg={item.pg}
                /></div>)})}
              </div>
           </div>
      </>
  )  
}
