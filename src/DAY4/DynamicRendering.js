import React , { useState } from "react";
import Defaultprops from "./Defaultprops";
import Parent from "./ParentChildCommunication";

export default function DynamicRendering()
{
    const[x, setX] = useState(10);
    // const changeX = () => setX(8);
    
    let func1;
    if(x > 10)
    {
        func1 = <Parent/>
    }
    else
    {
        func1 = <Defaultprops/>
    }

    return(
        <div>
            <p>{func1}</p>
        </div>
    )
}