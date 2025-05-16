'use client'

import {useRouter} from "next/navigation"

export default function StreamButton(props) {
    const router = useRouter();

    const handleSelectClick = async (slug) => {
        router.push(`/stream/${slug}`);
    };
  return (
    <>
       <div id="watchButton-border">
        <button type="button" onClick={()=>handleSelectClick(props.id)} > Watch Now </button>
       </div>
    </>
  )
}
