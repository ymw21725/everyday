import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState('');  // 입력값.

    /* 
        < 동기 변수에 대한 상태값 할당을 통한 동기변수와 비동기변수의 동기화 >

    - 동기 변수에 상태값을 할당함으로써 비동기 변수에 대한 변화에 따른 동기식들이
      재렌더링되는 특성으로 인한 비동기 변수와 동기 변수의 동기화 실현.
    */
    const clientName = inputValue; // 동기변수에 inputValue값 넣어줌(비동기 변수처럼 작동함.)
                                    

                                    //동기변수는 랜더링이 원래 한번만 되지만 상태값은 재렌더링되므로.

    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            onChange={onChangeInput}
                        />
                    </label>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}