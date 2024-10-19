import React, { useEffect } from 'react'
//내답:1번 실행됨
//정답 : 맨처음 사이트 접속해서 quiz01컴포넌트 최초 렌더링될때 한번, **그 이후에 컴포넌트가 재 랜더링 될 때마다 실행.
function Quiz02() {
   useEffect(() => {
      console.log('Component rendered')
   })

   return <div>Hello World</div>
}

export default Quiz02
