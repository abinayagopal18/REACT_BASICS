import { useState } from "react";

export default function TwoWayBinding()
{
    const[name, setName] = useState("");
    const changeName = (val) => setName(val.target.value)

    return(
        <div>
            <input onChange={changeName} value ={name}></input>
            <p>Name is {name}</p>
        </div>
    )
}