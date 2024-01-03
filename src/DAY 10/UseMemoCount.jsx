import React, { useMemo, useState } from 'react'

export default function UseMemoCount() {

    const[count,setCount] = useState(0);
    const[evenNum,setEvenNum] = useState(2);

    const memoHook = useMemo(function evenNumDouble() {
        console.log("double");
        return evenNum *2;
    },[evenNum])

  return (
    <div>
      <p>The count is {count}.</p>
      <p>The Even Number is {evenNum}.</p>
      <button onClick={() => setCount(count + 1)}>COUNT</button>
      <button onClick={() => setEvenNum(memoHook)}>EVEN NUMBER</button>
    </div>
  )
}
