import React, { useEffect, useState } from 'react'

export default function UseEffectCount() {

    const[count, setCount] = useState(0);
    useEffect(() => 
    {
        document.title = `Count is ${count}` 
    })
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>CLICK ME</button>
    </div>
  )
}
