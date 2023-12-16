import React from 'react'
function Display(props)
{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}


export default function ListProps() {
    const player = ["VIRAT", "DHONI","ROHIT","PANT","MAXI"]
    const playerName = player.map((pname, index) => <Display key = {index  } name = {pname}></Display>)
  return (
    <div>
      <ul>
        {playerName}
      </ul>
    </div>
  )
}
