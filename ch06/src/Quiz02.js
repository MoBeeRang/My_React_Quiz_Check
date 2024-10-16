import React, { useEffect } from 'react'
//내답:1번 실행됨
function Quiz02() {
   useEffect(() => {
      console.log('Component rendered')
   })

   return <div>Hello World</div>
}

export default Quiz02
