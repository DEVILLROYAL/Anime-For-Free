import React from 'react'

export default function AnimeDetail(props) {
  return (
    <>
       <div id="animedetail-border">
        <div id="detail-rating">
          {props.pg && 
        <p>{props.rating}</p>
          }
        </div>
        <div id="detail-title">
        <h1>{props.name}</h1>
        </div>
        <div id="detail-detail">
        <div id="detail-type">
        <h4>{props.type}</h4>
        </div>
        <div id="detail-episodes">
          {props.episodes && 
        <p>Episodes- {props.episodes}</p>
          }
        </div>
        <div id="detail-duration">
          {props.duration && 
        <p>Duration- {props.duration}</p>
          }
        </div>
        </div>
       </div>
    </>
  )
}
