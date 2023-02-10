"use strict";

const service_container = document.querySelector(".service_container"),
    service_header = service_container.getElementsByClassName("service_header"),
    btn_collapseAll = service_container.querySelector(".btn_collapseAll");

let beforeHeader = service_header[0];

function closeBeforeList() {
    beforeHeader.parentNode.classList.add("hidden");
    // beforeList.children[0].textContent = beforeList.children[0].textContent.replace('-','+');
    beforeHeader.textContent = `+${beforeHeader.textContent.slice(1)}`;
}

service_container.addEventListener("click", (e) => {
    // closet필요없음 자식이 없으므로.
    const targetEvent = e.target;

    // if(targetEvent.classList.contains('service_header'))
    if (targetEvent.className === "service_header") {
        closeBeforeList();

        targetEvent.parentNode.classList.remove("hidden");
        targetEvent.textContent = targetEvent.textContent.replace("+", "-");
        beforeHeader = targetEvent;
    }
});

btn_collapseAll.addEventListener("click", closeBeforeList);

//html구조 이해하면 1과 2차이 보임.