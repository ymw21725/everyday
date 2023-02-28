// import OutputText from "./OutputText";

export default function InputText({textDeleteNum,
    regidentSt,onChangeInput,inputBox2,inputBox,removeSt,
    textInsertName,textInsertText,setTextInsertName,setTextInsertText,
    setTextDeleteNum}) {


    // console.log(onChangeInput);
    console.log();
    return (
        <>
            <div>
                <div>
                    <label>사용자
                        <input 
                            name="inputBox"
                            type="text" 
                            value={textInsertName}
                            placeholder="한글로만 입력해라"
                            onChange={(e)=>setTextInsertName(e.target.value)}
                            ref={inputBox}
                        />
                    </label>
                </div>
                <div>
                <label>제목
                    <input 
                    name="inputbox2"
                        type="text"
                        value={textInsertText}
                        placeholder="제목은 파격적으로"
                        onChange={(e)=>setTextInsertText(e.target.value)}
                        ref={inputBox2}
                    />
                </label>
                </div>
                <div>

                <label className="write_text" />글쓰기
                </div>
                    <textarea cols="60" rows="20"placeholder="이쁘게 쓰시오 " ></textarea>      
                <div>

                <button className="down_margin" onClick={regidentSt}>등록</button>
                </div>

                <div>
                    <label>삭제 등록번호

                    </label>
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="삭제할 등록번호 입력하세요."
                        value={textDeleteNum}
                        name="deleteNum"
                        onChange={(e)=>setTextDeleteNum(e.target.value)}
                    />
                </div>
                

                <div>
                    <button onClick={removeSt}>삭제</button>
                </div>
            </div>
        </>
    );
}