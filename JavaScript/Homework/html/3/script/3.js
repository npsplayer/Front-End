var typeSelect = document.querySelector("#type");
var viewInput = document.querySelector("#viewInput");
var ageInput = document.querySelector("#ageInput");
var familyInput = document.querySelector("#familyInput");
var genderInput = document.querySelector("#genderInput");
var placeOfGrowthInput = document.querySelector("#placeofGrowthinput");
var descriptionInput = document.querySelector("#descriptionInput");
var gradeInput = document.querySelector("#gradeInput");
var applicationAreaInput = document.querySelector("#applicationAreaInput");

var view = document.getElementById("view");
var info = document.getElementById("info");
var back = document.getElementById("back");
var add = document.getElementById("add");
var list = document.querySelector("#emloyeelist");
var create = document.querySelector("#create");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");

var arrPlants = [];

var Fern1 = new Fern();
Fern1.view = "Орляк обыкновенный";
Fern1.age = 2;
Fern1.family = "Деннштедтиевые";
Fern1.gender = "Орляк";
Fern1.description = "5";
Fern1.grade = "Папоротниковые";
arrPlants.push(Fern1);
var Spruce1 = new Spruce();
Spruce1.view = "Ель обыкновенная";
Spruce1.age = 3;
Spruce1.family = "Сосновые";
Spruce1.gender = "Ель";
Spruce1.description = "5";
Spruce1.grade = "Хвойные";
arrPlants.push(Spruce1);


function Info() {
  list.innerHTML = "";
  list.innerHTML +=
    "<thead class='listheader'>" +
        "<th>Вид</th>" +
        "<th>Возраст</th>" +
        "<th>Семейство</th>" +
        "<th>Род</th>" +
        "<th>Описание</th>" +
        "<th>Класс</th>" +
        "<th></th>" +
    "</thead>";
  for (var i = 0; i < arrPlants.length; i++) {
  
    list.innerHTML +=
      "<thead>" +
        "<th id=details" + i + ">" + arrPlants[i].getView() + "</th>" +
        "<th>" + arrPlants[i].getAge() + "</th>" +
        "<th>" + arrPlants[i].getFamily() + "</th>" +
        "<th>" + arrPlants[i].getFamily() + "</th>" +
        "<th>" + arrPlants[i].getDiscription() + "</th>" +
        "<th>" + arrPlants[i].getGrade() + "</th>" +
        "<th>" +
            "<div id=edit" + i + ">Редактировать </div>" +
            "<div id=delete" + i + "> Удалить</div>" +
        "</th>" +
      "</thead>";
  }
    for (var i = 0; i < arrPlants.length; i++) {
    var detal = "details" + i;
    var edit = "edit" + i;
    var del = "delete" + i;
    document.getElementById(detal).style.color = "orange";
    document.getElementById(edit).style.color = "blue";
    document.getElementById(del).style.color = "red";
    document.getElementById(detal).addEventListener("click", function(){  
      delailsPlants(i-1);
    });
    document.getElementById(edit).addEventListener("click", function(){  
      editPlants(i-1);
    });
    document.getElementById(del).addEventListener("click", function(){  
       deletePlants(i-1);
    });
    
    }
    
  
}
function CreatePlants() {
  var view = viewInput.value;
  var age = ageInput.value;
  var family = familyInput.value;
  var gender = genderInput.value;
  var place = placeOfGrowthInput.value;
  var desc = descriptionInput.value;
  var grade = gradeInput.value;
  var apparea = applicationAreaInput.value;
  switch (typeSelect.value) {
    case "1":
      var FernNew = new Fern();
      FernNew.view = view;
      FernNew.age = age;
      FernNew.family = family;
      FernNew.gender = gender;
      FernNew.placeOfGrowth = place;
      FernNew.description = desc;
      FernNew.grade = grade;
      FernNew.applicationArea = apparea;
      arrPlants.push(FernNew);
      console.log(arrPlants);
      break;
    case "2":
      var SpruceNew = new Spruce();
      SpruceNew.view = view;
      SpruceNew.age = age;
      SpruceNew.family = family;
      SpruceNew.gender = gender;
      SpruceNew.placeOfGrowth = place;
      SpruceNew.description = desc;
      SpruceNew.grade = grade;
      SpruceNew.applicationArea = apparea;
      arrPlants.push(SpruceNew);
      console.log(arrPlants);
      break;
  }

}
function delailsPlants(id) {
  view.style.display = "none";
  info.style.display = "block";
  back.style.display = "block";
  save.style.display = "none";
  add.style.display = "none";
  clear.style.display = "none";
  viewInput.value = arrPlants[id].view;
  ageInput.value = arrPlants[id].age;
  familyInput.value = arrPlants[id].family;
  genderInput.value = arrPlants[id].gender;
  placeOfGrowthInput.value = arrPlants[id].placeOfGrowth;
  descriptionInput.value = arrPlants[id].description;
  gradeInput.value = arrPlants[id].gender;
  applicationAreaInput.value = arrPlants[id].applicationArea;
}
function editPlants(id) {
  view.style.display = "none";
  info.style.display = "block";
  back.style.display = "block";
  save.style.display = "block";
  add.style.display = "none";
  clear.style.display = "none";
  if(arrPlants[id] == [Fern]) {
    typeSelect.value = "1";
  }
  else {
    typeSelect.value = "2";
  }
  viewInput.value = arrPlants[id].view;
  ageInput.value = arrPlants[id].age;
  familyInput.value = arrPlants[id].family;
  genderInput.value = arrPlants[id].gender;
  placeOfGrowthInput.value = arrPlants[id].placeOfGrowth;
  descriptionInput.value = arrPlants[id].description;
  gradeInput.value = arrPlants[id].gender;
  applicationAreaInput.value = arrPlants[id].applicationArea;
  save.addEventListener("click", function() {

  switch (typeSelect.value) {
    case "1":
      var FernNew = new Fern();
      FernNew.view = viewInput.value;
      FernNew.age = ageInput.value;
      FernNew.family = familyInput.value;
      FernNew.gender = genderInput.value;
      FernNew.placeOfGrowth = placeOfGrowthInput.value;
      FernNew.description = descriptionInput.value;
      FernNew.grade = gradeInput.value;
      FernNew.applicationArea = applicationAreaInput.value;
      arrPlants.splice(id, 1, FernNew);
      alert("EDIT");
      Info();
      view.style.display = "block";
      info.style.display = "none";
      break;
    case "2":
      var SpruceNew = new Spruce();
      SpruceNew.view = viewInput.value;
      SpruceNew.age = ageInput.value;
      SpruceNew.family = familyInput.value;
      SpruceNew.gender = genderInput.value;
      SpruceNew.placeOfGrowth = placeOfGrowthInput.value;
      SpruceNew.description = descriptionInput.value;
      SpruceNew.grade = gradeInput.value;
      SpruceNew.applicationArea = applicationAreaInput.value;
      arrPlants.splice(id, 1, SpruceNew);
      Info();
      view.style.display = "block";
      info.style.display = "none";
      break;
      
  }
});
}

