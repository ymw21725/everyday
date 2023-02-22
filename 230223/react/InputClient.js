import { useState } from "react";

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),  // 입력값.
        [clientName, setclientName] = useState('');    // 입력 확인을 했을 때의 출력값.

    function onChangeInput(e) {
        setInputValue(e.target.value);
    }

    /*
            < onKeyDown >

    - 키를 눌렀을 때의 이벤트.
      해당 요소에 대한 이벤트 객체를 통해 keyCode 나 key 필드를 반환 가능.

    keyCode : 해당 키에 대한 정수형태의 유니코드값을 반환.
    key : 해당 키에 대응되는 문자열 형식의 키값을 반환하며, 해당 키가
            특수키인 경우 해당 예약 키워드값 반환.

    ==========================================================================

        < onKeyDown 이벤트에 대한 콜백 함수 >

    - 임의 키가 눌렸을 때 해당 키값이 엔터(Enter) 키로 감지되면 해당
      요소(input 태그)의 value 값을 반환받아 출력값 변수(clientName)에 할당.
    */
    function checkEnter(e) {
        if (e.keyCode === 13) {// 13은 enter에 해당하는 유니코드 값.
            setclientName(e.target.value);
            // setclientName(inputValue);
        }

        // if (e.key === 'Enter') {
        //     setclientName(e.target.value);
        // }
    }

    function confirm() {
        setclientName(inputValue);
    }

    function tryagain() {
        setInputValue('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onChangeInput}
                            onKeyDown={checkEnter}// 임의키값이 눌렸을때 
                        />
                    </label>
                    <label>고객명 
                        {/* label이 여러개 있으면 form태그에 name으로 구분한다. */}
                        <input
                            type="text"
                            value={inputValue}
                            onChange={onChangeInput}
                            onKeyDown={checkEnter}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}