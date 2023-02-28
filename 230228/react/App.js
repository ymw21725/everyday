import { useRef, useState } from 'react';
import OutputText from './subModule/OutputText';
import InputText from './subModule/InputText';
import './App.css'


export default function App() {
    const [studentInfo, setStudentInfo] = useState(
        [
            {
                stNum :2,
                stText : '괴물만들기',
                stName : '힘호준'
            },
            {
                stNum : 1,
                stText : '괴롭히기',
                stName : '박성연'
                
            },
        ]  
    ),

    [textInsertName, setTextInsertName] = useState(''),   // 이름입력
    [textInsertText, setTextInsertText] = useState(''),   // 제목입력
    [textDeleteNum, setTextDeleteNum] = useState(''),   // 삭제?

    inputBox = useRef(),
    inputBox2 = useRef(),
    
    stNum = useRef(3);

    // setTextDeleteNum('');

    function onChangeInput(e) {
        setTextInsertName(e.target.value);
        setTextInsertText(e.target.value);// 이쪽 함수 완료.
        setTextDeleteNum(e.target.value);

        // console.log(e.target.value);
        
    }

    function regidentSt() {
        if(textInsertName && textInsertText) {
            const addSt = {
                stNum : stNum.current,
                stText : textInsertText,
                stName : textInsertName
            }

            setStudentInfo([addSt, ...studentInfo]);
            stNum.current++;
            setTextInsertName('')
            setTextInsertText('')
            
        }
        inputBox.current.focus();
        
    }
    
    function removeSt() {
        
        
        setStudentInfo(studentInfo.filter((e) => e.stNum !== +textDeleteNum));
        setTextDeleteNum('')
    }

    console.log(stNum)

   return (
      <>
        <OutputText studentInfo = {studentInfo}/>
        <div>

        <InputText stNum = {stNum} inputBox={inputBox} 
        textDeleteNum = {textDeleteNum} 
        inputBox2={inputBox2}  onChangeInput= {onChangeInput} 
        textInsertName = {textInsertName} 
        textInsertText = {textInsertText} 

        setTextInsertName={setTextInsertName}
        setTextInsertText={setTextInsertText}
        setTextDeleteNum={setTextDeleteNum}

         regidentSt={regidentSt} removeSt = {removeSt}/>
        </div>
      </>
   );
}