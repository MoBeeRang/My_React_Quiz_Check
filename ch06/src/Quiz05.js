import React, { useState, useMemo } from 'react'
//state가 바뀔 때마다 함수는 모두 실행이 되니까.
function Quiz05() {
   const [number, setNumber] = useState(0)
   const [color, setColor] = useState('blue')

   const isEven = useMomo(() => {
      console.log('Calculating...')
      return number % 2 === 0
   }, [number])

   //혹은
   // const isEven = () => {
   //    console.log('Calculating...')
   //    return number % 2 === 0
   // }
   // const me = useMemo(() => isEven(), [number])

   //혹은 isEven을 컴포넌트 바깥으로 빼고, 매개변수로 number state를 주면 됨.<<이게 제일 낫다고 함. 최적화문제로.

   return (
      <div>
         <input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
         <p style={{ color }}>입력한 숫자는 {isEven ? '짝수' : '홀수'}입니다.</p>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            red
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            green
         </button>
      </div>
   )
}

export default Quiz05
