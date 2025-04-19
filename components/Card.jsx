export default function Card(props) {
  return (
    <>
         <div className="card" id="card">
            <div  id='card-image' style={{backgroundImage:`url(${props.image})`}}></div>
            <div id="card-title">
            <div id='trend-title' >{props.name}</div>
            </div>
            <p id='card-rank'>{props.rank}</p>
          </div>
    </>
  )
}
