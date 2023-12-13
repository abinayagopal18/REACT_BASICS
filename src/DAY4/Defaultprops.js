import React from "react";

export default function Defaultprops(props)
{
    return(
       <div>
            <h1>Default Props</h1>
            <p>The value is {props.name}</p>
        </div>
    )
}

Defaultprops.defaultProps = {
    name:"Abi"
}

