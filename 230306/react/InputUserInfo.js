export default function InputUserInfo({ userList, setUserList, inputData, setInputData,tmp1 }) {
    // console.log(toggleValue)
    // const {userList,setUserList,inputData,setInputData,toggleValue} = initialData;
    function onChangeInput(e) {
        const {name, value}= e.target;

        setInputData({
            ...inputData,
            [name]:value,
        });
    }

    function regidentList() {
        if(inputData.userName && inputData.subject && inputData.content){
            setUserList([
                {
                    serialNum:inputData.serialNum,
                    userName:inputData.userName,
                    subject:inputData.subject,
                    content:inputData.content,
                },
                ...userList,
            ]);

            setInputData({
                ...inputData,
                serialNum:inputData.serialNum+1,
                userName:'',
                subject:'',
                content:'',
            });
        }
    }

// 하나만 입력이 안되고 전체적으로 먹는것 고치기. 
    function modifyList(v) {
        // if(subject && content){

        //     userList[IndexNum] = {
        //         ...userList[IndexNum],
        //         subject,
        //         content,
        //     }
            
            userList.map(v => {
                if (v.serialNum === inputData.serialNum) {
                    v.subject = inputData.subject;
                    v.content = inputData.content;
                }
    
            })
           
            cancelList();
        // }
    }


    

    function cancelList() {
        setInputData({
            ...inputData,
            userName :'',
            subject :'',
            content :'',
            toggleValue : true,
         });   

    }

    function removeList() {
        if(inputData.delSerialNum){
            setUserList(userList.filter(el=>el.serialNum !== +inputData.delSerialNum));

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
                    value={inputData.userName}
                    placeholder='한글로만 입력해라'
                    onChange={onChangeInput}
                    disabled = {!inputData.toggleValue}
                />
            </label>
            <label className="subject">제목
                <input
                    type="text"
                    name="subject"
                    value={inputData.subject}
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
                    value={inputData.content}
                    placeholder='이쁘게 쓰시오...'
                    onChange={onChangeInput}
                ></textarea>
            </label>
            <button onClick={regidentList} disabled= {!inputData.toggleValue}>등록</button>
            <button onClick={modifyList} disabled = {inputData.toggleValue}>수정</button>
            <button onClick={cancelList} disabled = {inputData.toggleValue}>취소</button>

            <label className="delSerialNum">삭제 등록번호
                <input
                    type="text"
                    name="delSerialNum"
                    value={inputData.delSerialNum}
                    placeholder='삭제할 등록번호 입력해봐라...'
                    onChange={onChangeInput}
                />
            </label>
            <button onClick={removeList} disabled = {!inputData.toggleValue}>삭제</button>
        </div>
    );
}