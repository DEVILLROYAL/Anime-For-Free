'use client'

import { useRouter } from "next/navigation"

export default function SearchComponent(props) {
  
  const router = useRouter();
  const handleSelectClick = async (slug) => {
    router.push(`/anime/${slug}`);
  };

  return (
    <>
              <div className="card"  style={{cursor:"pointer"}} onClick={()=>handleSelectClick(props.id)} id="card">
            <div  id='card-image' style={{backgroundImage:`url(${props.image})`}}></div>
            <div id="card-title">
            <div id='trend-title' >{props.name}</div>
            </div>
            <p id='card-rank'>{props.format}</p>
            {props.pg !== false && (<p id='card-pg'>{props.pg}</p>)}
          </div>
    </>
  )
}
