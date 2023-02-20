export default function SetName({ setName }) {
    const myName = [
        '박성연',
        '홍길동',
        '김구라',
    ];

    /* 
        클릭 이벤트가 발생했을 때 해당 객체의 컨텐트 값을 얻어
        상위 컴포넌트에서 전달받은 함수(setName)의 참조를 통해
        호출함으로써 상위 컴포넌트의 실함수에서 매개변수 형태로
        전달받는 형태.
    */
    function getName(e) {
        setName(e.target.textContent);
    }

    return (
        <>
            <button onClick={getName}>{myName[0]}</button>
            <button onClick={getName}>{myName[1]}</button>
            <button onClick={getName}>{myName[2]}</button>
        </>
    );
}

/* 
    button을 클릭하면 onCLick이벤트를 통해 getName호출. 
    getName에서 e.target.textcontent에서 myName[0],[1],[2]의 값을 가지고온다.
    다시 App.js에서 setName(transName)에서 transName은 myName[0][1][2]값을 의미
    setYourName에(transName)값을 위의 const쪽 구조분해 할당해서 yourName에 값을 넣어줌
    그 후 div 당신의 이름은 yourName에서 yourName값이 myName[0][1][2]값을 넣어준다.
*/
