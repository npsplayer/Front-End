const input = document.querySelector("input[type='text'].addtext");
const inputBtn = document.querySelector(".add");
const ul = document.querySelector("ul.todos");
const allBtn = document.querySelector(".all-view");
const activeBtn = document.querySelector(".active-view");
const doneBtn = document.querySelector(".done-view");
const search = document.querySelector(".search");

const getTodoItems = () => {
  return fetch(`https://rn-todo-app-c27d4.firebaseio.com/todos.json`)
    .then(response => response.json())
    .then(data => {
      for (var key in data) {
        addTodo(data[key].title);
      }
    })
    .catch(() => alert("error"));
};
getTodoItems();

function addTodo(newTodo = input.value) {
  const li = document.createElement("li");
  const content = document.createElement("span");
  const containerBtn = document.createElement("div");
  const deleteBtn = document.createElement("button");
  const highlightBtn = document.createElement("button");
  content.append(newTodo);
  content.classList.add("todo");
  content.classList.add("active");
  deleteBtn.classList.add("delete-btn");
  containerBtn.append(deleteBtn, highlightBtn);
  deleteBtn.innerText = "Delete";
  highlightBtn.classList.add("highlight-btn");
  highlightBtn.innerText = "Highlight";
  ul.appendChild(li).append(content, containerBtn);

  HighlightTodo(highlightBtn, containerBtn);
  DeleteTodo(deleteBtn, containerBtn);
  doneTodo(content);
  input.value = "";
}
//добавление через enter
input.addEventListener("keypress", keyPressed => {
  const keyEnter = 13;
  if (keyPressed.which === keyEnter) {
    addTodo();
  }
});
// добавление через кнопку
inputBtn.addEventListener("click", () => {
  addTodo();
});
// поиск
search.addEventListener("keypress", () => {
  const todoItem = document.querySelectorAll(".todo");
  let find = search.value;
  for (let span of todoItem) {
    if (!span.textContent.includes(`${find}`)) {
      span.parentElement.classList.add("hidden");
      alert(find);
    } else {
      span.parentElement.classList.remove("hidden");
    }
  }
});
// удаление эл-та
function DeleteTodo(element, parentElem) {
  element.addEventListener("click", event => {
    parentElem.parentElement.remove();
  });
}
// выделение эл-та
function HighlightTodo(element, parentElem) {
  element.addEventListener("click", event => {
    parentElem.parentElement.children[0].classList.toggle("highlight");
  });
}
// вычеркивание(done) эл-та
function doneTodo(element) {
  element.addEventListener("click", event => {
    element.classList.toggle("done");
    element.classList.toggle("active");
  });
}
// весь todo list
function filterAll(element) {
  element.addEventListener("click", () => {
    const todoItem = document.querySelectorAll(".todo");
    for (let span of todoItem) {
      span.parentElement.classList.remove("hidden");
    }
  });
}
filterAll(allBtn);

// активные задачи todo list-а
function filterActive(element) {
  element.addEventListener("click", event => {
    const doneItem = document.querySelectorAll(".done");
    const todoItem = document.querySelectorAll(".todo");
    for (let span of todoItem) {
      span.parentElement.classList.remove("hidden");
    }
    for (let span of doneItem) {
      span.parentElement.classList.add("hidden");
    }
  });
}
function filterDone(element) {
  element.addEventListener("click", event => {
    const activeItem = document.querySelectorAll(".active");
    const todoItem = document.querySelectorAll(".todo");
    for (let span of todoItem) {
      span.parentElement.classList.remove("hidden");
    }
    for (let span of activeItem) {
      span.parentElement.classList.add("hidden");
    }
  });
}
filterDone(doneBtn);
