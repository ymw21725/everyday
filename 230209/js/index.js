'use strict';

const header = document.querySelector('header'),
    menuBtn = header.getElementsByTagName('a'),
    contents = header.querySelector('.contents'),
    main = document.querySelector('main');

let beforeBtn = menuBtn[0],
    beforeContent = contents.children[0];

function viewBtn(currentBtn) {
    beforeContent.style.display = 'none';

    let currentcontent = contents.querySelector(currentBtn.getAttribute('href'));
    currentcontent.style.display = 'block';

    beforeContent = currentcontent;
}

function scrollTop() {
    setTimeout(()=> window.scroll(0,0),50); // css가 이벤트보다 나중에 먹으므로 딜레이를 줘서 작동.
}   //1일때는 딜레이 시간이 너무 짧아서 조금 큰 숫자로 딜레이 시켜서 동작 원활.

viewBtn(beforeBtn);


header.addEventListener('click', (e) => {
    e.preventDefault(); // li계속 클릭 시 버벅이는거 없앰. 이벤트 막는것.
    const eventTarget = e.target;
    
    if (eventTarget.tagName === 'A') {
        beforeBtn.classList.remove('selected');
        eventTarget.classList.add('selected');

        viewBtn(eventTarget);
        
        beforeBtn = eventTarget;
        scrollTop(); 
    }
});

window.addEventListener('load',scrollTop);

