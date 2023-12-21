import axios from 'axios';
import React, { useState } from 'react'

export default function PutAxios() {
    
       const [id, setId] = useState("");
        const [name, setName] = useState("");
    
        const handleId = (e) => {setId(e.target.value)}
        const handleName = (e) => {setName(e.target.value)}
    
        const handleSubmit = (e) =>{
            axios.put(`http://localhost:3001/user/${id}`,{name})
            .then(res =>{
                console.log(res.data);
            })
            .catch(error =>{console.log("Error Occured " + error);})
        }
  return (

    <div>
        <h1>Put Axios</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleId} placeholder='ID'></input>
        <input type='text' value={name} onChange={handleName} placeholder='NAME'></input>
        <button type='submit'>UPDATE</button>
      </form>
    </div>
  )
}
