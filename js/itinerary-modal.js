const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modalInner')
const close = modalInner.querySelector('.modalInnerClose');
const itineraryEdit = modalInner.querySelector('.itinerary-edit'); 
const textInfo = modalInner.querySelector('h3');


function openModal(idEdit){
    const dataEdit = items.find(item => item.id === idEdit);
    const inputText = itineraryEdit.querySelector(`input[type="text"]`);
    const inputTime = itineraryEdit.querySelector(`input[type="time"]`);
    const inputNotes = itineraryEdit.querySelector(`textarea`);
    // Set input to default
    [inputText.value, inputTime.value, inputNotes.value] = [dataEdit.place, dataEdit.time, dataEdit.notes];
    // Open modal
    modal.classList.add("open");
    // Close event listener
    close.addEventListener('click',()=>{
        modal.classList.remove("open");
    });
    // Submit event listener
    itineraryEdit.addEventListener("submit",(e)=>{
        e.preventDefault();
        dataEdit.place = inputText.value;
        dataEdit.time = inputTime.value;
        dataEdit.notes = inputNotes.value;
        list.dispatchEvent(new CustomEvent("updateItems"));
        modal.classList.remove("open");
    })
}

list.addEventListener("click", ({target}) => {
    target.matches(".edit") ? openModal(parseInt(target.getAttribute("aria-label"))) : null;
});
