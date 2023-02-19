import Event1 from "./subModule/Event1";
import Event2 from "./subModule/Event2";

function App() {
   const style = {
      backgroundColor: 'red',
      color: 'white',
      fontSize: '3em',
      textDecoration: 'none',
   };
   // style을 객체로 받아서 밑에 return지정.
   return (
      <>
         <Event1 style={ style } />
         <Event2 style={ style } />
      </>
   );
}

export default App;