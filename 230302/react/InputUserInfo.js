import { useState } from 'react';

export default function InputUserInfo({ userList, setUserList }) {
    const [inputData, setInputData] = useState({
        serialNum: 3,
        delSerialNum:'',
        userName: '',
        subject: '',
        content: '',
    }),
        {serialNum, delSerialNum, userName, subject, content} = inputData;

    function onChangeInput(e) {
        const {name, value}= e.target;

        setInputData({
            ...inputData,
            [name]:value,
        });
    }

    function regidentList() {
        if(userName && subject && content){
            setUserList([
                ...userList,
                {
                    serialNum,
                    userName,
                    subject,
                    content,
                },
            ]);

            setInputData({
                ...inputData,
                serialNum:serialNum+1,
                userName:'',
                subject:'',
                content:'',
            });
        }
    }

    function removeList() {
        if(delSerialNum){
            setUserList(userList.filter(el=>el.serialNum !== +delSerialNum));

            setInputData({
                ...inputData,
                delSerialNum:'',
            });
        }
    }

    return (
        <div className="inputForm">
            <label className="userName">사용자
                <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder='한글로만 입력해라'
                    onChange={onChangeInput}
                />
            </label>
            <label className="subject">제목
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    placeholder='제목은 파격적으로...'
                    onChange={onChangeInput}
                />
            </label>
            <label className="content">글쓰기
                <textarea
                    cols="50"
                    rows="10"
                    type="text"
                    name="content"
                    value={content}
                    placeholder='이쁘게 쓰시오...'
                    onChange={onChangeInput}
                ></textarea>
            </label>
            <button onClick={regidentList }>등록</button>

            <label className="delSerialNum">삭제 등록번호
                <input
                    type="text"
                    name="delSerialNum"
                    value={delSerialNum}
                    placeholder='삭제할 등록번호 입력해봐라...'
                    onChange={onChangeInput}
                />
            </label>
            <button onClick={removeList }>삭제</button>
        </div>
    );
}