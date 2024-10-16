import React, { useEffect } from 'react'
//내답:1번 출력됨
function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>
}

export default Quiz01
