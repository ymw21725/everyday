'use strict';

const service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let beforeList = service_list[0];

function closeBeforeList() {
    beforeList.classList.add('hidden');
        // beforeList.children[0].textContent = beforeList.children[0].textContent.replace('-','+');
        beforeList.children[0].textContent = `+${beforeList.children[0].textContent.slice(1)}`;
}

service_container.addEventListener('click',(e) => {
    // closet필요없음 자식이 없으므로.
    const targetEvent = e.target;

    // if(targetEvent.classList.contains('service_header'))
    if(targetEvent.className === 'service_header') {
        
        closeBeforeList();
        
        targetEvent.parentNode.classList.remove('hidden');
        targetEvent.textContent= targetEvent.textContent.replace('+','-');
        beforeList = targetEvent.parentNode;

    }
});


btn_collapseAll.addEventListener('click',closeBeforeList);