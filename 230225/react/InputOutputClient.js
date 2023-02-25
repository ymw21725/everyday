// import { useState } from "react";

// export default function InputOutputClient() {
//     const [InputNameValue, setInputNameValue] = useState(''),   // 고객명
//         [ClientName,setClientName] = useState(''),
//         [InputNumberValue, setInputNumberValue] = useState(''), // 고객번호
//         [ClientNumber, setClientNumber] = useState('');

    

//     function changeName(e) {
//         setInputNameValue(e.target.value);
//     }

//     function changeNumber(e) {
//         setInputNumberValue(e.target.value);
//     }

//     function checkEnter(e) {
//         if(InputNameValue  && InputNumberValue  ) {
//             if(e.key === 'Enter') {

//                 setClientName(InputNameValue);
//                 setClientNumber(InputNumberValue);
//             }

//         }
//     }
    





//     function confirm() {
//         if(InputNameValue && InputNumberValue  ) {

//             setClientName(InputNameValue);
//             setClientNumber(InputNumberValue);
//         }
//     }

//     function againRetry() {
//         setInputNameValue('');
//         // setClientName('');
//         setInputNumberValue('');
//         // setClientNumber('');
//     }

    


//     return (
//         <>
//             <div>
//                 <div>
//                     <label>고객명
//                         <input
//                             type="text"
//                             placeholder="이름을 입력하세요"
//                             onChange={changeName}
//                             onKeyDown={checkEnter}
//                             value={InputNameValue}
//                             name ="name"

//                         />
//                     </label>
//                     <label>고객번호
//                         <input
//                             type="text"
//                             placeholder="고객번호를 입력하세요"
//                             onChange={changeNumber}
//                             onKeyDown={checkEnter}
//                             value={InputNumberValue}
//                             name = "number"
//                         />
//                     </label>

//                     <button onClick={confirm}>확인완료</button>
//                     <button onClick={againRetry}>다시입력</button>
//                 </div>

//                 <div>
//                    {ClientName} 고객님의 고객번호는 {ClientNumber} 입니다.
//                 </div>
//             </div>
//         </>
//     )






// }

import { useState } from "react";

export default function InputOutputClient() {
    const [InputNameValue, setInputNameValue] = useState(''),   // 고객명
        [ClientName,setClientName] = useState(''),
        [InputNumberValue, setInputNumberValue] = useState(''), // 고객번호
        [ClientNumber, setClientNumber] = useState('');

    function changeTotal(e) {
        if(e.target.name === 'name' ) setInputNameValue(e.target.value);
        else if(e.target.name === 'number') setInputNumberValue(e.target.value);
    }

    function checkEnter(e) {
        if(InputNameValue  && InputNumberValue  ) {
            if(e.key === 'Enter') {

                setClientName(InputNameValue);
                setClientNumber(InputNumberValue);
            }

        }
    }

    function confirm() {
        if(InputNameValue && InputNumberValue  ) {

            setClientName(InputNameValue);
            setClientNumber(InputNumberValue);
        }
    }

    function againRetry() {
        setInputNameValue('');
        // setClientName('');
        setInputNumberValue('');
        // setClientNumber('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input
                            type="text"
                            placeholder="이름을 입력하세요"
                            onChange={changeTotal}
                            onKeyDown={checkEnter}
                            value={InputNameValue}
                            name ="name"

                        />
                    </label>
                    <label>고객번호
                        <input
                            type="text"
                            placeholder="고객번호를 입력하세요"
                            onChange={changeTotal}
                            onKeyDown={checkEnter}
                            value={InputNumberValue}
                            name = "number"
                        />
                    </label>

                    <button onClick={confirm}>확인완료</button>
                    <button onClick={againRetry}>다시입력</button>
                </div>

                <div>
                   {ClientName} 고객님의 고객번호는 {ClientNumber} 입니다.
                </div>
            </div>
        </>
    )
}