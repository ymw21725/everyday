let scrollTest = document.querySelector('.scrollTop');

document.addEventListener('scroll',() => {
    let posY = parseInt(window.scrollY);
    
    let calcposY = screen.height / 3 ;
    

    if(posY>calcposY) {
        scrollTest.style.display = 'block';
    } else {
        scrollTest.style.display = 'none';
    }
});

document.addEventListener('click',() => {

    let stopTimeout = setInterval(() => {
        window.scrollBy(0,-5);

    let clickY = parseInt(window.scrollY);

        if(clickY <= 0) {
            clearInterval(stopTimeout);
        }
    },5);
    
});

/* 
        ※ display 속성에 대한 none <=> block 이나 visibility 속성에 대한
           hidden <=> visible 은 transition 효과가 적용되지 않음에 주의.
           즉, transition 효과 적용을 위한 display 나 visibility 속성에
           대한 직접 적용은 불가.
           단, opacity 만 적용하는 경우 scrollTop 이 보이지 않는 상태에서
           스크롤이 기준점을 넘어가지 않고도 클릭되어 최상단으로 스크롤이
           될 수 있는 현상 발생.
           따라서 opacity 를 이용하여 보이지 않게 설정하되, 요소가 지정된
           자리를 그대로 차지한 상태에서 클릭되지 않도록 visibility 속성을
           활용.
           이는 display none <=> block 은 요소 자체가 존재하지않는(none)
           상태에서의 opacity 적용 자체가 의미없는 속성 적용이 되고 이에
           따른 속성 변화에 따른 transition 효과가 적용될수 없지만,
           visibility 속성에 대한 hidden <=> visible 은 요소의 공간은 그대로
           유지한 상태에서 요소만 실제로 존재하지 않는 것처럼 숨김으로써
           opacity 속성 적용이 되어 변화에 따른 transition 효과 적용 가능.
    */