import axios from 'axios';
import React, { useState } from 'react'

export default function DeleteAxios() {
    
       const [id, setId] = useState("");
    
        const handleId = (e) => {setId(e.target.value)}
    
        const handleSubmit = (e) =>{
            axios.delete(`http://localhost:3001/user/${id}`)
            .then(res =>{
                console.log(res.data);
            })
            .catch(error =>{console.log("Error Occured " + error);})
        }
  return (

    <div>
        <h1>Delete Axios:</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={id} onChange={handleId} placeholder='ID'></input>
        <button type='submit'>DELETE</button>
      </form>
    </div>
  )
}
