import React, { useEffect } from 'react'
//내답:1번 출력됨
//정답: 맨처음 사이트 접속해서 quiz01컴포넌트 최초 렌더링될때 한번만 실행된다.
function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>
}

export default Quiz01
