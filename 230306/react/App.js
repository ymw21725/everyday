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
         content: '123456 ',
      },
   ]);

   const [inputData, setInputData] = useState({
      serialNum: 3,
      delSerialNum:'',
      editSerialNum:'',
      userName: '',
      subject: '',
      content: '',
      toggleValue : true,
  });
      // {serialNum, delSerialNum, userName, subject, content} = inputData;



  function tmp1(userList) {
     let {userName,subject,content,serialNum} = userList;
     setInputData({
      ...inputData,
      serialNum,
      subject,
      userName,
      content,
      toggleValue:false,
      })
  }
   // console.log(userList.toggleValue)
   return (
      <div id='noticeboard'>
         <h1>게시판</h1>
         <ContentLists userList={userList} tmp1 = {tmp1} />
         <InputUserInfo
            userList={userList}
            setUserList={setUserList}
            inputData = {inputData}
            setInputData = {setInputData}
            // tmp1 = {tmp1}
            // toggleValue = {userList.toggleValue}
         />
      </div>
   );
}