import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState('');  // 입력값.

    /*
        < onChange 이벤트에 대한 콜백 함수 >

    - 해당 요소에 변경 사항이 감지될때 마다 해당 요소(input 태그)의 value 값을
      반환받아 입력값 변수(inpuValue)에 할당.(input태그에서 쓰는 placeholder같은것도가능.
    */
    function onChangeInput(e) {
        setInputValue(e.target.value);  //target은 input.input값이 value.
    }

    /* 
        < onChange >

    - 입력과 관련된 태그등에서 변화가 발생했을 때의 이벤트.
    */
    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            onChange={onChangeInput}    // onChange 이벤트이므로 변화 발생시.
                        />
                    </label>
                </div>
                <div>
                    {inputValue} 고객님 안녕하세요 
                    {/* 위의 함수에서 값 넣어줌. */}
                </div>
            </div>
        </>
    );
}