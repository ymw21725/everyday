export default function Event1({ style }) {
    /* 
          a 태그의 기본 이벤트 속성을 삭제하지 않으면 디폴트 이벤트 속성이
          걸려 클릭후 다시 원상태로 복원되는 문제점 발생됨에 주의.
  */
  function setBg(e) {
      e.preventDefault();
      //막지 않으면 클릭했을때만 잠깐 파란색으로 변하고 다시 빨강으로 돌아간다.
      e.target.style.backgroundColor = 'blue';
  }

  /* 
      < 이벤트 처리 >

  - js 와 같이 인라인 형식으로 on ~ 으로 시작하는 이벤트 키워드명을 요소의
    프로퍼티로 하되, js 와 달리 on ~ 이후의 결합문자가 소문자가 아닌 대문자로
    시작함에 유의.
    value 에는 js 의 이벤트리스너와 같이 익명함수나 람다식 객체의 참조만 전달
    가능. 직접 호출은 정상적인 이벤트 처리가 불가.
  */

    // onclick 안되고 onClick이 되어야한다.
    // 모듈화로 나누는 것이기 때문에 onClick을 사용한다. 
  return (
      <div>
          <a href="/" style={style} onClick={setBg}>첫 번째 요소</a>
      </div>
  );
}