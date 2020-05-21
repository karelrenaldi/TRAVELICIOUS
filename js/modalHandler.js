function removeModal(target){
    let modal = document.querySelector(`.${target}`);
    modal.classList.remove("open");
}

function openModal(target){
    let modal = document.querySelector(`.${target}`);
    modal.classList.add("open");
}