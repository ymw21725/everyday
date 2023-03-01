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
    )

    const [inputValue, setInputValue] = useState({
        textName : '',
        textTitle : '',
        textContent : '',
        textDelete : '',
    });

    let {textName, textTitle, textContent, textDelete} = inputValue;
    
    
    let stNum = useRef(3);

    

    function onChangeInput(e) {
        const eventOj = e.target;
        setInputValue({
            ...inputValue,[eventOj.name] : eventOj.value
        })
    }

    function regidentSt() {
        if(textName && textTitle && textContent) {
            const addSt = {
                stNum : stNum.current,
                stText : textTitle,
                stName : textName
                
            }

            setStudentInfo([addSt, ...studentInfo]);
            stNum.current++;
            setInputValue({...inputValue, textName : '',
                textTitle : '',
                textContent : '',
                })
           
            
        }
        
    }
    
    function removeSt() {
        
        
        setStudentInfo(studentInfo.filter((e) => e.stNum !== +textDelete));
        
        setInputValue({...inputValue, textDelete : ''})

    }

   return (
      <>
        <OutputText studentInfo = {studentInfo}/>
        <div>

        <InputText  
            inputValue ={inputValue} 
            onChangeInput= {onChangeInput} 
            regidentSt={regidentSt} 
            removeSt = {removeSt}/>
        </div>
      </>
   );
}