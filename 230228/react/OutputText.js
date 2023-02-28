export default function OutputText ({studentInfo}) {

    // let newString = "";
    // console.log(studentInfo);

    return (
        <>
            <h1>게시판</h1>
            {studentInfo.map(e =>
                <div className="three_division" key = {e.stNum}>
                    <div>
                    {e.stNum}

                    </div>
                    <div>

                    {e.stText}
                    </div>
                    <div>

                    {e.stName}
                    </div>
                    {/* <OutputText stNum = {e.stNum} /> */}
                    {/* console.log(e.stNum); */}
                </div>
                

              
            )}
        </>
    )

}