const itineraryForm = document.querySelector(".itinerary");
const list = itineraryForm.nextElementSibling;
let items = [];

itineraryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = Array.from(e.currentTarget);
  const item = {
    place: inputs[0].value,
    dateValue: inputs[1].value,
    date: new Date(inputs[1].value).getDate(),
    month: new Date(inputs[1].value).getMonth() + 1,
    year: new Date(inputs[1].value).getFullYear(),
    notes: inputs[2].value,
    id: Date.now(),
  };
  console.log(item);
  items.push(item); //update items
  console.info("SUBMITTED");
  e.target.reset(); //reset to default
  list.dispatchEvent(new CustomEvent("updateItems"));
});

function renderItem(e) {
  const html = items.map(
    (item) => `
  <li class="items">
    <div class="items-date">
      <h3>${item.date}/${item.month}/${item.year}</h3>
    </div>
    <div class="items-data">
      <h3>${item.place}</h3>
      <p>${item.notes}</p>
      <p class="delete" aria-label="${item.id}">❌</p>
      <p class="edit" aria-label="${item.id}">✏️</p>
    </div>
  </li>
  `
  );
  list.innerHTML = html.join("\n");
}

function deleteItems(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent("updateItems"));
}

list.addEventListener("updateItems", renderItem);
list.addEventListener("click", ({ target }) => {
  target.matches(".delete")
    ? deleteItems(parseInt(target.getAttribute("aria-label")))
    : null;
});