import React from 'react'
import GetAxios from './DAY9/GetAxios'
import PostAxios from './DAY9/PostAxios'
import PutAxios from './DAY9/PutAxios'
import DeleteAxios from './DAY9/DeleteAxios'

export default function App() {
  return (
    <div>
      <GetAxios/>
      <PostAxios/>
      <PutAxios/>
      <DeleteAxios/>
    </div>
  )
}

