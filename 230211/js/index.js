'use strict';

import executable from './index2.js';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    img = page_container.getElementsByClassName('img'),
    btn = page_container.getElementsByClassName('btn');

const img_ar = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
];

let pageIdx = 0;

const DELAYTIME = 750; // css상 transition값과 똑같이 

// ====================================
// background이미지 삽입.
for(let i = 0; i < img_ar.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}   

//==============================

// executable();

// function executable() {
//     if(new Date() - beforeEventTime > DELAYTIME + 100) {  //100은 딜레이 대비해서 방어코드
//         beforeEventTime = new Date();

//         return true;
//     }
// }

let tmp = executable(DELAYTIME);

function downBtn() {
    if(tmp()){
        if(pageIdx < img_ar.length-1){
            pageFrame.style.top = `${++pageIdx * -100}%`
        }
    }
}

function upBtn() {
    if(tmp()){
        if(pageIdx > 0 ){
            pageFrame.style.top = `${--pageIdx * -100}%`
        }
    }   
}

//================================

btn[0].addEventListener('click',upBtn);
btn[1].addEventListener('click',downBtn);

window.addEventListener('wheel',(e) => {
    if(e.deltaY > 0) {
        downBtn();
    } else {
        upBtn();
    }
})