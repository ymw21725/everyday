import NationContainer from "./NationContainer";
// import Img from './Img';
import { useState } from "react";

import './App.css';
function App() {

    const [changeImage, setChangeImage] = useState(0);
    const imgAr = [
        './images/bg1.jpg',
        './images/bg2.jpg',
        './images/bg3.jpg',
        './images/bg4.jpg',
        './images/bg5.jpg',
    ]

    function btn_click(e) {
				e.preventDefault();
        setChangeImage( e.target.textContent-1)
    }


    return (
        <div id = "main_container">
            <img src={imgAr[changeImage]} alt="img" />
            <NationContainer 
              imgAr={imgAr}
              btn_click = {btn_click}
              changeImage ={changeImage}
            />
            
        </div>
    )
}export default App;