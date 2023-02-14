'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn = main_container.getElementsByTagName('a'),
    pager = document.querySelector('.pager'),
    img = slide_list.getElementsByTagName('img'),
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

let tmp_click;
tmp_click = circleTag[0];
img[slide_idx].style.left = `0%`;
circleTag[0].classList.add('black_change');
img[slide_idx].classList.add('inTransition');
function actionSlides() {
    
    circleTag[slide_idx].classList.add('black_change');
        tmp_click.classList.remove('black_change');
        tmp_click = circleTag[slide_idx];
    
        if  (slide_idx< tmp_idx) {
           
            img[slide_idx].classList.remove('inTransition');
            img[tmp_idx].classList.add('inTransition');
            img[slide_idx].style.left = `-100%`;
            img[tmp_idx].style.left = `0%`;
            
            // img[tmp_idx].classList.add('inOpacity');
            
            setTimeout(() => {
                img[tmp_idx].classList.remove('inTransition');
                img[slide_idx].classList.add('inTransition');
                img[slide_idx].style.left = `0%`;
                // img[tmp_idx].classList.remove('inOpacity');
                img[tmp_idx].style.left = `100%`;
            tmp_idx = slide_idx;
        }, 1000);
    } else {
        
            img[slide_idx].style.left = `0%`;
            img[tmp_idx].style.left = `-100%`;
            img[tmp_idx].classList.add('inOpacity');
            img[slide_idx].classList.add('inTransition');
            
            setTimeout(() => {
                // img[slide_idx].style.left = `-100%`;
                img[tmp_idx].style.left = `100%`;
                img[tmp_idx].classList.remove('inOpacity');
                img[slide_idx].classList.remove('inTransition');
                tmp_idx = slide_idx;
            }, 1000);
    }

    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }

};

btn[0].addEventListener('click',() => {
    if(executable()) {
    slide_idx--;
    slide_idx %= li.length;
    actionSlides();
    }
});

btn[1].addEventListener('click',() => {
    if(executable()) {
    slide_idx++;
    slide_idx %= li.length;
    actionSlides();
    }
})

slide_list.addEventListener('mouseenter', () => {
    autoSlideStop = setInterval(() => {
        if(executable()) {
        slide_idx++;
        slide_idx %= li.length;
        circleTag[slide_idx].classList.add('black_change');
        tmp_click.classList.remove('black_change');
        tmp_click = circleTag[slide_idx];
        img[slide_idx].style.left = `0%`;
            img[tmp_idx].style.left = `-100%`;
            img[slide_idx].classList.add('inTransition');
            img[tmp_idx].classList.add('inTransition');
            
            setTimeout(() => {
                img[tmp_idx].style.left = `100%`;
                img[tmp_idx].classList.remove('inOpacity');
                img[tmp_idx].classList.remove('inTransition');
                tmp_idx = slide_idx;

                btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }
            }, 1000);
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

    actionSlides();
    }
});