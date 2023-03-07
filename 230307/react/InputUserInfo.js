export default function InputUserInfo({ userList, setUserList, inputData, setInputData }) {
    const { serialNum, delSerialNum, editSerialNum, userName, subject, content, togglebtnValue } = inputData;

    function onChangeInput(e) {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });
    }

    function regidentList() {
        if (userName && subject && content) {
            setUserList([
                {
                    serialNum,
                    userName,
                    subject,
                    content,
                },
                ...userList,
            ]);

            setInputData({
                ...inputData,
                serialNum: serialNum + 1,
                userName: '',
                subject: '',
                content: '',
            });
        }
    }

    function removeList() {
        if (delSerialNum) {
            setUserList(userList.filter(el => el.serialNum !== +delSerialNum));

            setInputData({
                ...inputData,
                delSerialNum: '',
            });
        }
    }

    function editData() {
        cancel();

        setUserList(userList.map(user => {
            if (user.serialNum === editSerialNum) {
                return {
                    ...user,
                    subject,
                    content,
                }
            } else {
                return user;
            }
        }));
    }

    function cancel() {
        setInputData({
            ...inputData,
            userName: '',
            subject: '',
            content: '',
            togglebtnValue: false,
        });
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
                    disabled={togglebtnValue}
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
            <button onClick={regidentList} disabled={togglebtnValue}>등록</button>
            <button onClick={editData} disabled={!togglebtnValue}>수정</button>
            <button onClick={cancel} disabled={!togglebtnValue}>취소</button>

            <label className="delSerialNum">삭제 등록번호
                <input
                    type="text"
                    name="delSerialNum"
                    value={delSerialNum}
                    placeholder='삭제할 등록번호 입력해봐라...'
                    onChange={onChangeInput}
                />
            </label>
            <button onClick={removeList}>삭제</button>
        </div>
    );
}