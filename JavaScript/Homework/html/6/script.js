const fromInput = document.getElementById("frominput");
const toInput = document.getElementById("toinput");
const timeFromInput = document.getElementById("timefrominput");
const timeToInput = document.getElementById("timetoinput");
const dateInput = document.getElementById("dateinput");
const priceInput = document.getElementById("priceinput");

const newWayBtn = document.getElementById("btn");

const itemsList = document.getElementById("items");

function LoadTodo() {
    if(localStorage.getItem("Way")) {
        itemsList.innerHTML = localStorage.getItem("Way");
    }
}
newWayBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.classList.add("item-element");
    let div = document.createElement("div");
    let newWay = `Откуда: ${fromInput.value}; Куда:${toInput.value}; Время отправления:${timeFromInput.value}; Время прибытия:${timeToInput.value}; Дата:${dateInput.value}; Цена:${priceInput.value};`;
    div.append(newWay);
    itemsList.appendChild(li).append(div);

    localStorage.setItem("Way", itemsList.innerHTML);
    alert("Saved successfully!");


})
function RemoveElement() {
    for (let div of divs) {
      span.addEventListener("click", () => {
        span.parentElement.remove();
      });
    }
  }
LoadTodo();