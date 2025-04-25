import React from 'react'

export default async function EpisodePage({params}) {
    const {slug} = await params;
    console.log(slug);

  return (
    <div><p>{slug}</p></div>
  )
}
