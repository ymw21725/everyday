'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.getElementsByTagName('li'),
    btn = main_container.getElementsByTagName('a'),
    pager = document.querySelector('.pager'),
    circleTag = pager.getElementsByTagName('a');
    
    let slide_idx = 0;
// let before_idx = slide_list[0];

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

let autoSlideStop;
let tmp_click;
tmp_click = circleTag[0];

btn[0].addEventListener('click',() => {
    slide_idx--;
    
    actionSlides();
});

btn[1].addEventListener('click',() => {
    slide_idx++;
    
    actionSlides();

})

function actionSlides() {
    slide_idx %= li.length
    circleTag[slide_idx].classList.add('black_change');
        tmp_click.classList.remove('black_change');
        tmp_click = circleTag[slide_idx];

    // li[slide_idx].style.left = `${-slide_idx * 100}%`;
    li[slide_idx].style.left = `${-slide_idx * 100}%`;
    slide_idx %= li.length;
    // before_idx.style.left = `${-slide_idx * 100}%`;
    before_idx = li[slide_idx];
    
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }
};

slide_list.addEventListener('mouseenter', () => {
    autoSlideStop = setInterval(() => {
        slide_idx++;
        
        // slide_idx %= li.length;
        actionSlides();
        
    }, 2000);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlideStop);
})






circleTag[0].classList.add('black_change');
li[0].classList.add('inImg');
let before_idx = li[0];
li[slide_idx].style.left = `0%`;

function pagerSlides() {

    
}





main_container.addEventListener('click',(e) => {
    const target = e.target.closest('a');
    // target.classList.add('black_change');
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
    

    circleTag[slide_idx].classList.add('black_change');
    tmp_click.classList.remove('black_change');
    tmp_click = circleTag[slide_idx];
    
    // li[slide_idx].classList.remove('inImg');
    li[slide_idx].style.left = `0%`;
    slide_idx %= li.length;
    before_idx.style.left = `100%`;
    before_idx = li[slide_idx];
    // before_idx.classList.add('inImg');

    // before_idx = slide_list;
    
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (slide_idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (slide_idx >= li.length - 1) {
        btn[1].classList.add('nonVisible');
    }
    // slide_list.style.left = `${-slide_idx * 100}%`;
});