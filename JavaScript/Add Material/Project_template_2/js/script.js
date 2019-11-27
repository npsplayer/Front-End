

var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var clearBtn = document.querySelector("#clear");





//Функция которая загружает todo-app, если список найден в локальном хранилище
function loadTodo(){
  if(localStorage.getItem('todoList')){
    ul.innerHTML = localStorage.getItem('todoList');
  }
}

//Обработчик каждого события при вводе, чтобы добавлять новое задание в список
input.addEventListener("keypress",function(keyPressed){
  if(keyPressed.which === 13){
    //Создание нового задания при нажатии на enter 
    var li = document.createElement("li");
    var spanElement = document.createElement("span");
    var icon = document.createElement("i");  
        
    var newTodo = this.valuez;
    this.value = " " ;
        
    icon.classList.add('fas', 'fa-trash-alt'); 
    spanElement.append(icon);
    ul.appendChild(li).append( spanElement, newTodo);

    
    }
    
});


//Удаление todolist чтобы 
clearBtn.addEventListener('click', function(){
  ul.innerHTML= "";
  localStorage.removeItem('todoList',ul.innerHTML );
});




loadTodo();  