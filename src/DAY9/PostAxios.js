import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function PostAxios() {

    const [name, setName] = useState([]);
    const handleChange = (e) => {setName(e.target.value)}

    const handleSubmit = (e) =>{
         e.preventDefault();
        axios.post(`http://localhost:3001/user`,{name})
        .then(res =>{
            console.log(res.data)
        })
    }

  return (
    <div>
      <h1>Axios Post:</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
