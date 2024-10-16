import React, { useState,useCallback } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)

   const increment = () => {
      setCount((prevCount) => { return prevCount + 1 })
   }
   const uc = useCallback(()=>increment(),[]) //함수생성 조건 설정

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={uc}>Increment</button>
      </div>
   )
}

export default Quiz06
