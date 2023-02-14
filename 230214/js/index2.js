'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn = main_container.getElementsByTagName('a'),
    pager = document.querySelector('.pager'),
    circleTag = pager.getElementsByTagName('a');

let slide_idx = 0;
let tmp_idx = 0;
let autoSlideStop;

for(let i = 0; i < li.length; i ++) {
    pager.appendChild(document.createElement('a'));
}

let beforeEventTime = -new Date();

function executable() {
    let currentEventTime = new Date();

    if (currentEventTime - beforeEventTime > 1000) {
        beforeEventTime = currentEventTime;

        return true;
    }
}

let tmp_click = circleTag[0];
li[slide_idx].style.left = `0%`;        //초기값. 설정
circleTag[0].classList.add('black_change');

function black_circle() {
    circleTag[slide_idx].classList.add('black_change');
        tmp_click.classList.remove('black_change');
        tmp_click = circleTag[slide_idx];
}

function arrow_remove() {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

function actionSlides() {
    li[slide_idx].classList.remove('inTransition');
    li[tmp_idx].classList.remove('inTransition');
    li[slide_idx].style.left = `-100%`;
    li[tmp_idx].style.left = `0%`;
    
    setTimeout(() => {
        li[slide_idx].style.left = `0%`;
        li[tmp_idx].style.left = `100%`;
        li[tmp_idx].classList.add('inTransition');
        li[slide_idx].classList.add('inTransition');
        tmp_idx = slide_idx;
    }, 1);

    arrow_remove();
}
    
function actionslides_right() {
    li[slide_idx].classList.add('inTransition');
    li[tmp_idx].classList.add('inTransition');
    li[slide_idx].style.left = `0%`;
    li[tmp_idx].style.left = `-100%`;
            
    setTimeout(() => {
        li[tmp_idx].style.left = `100%`;
        li[tmp_idx].classList.remove('inTransition');
        li[slide_idx].classList.remove('inTransition');
        tmp_idx = slide_idx;
    }, 1000);

    arrow_remove();
};

btn[0].addEventListener('click',() => {
    if(executable()) {
    slide_idx--;
    slide_idx %= li.length;
    black_circle();

    if(slide_idx< tmp_idx) {
        actionSlides();
    } else {
        actionslides_right();
    }
}});

btn[1].addEventListener('click',() => {
    if(executable()) {
    slide_idx++;
    slide_idx %= li.length;
    black_circle();
    if(slide_idx< tmp_idx) {
        actionSlides();
    } else {
        actionslides_right();
    }
}});

slide_list.addEventListener('mouseenter', () => {
    autoSlideStop = setInterval(() => {
        if(executable()) {
        slide_idx++;
        slide_idx %= li.length;
        
        black_circle();

        actionslides_right();
    arrow_remove();
}}, 2000);
    
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlideStop);
})

main_container.addEventListener('click',(e) => {
    if(executable()){
    const target = e.target.closest('a');

    switch (target) {
        case circleTag[0]: slide_idx = 0;
                        break;
        case circleTag[1]: slide_idx = 1;
                        break;
        case circleTag[2]: slide_idx = 2;
                        break;
        case circleTag[3]: slide_idx = 3;
                        break;
        case circleTag[4]: slide_idx = 4;
                        break;
            default: return;      
    }
    black_circle();
    if(slide_idx< tmp_idx) {
        actionSlides();
    } else {
        actionslides_right();
    }
}});