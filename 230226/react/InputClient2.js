import { useState } from "react"; 
// useStates아님. useState!!

export default function InputClient() {
    const [inputValue, setInputValue] = useState(''),   // 입력값.
        [clientName, setclientName] = useState('');          // 입력 확인을 했을 때의 출력값.

    function onChangeInput(e) {
        setInputValue(e.target.value);  // 변경하면 계속 실행?넣어줌.
    }

    function confirm() {
        setclientName(inputValue);  // setClientName호출하여 inputValue값을 ClientName에 넣는다.
    }

    // 동기화 끊음.!!
    /*
        < "다시입력" onClick 이벤트 >

    - "다시입력" 버튼을 클릭했을 때 입력값 변수(inpuValue)에 빈 문자열 할당.
      하기의 이벤트 처리로 입력상태값(inputValue)은 초기화 되어 출력상태값(clientName)에
      전달함으로써 "확인완료" 버튼을 클리했을 때 빈 문자열로 변환되어 출력되는 것을 확인
      가능.
      하지만 입력상태값에만 초기화된 것 뿐이지 input 상자는 초기화되지 않아 값이 그대로
      남아 있는 것을 확인 가능.
    */
    function tryagain() {
        setInputValue('');  // setInputValue에 빈문자열 넣어줌. 넣어줘서 inputValue에 할당이 되나
        setclientName('');                    // client에 할당한것이 아니므로 입력된 상태에서 다시 입력을 클릭하여도
                         // 적용이 안됬을 뿐 inputValue에는 빈문자열이 있다.
                            // 그 후 다시 확인완료 누르면 빈문자열로 변한다.
                            // 그러나 입력창에 항목들은 계속 남아있다.(점차점차 고칠 예정)
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            value={inputValue}  // value property이용하여 inputValue값 이용.
                            onChange={onChangeInput}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button> 
                    {/* 확인완료 버튼 클릭 시 confirm으로 가서. */}
                    <button onClick={tryagain}>다시입력</button>
                    {/* 다시입력 버튼 클릭 시 tryagain으로 감. */}
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}