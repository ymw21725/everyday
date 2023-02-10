"use strict";

const service_container = document.querySelector(".service_container"),
    service_list = service_container.getElementsByClassName("service_list"),
    service_header = service_container.getElementsByClassName("service_header"),
    btn_collapseAll = service_container.querySelector(".btn_collapseAll");

let service_idx = 0;

service_container.addEventListener("click", (e) => {
    let target = e.target;
   
    for (let i = 0; i < service_list.length; i++) {
        if (target == service_header[i]) {
            service_list[service_idx].classList.add("hidden");
            service_header[service_idx].textContent ="+ Lorem ipsum dolor sit amet.";

            service_list[i].classList.remove("hidden");
            service_header[i].textContent ="- Lorem ipsum dolor sit amet.";
            service_idx = i;
        }
    }
    if (target == btn_collapseAll) {
        service_list[service_idx].classList.add("hidden");
        service_header[service_idx].textContent ="+ Lorem ipsum dolor sit amet.";
    }
});