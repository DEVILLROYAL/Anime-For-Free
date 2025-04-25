'use client'
import { useRouter } from "next/navigation";

export default function Episodes(props) {
    
const router = useRouter();
const handleSelectClick = async (slug) => {
    router.push(`/episodes/${slug}`);
    console.log({slug});
};

  return (
    <>
         <div  id='ep-container'>
            <div id="episode-border" onClick={()=>handleSelectClick(props.episode)} style={{backgroundImage:`url(${props.image})`,cursor:'pointer'}} >
                <div id="episode-filter">
                <p id='ep-order' >{props.order}</p>
                <h6 id='ep-name' >{props.name}</h6>
                </div>
            </div>
         </div>
    </>
  )
}
