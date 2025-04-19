'use client'
import {useState} from "react";
import Search from "./Search";

export default function SearchScript() {

  const [quary, setQuary] = useState();
  const [page, setPage] = useState(1);

  const handleSearchClick = async () => {
    const url = `https://aniwatch-api-v1-0.onrender.com/api/search/${quary}/${page}`;
    const data = await fetch(url);
    let res = data.json();
  }; 

  return (
    <>
        <Search onClick={handleSearchClick} onChange={e => setQuary(e.target.value)} value={quary} />
    </>   
  )
}
