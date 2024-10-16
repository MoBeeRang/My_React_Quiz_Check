import React, { useState, useRef } from 'react'

function Quiz07() {
   const [textLength, setTextLength] = useState(0)
   const inputRef = useRef(null)
   //주의, 컴포넌트에 선언만 하여 사용하고, 값을 꺼내쓰거나 읽거나 하는 변화시키지 말것을 권장한다고 한다. (근데 그 경우가 정확히 어떤상황건지 모르겠음.)
   //입력필드 포커스 맞출때, 리엑트 외부 모달, 차트 라이브러리 사용할때 해당 DOM에 직접 접근해야할때, 저장된 값이 렌더링과 무관하게 유지 되어야 할때. ex)타이머, 이전상태참조 때만 사용권장.
   //리엑트의 주된 철학과 위배됨 (상태 기반 렌더링), useRef는 재 렌더링을 발생시키지 않으므로 state사용해야함 :: 의 이유등으로 필요한 경우 제외하고 사용하지 말라고함.
   const calculateLength = () => {
      setTextLength(inputRef.current.value.length)
      // 입력 필드의 텍스트 길이를 계산하는 로직을 작성하세요.
   }

   return (
      <div>
         <input type="text" ref={inputRef} />
         <button onClick={calculateLength}>Calculate Length</button>
         <p>Text Length: {textLength}</p>
      </div>
   )
}

export default Quiz07
