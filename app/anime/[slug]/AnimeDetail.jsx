import React from 'react'

export default function AnimeDetail(props) {
  return (
    <>
       <div id="animedetail-border">
        <div id="detail-title">
        <h1>{props.name}</h1>
        </div>
        <div id="detail-type">
        <h4>{props.type}</h4>
        </div>
        <div id="detail-rating">
        <p>{props.rating}</p>
        </div>
       </div>
    </>
  )
}
