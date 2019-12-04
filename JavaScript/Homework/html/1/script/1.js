//Задание 1.1
function NewLocate() {
  location.href = "https://github.com/npsplayer?tab=repositories";
}

//Задание 1.2
function ChangeStyle() {
  if (document.getElementById("body").style.background == "white") {
    document.getElementById("body").style.background = "blue";
  } else {
    document.getElementById("body").style.background = "white";
  }
}

//Задание 1.3
function DestroyAndDraw() {
  document.getElementById("body").innerHTML = "";
  document.getElementById("body").innerHTML =
    "<div style='display:flex; flex-direction:column; background-color: #eee; padding:10px 0; margin:auto;'>" +
    "<div style='border:1px solid black; padding:10px 0; margin:20px;'>Block1</div>" +
    "<div style='border:1px solid black; padding:10px 0; margin:20px;'>Block2</div>" +
    "<div style='border:1px solid black; padding:10px 0; margin:20px;'>Block3</div>" +
    "</div>";
}

//Задание 2
var sum = 0;
var count = 0;
var avg = 0;
var temp = { Balarus: -3, Russia: -5, Egypt: 30, USA: 15, Ukraine: 5 };
for (var obj in temp) {
  sum += temp[obj];
  count++;
}
avg = sum / count;
console.log("Средняя температура стран: " + avg + " °C");

//Задание 3
function Temp(TempObj) {
  var max = 0;
  for (var obj in TempObj) {
    if (TempObj[obj] > max) {
      max = TempObj[obj];
    }
  }
  alert(max);
}
console.log("Максимальная температура:" + temp + " °C");
