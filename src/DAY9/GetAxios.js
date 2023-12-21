import axios from "axios";
import React, { useState,useEffect } from "react"

export default function GetAxios()
{
    const [name, setName] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then(res =>{
            const store = res.data;
            setName(store);
        })
    });
    return(
        <div>
            <h1>Get Axios:</h1>
            <ul>
                {name.map((person) => <li key={person.id}> {person.name} </li>)}
            </ul>
        </div>
    )
}