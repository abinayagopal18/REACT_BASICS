import React from 'react'

export default function Hero({heroName}) {
    if(heroName === "GILL")
    {
        throw new Error("NOT A PRINCE");
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}