function deletePlants(id) {
  arrPlants.splice(id,1);
  Info();
}
back.addEventListener("click", function() {
  view.style.display = "block";
  info.style.display = "none";
});
create.addEventListener("click", function() {
  view.style.display = "none";
  info.style.display = "block";
  back.style.display = "none";
  save.style.display = "none";
  add.style.display = "block";
  clear.style.display = "block";
});
clear.addEventListener("click", function() {
  viewInput.value = "";
  ageInput.value = "";
  familyInput.value = "";
  genderInput.value = "";
  placeOfGrowthInput.value = "";
  descriptionInput.value = "";
  gradeInput.value = "";
  applicationAreaInput.value = "";
});

add.addEventListener("click", function() {
  CreatePlants();
  list.innerHTML = "";
  Info();
  view.style.display = "block";
  info.style.display = "none";
});



function Plants(view, age, family, gender, placeOfGrowth, description) {
  var _view;
  var _age;
  var _family;
  var _gender;
  var _placeOfGrowth;
  var _description;
  var Age = "года";
  this.view = view;
  this.age = age;
  this.family = family;
  this.gender = gender;
  this.placeOfGrowth = placeOfGrowth;
  this.description = description;
  this.getView = function() {
    return this.view;
  };
  this.setView =function() {
    _view = view;
  }
  this.getAge = function() {
    return this.age + " " + Age;
  };
  this.setAge = function(_Age) {
    _age = age;
  };
  this.getFamily = function() {
    return this.family;
  };
  this.setFamily = function() {
    _family = family;
  };
  this.getGender = function() {
    return this.gender;
  };
  this.setGender = function() {
    _gender = gender;
  };
  this.getPlaceOfGrowth = function() {
    return this.placeOfGrowth;
  };
  this.setPlaceOfGrowth = function() {
    _placeOfGrowth = placeOfGrowth;
  };
  this.getDiscription = function() {
    return this.description;
  };
  this.setDescription = function() {
    _description = description;
  };
  
}

function Fern(grade, applicationArea) {
  Plants.call(this);
  var _grade;
  var _applicationArea;
  this.grade = grade;
  this.applicationArea = applicationArea;
  this.getGrade = function() {
    return this.grade;
  };
  this.setGrade = function() {
    _grade = grade;
  };
  this.getapplicationArea = function() {
    return this.applicationArea;
  }
  this.setApplicationArea = function() {
    _applicationArea = applicationArea;
  };
}

function Spruce(grade, applicationArea) {
  Plants.call(this);
  var _grade;
  var _applicationArea;
  this.grade = grade;
  this.applicationArea = applicationArea;
  this.getGrade = function() {
    return this.grade;
  };
  this.setGrade = function() {
    _grade = grade;
  };
  this.getapplicationArea = function() {
    return this.applicationArea;
  }
  this.setApplicationArea = function() {
    _applicationArea = applicationArea;
  };
}
Info();