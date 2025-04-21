import React from 'react'

export default function AnimeDetail(props) {
  return (
    <>
        <div className='container'  style={{backgroundImage:`url(${props.image})`}}>
        <h2>{props.name}</h2>
            <p>{props.pg}</p>
            <p>{props.quality}</p>
            <p>{props.sub}</p>
            <p>{props.dub}</p>
            <p>{props.total}</p>
            <p>{props.format}</p>
            <p>{props.duration}</p>
            <p>{props.desc}</p>
        </div>
    </>
  )
}
