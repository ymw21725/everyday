`use strict`

const body = document.querySelector(`body`),
    main_container = body.querySelector(`.main_container`),
    slide_list = main_container.querySelector(`.slide_list`),
    li = main_container.getElementsByTagName(`li`),
    [back , foward ] = main_container.getElementsByTagName(`a`),
    pager = main_container.querySelector(`.pager`);

for (let i = 0; i < li.length; i++) pager.appendChild(document.createElement('button'));

const button = pager.getElementsByTagName(`button`);

let lastIdx = 0;
let beforeEventTime = -new Date();
let slideInter;

button[0].classList.add(`opacityOne`);

function executable() {
    if (new Date() - beforeEventTime > 1250) {
        beforeEventTime = new Date();
        return true;
    }
}

function hideBtn(num) {
    back.classList.remove(`nonVisible`);
    foward.classList.remove(`nonVisible`);
    if(num === 0) back.classList.add(`nonVisible`);
    if(num === li.length-1) foward.classList.add(`nonVisible`);
}

function moveSlide(pM, i) {
    let num = lastIdx + pM;
    
    if(i && i >= num || i < num) num = i;
    num %= li.length;
    li[num].style.left =`${pM * 100}%`;
    
    setTimeout(()=> {
        li[num].classList.add(`transition`);
        li[lastIdx].classList.add(`transition`);
        li[num].style.left =`0%`;
        li[lastIdx].style.left = `${-pM * 100}%`;
        button[lastIdx].classList.remove(`opacityOne`);
        button[num].classList.add(`opacityOne`);
        hideBtn(num);
    }, 100);

    setTimeout(()=> {
        li[num].classList.remove(`transition`);
        li[lastIdx].classList.remove(`transition`);
        lastIdx = num;
    }, 1200);

}

main_container.addEventListener( 'click' , (e) => {

    const targetbtn = e.target;
    if(pager.contains(targetbtn.closest('button'))){
        if(executable()) {
            for (let i = 0; i < button.length; i++) {
                if(e.target === button[i]) {
                    if (i > lastIdx) moveSlide(1, i);
                    if (i < lastIdx) moveSlide(-1, i);
                }
            }
        }
    }else if(targetbtn.parentNode.closest('a')){  
        if(executable()) moveSlide(+targetbtn.parentNode.dataset.direction);
    }
    
});

slide_list.addEventListener(`mouseenter`, () => {
    slideInter = setInterval(()=> {
        if(executable()) moveSlide(1);
    }, 1500);
});

slide_list.addEventListener(`mouseleave`, () => {
    clearInterval(slideInter);
});