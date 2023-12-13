import React from "react";

export default function Parent()
{
    return(
        <div>
            <h1>From Parent</h1>
            <Child num ={18}/>
        </div>
    )
}

function Child(props)
{
    return(
        <div>
            <h1>From Child</h1>
            <p>The number is {props.num}</p>
        </div>
    )
}