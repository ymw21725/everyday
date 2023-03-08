import ContentLists from './ContentLists/ContentLists';
import InputUserInfo from './InputUserInfo/InputUserInfo';
import { useState } from 'react';
import './App.css';

export default function App() {
   const [userList, setUserList] = useState([
      {
         serialNum: 2,
         userName: '김호준',
         subject: '괴물만들기',
         content: '야 ~ 밥목고 하자 ~',
      },
      {
         serialNum: 1,
         userName: '박성연',
         subject: '괴롭히기',
         content: '이 바보들아 왜 말을 안들어!!',
      },
   ]);

   const [inputData, setInputData] = useState({
      serialNum: 3,
      delSerialNum: '',
      editIdx:0,
      userName: '',
      subject: '',
      content: '',
      togglebtnValue:false
   });

   function loadList(user,i) {
      setInputData({
         ...inputData,
         editIdx : i,
         userName: user.userName,
         subject: user.subject,
         content: user.content,
         togglebtnValue: true,
      });
   }

   return (
      <div id='noticeboard'>
         <h1>게시판</h1>
         <ContentLists userList={userList} loadList={loadList} />
         <InputUserInfo
            userList={userList}
            setUserList={setUserList}
            inputData={inputData}
            setInputData={setInputData}
         />
      </div>
   );
}