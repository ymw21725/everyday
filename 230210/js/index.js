'use strict';

const service_container = document.querySelector('.service_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let service_idx = 0;

for(let i = 0; i< service_list.length;i++) {
service_list[i].addEventListener('click', () => {
    service_list[service_idx].classList.add('hidden');
    service_list[service_idx].children[0].textContent = '+ Lorem ipsum dolor sit amet.';
    
    service_list[i].children[0].textContent = '- Lorem ipsum dolor sit amet.';
    service_list[i].classList.remove('hidden');
    service_idx = i;
});
}


btn_collapseAll.addEventListener('click',() => {
    service_list[service_idx].classList.add('hidden');
    service_list[service_idx].children[0].textContent = '+ Lorem ipsum dolor sit amet.';
});