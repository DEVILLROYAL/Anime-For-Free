import SearchComponent from "./SearchComponent";

export default async function SearchPage({ params }) {
  const { slug } = await params;

    const ul = `https://aniwatch-api-v1-0.onrender.com/api/search/${slug}/page`;
    const data = await fetch(ul);
    let res = await data.json();
    const searchData = await res.searchYour;

return(
      <>
          <div id="search-result-control">
            <div className="container" id="search-result">
              {searchData.map((item, index)=>{ return ( <SearchComponent key={item.idanime} name={item.name} image={item.img} format={item.format} pg={item.pg} /> )})}
              </div>
           </div>
      </>
  )  
}
