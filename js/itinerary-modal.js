const modal = document.querySelector('.modal');
const modalInner = modal.querySelector('.modalInner')
const close = modalInner.querySelector('.modalInnerClose');
const itineraryEdit = modalInner.querySelector('.itinerary-edit'); 
const textInfo = modalInner.querySelector('h3');


function openModal(idEdit){
    const dataEdit = items.find(item => item.id === idEdit);
    const inputText = itineraryEdit.querySelector(`input[type="text"]`);
    const inputDate = itineraryEdit.querySelector(`input[type="date"]`);
    const inputNotes = itineraryEdit.querySelector(`textarea`);
    // Set input to default
    [inputText.value, inputDate.value, inputNotes.value] = [dataEdit.place, dataEdit.dateValue, dataEdit.notes];
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
        dataEdit.dateValue = inputDate.value;
        dataEdit.date = new Date(inputDate.value).getDate();
        dataEdit.month = new Date(inputDate.value).getMonth() + 1;
        dataEdit.year = new Date(inputDate.value).getFullYear();
        dataEdit.notes = inputNotes.value;
        list.dispatchEvent(new CustomEvent("updateItems"));
        textInfo.textContent = `EDITED`;
    })
}

list.addEventListener("click", ({target}) => {
    target.matches(".edit") ? openModal(parseInt(target.getAttribute("aria-label"))) : null;
});
