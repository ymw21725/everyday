function App() {
  return <h1>모듈 임포트1</h1>;
}

function TestReact() {
  return <h2>모듈 임포트2</h2>;
}

function TestReact2() {
  return <h3>모듈 임포트3</h3>;
}

/* 
  export 시에는 * 적용 불가.
*/
// export에서는 *형식이 불가능하다. 그러므로 밑과 같이
// 하나하나 지정해서 export해야한다.
export { App, TestReact, TestReact2 };