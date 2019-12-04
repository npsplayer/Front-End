var task = document.querySelector("#task");
var datetime = document.querySelector("#datetime");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var clearBtn = document.querySelector("#clear");
var AddBtn = document.querySelector("#add");

//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo() {
  if (localStorage.getItem("todoList")) {
    ul.innerHTML = localStorage.getItem("todoList");
    RemoveElement();
  }
}

//Обработчик каждого события при вводе, чтобы добавлять новое задание в список
datetime.addEventListener("keypress", function(keyPressed) {
  if (keyPressed.which === 13) {
    //Создание нового задания при нажатии на enter
    var currentDate = new Date();
    var inputDate = Date.parse(datetime.value);

    var li = document.createElement("li");
    li.classList.add("element");

    var h = document.createElement("div");
    h.classList.add("item-element");
    h.id = Date.parse(currentDate);

    var spanElement = document.createElement("span");
    var icon = document.createElement("svg");

    var newTodo = task.value + "<br>" + datetime.value + "<br>"; //вывод в li

    icon.classList.add("fas", "fa-trash-alt");
    spanElement.append(icon);

    ul.appendChild(li).append(h, spanElement);
    RemoveElement();
    timer(h.id, newTodo, inputDate);
  }
});

function timer(id, Todo, EndDate) {
  var currentDate = Date.now();
  var finalDate = EndDate - currentDate;
  var seconds = Math.floor((finalDate / 1000) % 60);
  var minutes = Math.floor((finalDate / 1000 / 60) % 60);
  var hours = Math.floor((finalDate / (1000 * 60 * 60)) % 24);
  var days = Math.floor(finalDate / (1000 * 60 * 60 * 24));
  var DateStr =
    Todo + "\n" + days + ":" + hours + ":" + minutes + ":" + seconds;
  document.getElementById(id).innerHTML = DateStr;
  var timeinterval = window.setTimeout(timer, 1000, id, Todo, EndDate);
  if (finalDate <= 0) {
    document.getElementById(id).parentElement.remove();
    clearInterval(timeinterval);
  }
}

//Удаление элемента у todolist-а
function RemoveElement() {
  for (let span of spans) {
    span.addEventListener("click", () => {
      span.parentElement.remove();
    });
  }
}
//Добавление элемента в todoList
AddBtn.addEventListener("click", function() {
  localStorage.setItem("todoList", ul.innerHTML);
  alert("Saved successfully!");
});

//Удаление всего todolist
clearBtn.addEventListener("click", function() {
  ul.innerHTML = "";
  localStorage.removeItem("todoList", ul.innerHTML);
});

loadTodo();
