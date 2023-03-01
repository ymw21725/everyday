export default function InputText({inputValue,regidentSt,onChangeInput,removeSt}) {

    return (
        <>
            <div>
                <div>
                    <label>사용자
                        <input 
                            name="textName"
                            type="text" 
                            value={inputValue.textName}
                            placeholder="한글로만 입력해라"
                            onChange={onChangeInput}
                        />
                    </label>
                </div>

                <div>
                    <label>제목
                        <input 
                            name="textTitle"
                            type="text"
                            value={inputValue.textTitle}
                            placeholder="제목은 파격적으로"
                            onChange={onChangeInput}
                        />
                    </label>
                </div>

                <div>
                    <label className="write_text" />글쓰기
                </div>

                <textarea 
                    value={inputValue.textContent} 
                    cols="60" rows="20" 
                    name="textContent" 
                    onChange={onChangeInput}
                    placeholder="이쁘게 쓰시오 " >
                </textarea>

                <div>
                    <button className="down_margin" onClick={regidentSt}>등록
                    </button>
                </div>

                <div>
                    <label>삭제 등록번호</label>
                </div>

                <div>
                    <input
                        type="text"
                        id="delete"
                        name="textDelete"
                        placeholder="삭제할 등록번호 입력하세요."
                        value={inputValue.textDelete}
                        onChange={onChangeInput}
                    />
                </div>
                
                <div>
                    <button onClick={removeSt}>삭제</button>
                </div>
            </div>
        </>
    );
}