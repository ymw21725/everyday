'use select';

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    btn = page_container.getElementsByClassName('btn');

let curPos = 0;

let beforeEventTime = -new Date();

function exectable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

function movePage(page_move,conDition) {
        if(conDition) {
            curPos += page_move;
            pageFrame.style.transform = `translateY(${curPos * -100}vh)`;
        }
    
};

window.addEventListener('wheel',(e) => {
    if(exectable()){
        if(e.deltaY>0) movePage(1,curPos!=3);
        if(e.deltaY<0) movePage(-1,curPos!=0);   
    }
});

page_container.addEventListener('click',(e)=> {
    if(exectable()){
        const btn_target = e.target.closest('button');
        
        if(btn_target === btn[0]) movePage(-1,curPos!=0);
        if(btn_target === btn[1]) movePage(1,curPos!=3);    
    }
});