//input-ы
let selectTrans = document.getElementById("selectTrans");
let dateRoute = document.getElementById("dateRoute");
let fromRoute = document.getElementById("fromRoute");
let selectToRoute = document.getElementById("selectToRoute");
let timeFromRoute = document.getElementById("timeFromRoute");
let timeToRoute = document.getElementById("timeToRoute");
let priceRoute = document.getElementById("priceRoute");

//кнопки
let NewRoute = document.getElementById("NewRoute");
let btnCreate = document.getElementById("create");
let btnSave = document.getElementById("save");
let btnClear = document.getElementById("clear");
let btnBack = document.getElementById("back");
let btnBackInfo = document.getElementById("backInfo");
let btnNewRoute = document.getElementById("NewRoute");

//блоки
let createRoute = document.getElementById("createroute");
let infoToRoute = document.getElementById("infoToRoute");
let allRoute = document.getElementById("allRoute");

var pageRoute = document.getElementById("pageRoute");
var cities = document.getElementsByClassName("city");
var titleName = document.getElementById("titlename");
//таблица с данными
let listRoute = document.getElementById("listRoute");

//отрисовка таблицы с данными
function DrawListRoute() {
    pageRoute.style.gridTemplateColumns = "auto";
    listRoute.innerHTML = "";
    listRoute.innerHTML +=
    `<thead class='listHeader'>` +
    `<th>Способ перевозки</th>` +
    `<th>Дата</th>` +
    `<th>Пункт отправления</th>` +
    `<th>Пункт назначения</th>` +
    `<th>Время отправления</th>` +
    `<th>Время прибытия</th>` +
    `<th>Цена</th>` +
    `<th></th>` +
    `<th></th>` +
    `<th></th>` +
    `</thead>`;
    for(let i = 0;i < arrRoute.length; i++) {
        listRoute.innerHTML += 
        `<thead>` +
        `<th>${arrRoute[i].getTrans}</th>` +
        `<th>${arrRoute[i].getDate}</th>` +
        `<th>${arrRoute[i].getFrom}</th>` +
        `<th class='detail' id='detail${i}'>${arrRoute[i].getTo}</th>` +
        `<th>${arrRoute[i].getTimeFrom}</th>` +
        `<th>${arrRoute[i].getTimeTo}</th>` +
        `<th>${arrRoute[i].getPrice}</th>` +
        `<th class='edit' id='edit${i}'><svg class = "fas fa-edit"></svg></th>` + 
        `<th class='remove' id='remove${i}'><svg class = "fas fa-trash"></svg></th>` +
        `<th class='favorite' id='favorite${i}'><svg class= "fas fa-star"></svg></th>` +
        `</thead>`;
    }
    for(let i = 0; i < arrRoute.length; i++) {
        let detail = `detail${i}`;
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let favorite = `favorite${i}`;
        document.getElementById(detail).style.color = "green";
        document.getElementById(edit).style.color = "#4285f4";
        document.getElementById(remove).style.color = "#f45555";
        FavoriteRouteDraw(i, favorite);
        // document.getElementById(remove).style.color = "";
        document.getElementById(detail).addEventListener("click", () => {
            DetailRoute(i);
        });
        document.getElementById(edit).addEventListener("click", () => {
            EditRoute(i);
        });
        document.getElementById(remove).addEventListener("click", () => {
            RemoveRoute(i);
        });
        document.getElementById(favorite).addEventListener("click", () => {
            FavoriteRouteCheck(i);
            FavoriteRouteDraw(i, favorite);
            console.log(arrRoute);
        });
        document.getElementById(favorite).addEventListener("change", () => {

        })
    }

}

//информация про город
function DetailRoute(id) {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    btnBackInfo.style.display = "inline";
    NewRoute.style.display = "none";
    createRoute.style.display ="none";
    infoToRoute.style.display = "block";
    allRoute.style.display = "none";
    btnCreate.style.display = "none";
    btnSave.style.display = "none";
    btnBack.style.display = "none";
    btnClear.style.display ="none";
    for(let city of cities) {
        city.style.display = "none";
    }
    titleName.innerHTML = "";
    document.getElementById(arrRoute[id].to).style.display = "block";
}

//изменение элемента list-a
function EditRoute(id) {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    btnBackInfo.style.display = "none";
    NewRoute.style.display = "none";
    infoToRoute.style.display = "none";
    createRoute.style.display ="block";
    allRoute.style.display = "none";
    btnCreate.style.display = "none";
    btnSave.style.display = "inline";
    btnBack.style.display = "inline";
    btnClear.style.display ="inline";
    selectTrans.value = arrRoute[id].getTrans;
    DateRoute.value = arrRoute[id].date; 
    fromRoute.value = arrRoute[id].from; 
    selectToRoute.value = arrRoute[id].to; 
    timeFromRoute.value = arrRoute[id].timefrom; 
    timeToRoute.value = arrRoute[id].timeto; 
    priceRoute.value = arrRoute[id].price;
    save.addEventListener("click", ()=> {
    let RouteEdit = new Route(selectTrans.value, 
                              DateRoute.value, 
                              fromRoute.value, 
                              selectToRoute.value, 
                              timeFromRoute.value, 
                              timeToRoute.value, 
                              priceRoute.value,
                              false);
    arrRoute.splice(id, 1, RouteEdit);
    DrawListRoute();
    });
}

//удаление элемента list-a
function RemoveRoute(id) {
    arrRoute.splice(id,1);
    DrawListRoute();
}
//рекомендация 
function FavoriteRouteDraw(id, elem) {
    if(arrRoute[id].favorite == true) {
        document.getElementById(elem).style.color = "orange";
    }
    else 
    document.getElementById(elem).style.color = "grey";
    
}

function FavoriteRouteCheck(id) {
    if(arrRoute[id].favorite == true){
        arrRoute[id].favorite = false;
    }
    else 
    arrRoute[id].favorite = true;
    DrawListRoute();
}


//создаем события на нажатия кнопок и тд.

selectToRoute.addEventListener("change", () => {
    infoToRoute.style.display = "block";
    for(let city of cities) {
        city.style.display = "none";
    }
    document.getElementById(selectToRoute.value).style.display = "block";
})

btnNewRoute.addEventListener("click", () =>{
    btnBackInfo.style.display = "none";
    NewRoute.style.display = "none";
    createRoute.style.display = "block";
    infoToRoute.style.display = "none";
    allRoute.style.display = "none";
    btnSave.style.display = "none";
    btnBack.style.display = "inline";
    btnCreate.style.display = "inline";
    btnClear.style.display ="inline";
});

btnCreate.addEventListener("click", () =>{
    arrRoute.push(new Route(selectTrans.value, 
                            DateRoute.value, 
                            fromRoute.value, 
                            selectToRoute.value, 
                            timeFromRoute.value, 
                            timeToRoute.value, 
                            priceRoute.value));
    console.log(arrRoute);
    createRoute.style.display = "none";
    infoToRoute.style.display = "none";
    allRoute.style.display = "block";
    btnSave.style.display = "none";
    btnNewRoute.style.display = "block";
    btnSave.style.display = "none";
    btnBack.style.display = "none";
    DrawListRoute();
});

btnClear.addEventListener("click", () => {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    selectTrans.value = ""; 
    DateRoute.value = ""; 
    fromRoute.value = ""; 
    selectToRoute.value = ""; 
    timeFromRoute.value = ""; 
    timeToRoute.value = ""; 
    priceRoute.value = "";
    DrawListRoute();
});

btnBack.addEventListener("click", () => {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    btnBackInfo.style.display = "none";
    NewRoute.style.display = "block";
    createRoute.style.display = "none";
    infoToRoute.style.display = "none";
    allRoute.style.display = "block";
    btnSave.style.display = "none";
    btnNewRoute.style.display = "block";
    btnSave.style.display = "none";
    btnBack.style.display = "none";
    DrawListRoute();
});

btnSave.addEventListener("click", () => {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    btnBackInfo.style.display = "none";
    NewRoute.style.display = "block";
    createRoute.style.display = "none";
    infoToRoute.style.display = "none";
    allRoute.style.display = "block";
    btnSave.style.display = "none";
    btnNewRoute.style.display = "block";
    btnSave.style.display = "none";
    btnBack.style.display = "none";
    DrawListRoute();
});

btnBackInfo.addEventListener("click", () => {
    pageRoute.style.gridTemplateColumns = "650px 650px";
    btnBackInfo.style.display = "none";
    NewRoute.style.display = "block";
    createRoute.style.display = "none";
    infoToRoute.style.display = "none";
    allRoute.style.display = "block";
    btnSave.style.display = "none";
    btnNewRoute.style.display = "block";
    btnSave.style.display = "none";
    btnBack.style.display = "none";
    DrawListRoute();
});

class Route {
    constructor(trans, date, from, to, timefrom, timeto, price, favorite) {
        this.trans = trans;
        this.date = date;
        this.from = from;
        this.to = to;
        this.timefrom = timefrom;
        this.timeto = timeto;
        this.price = price;
        this.favorite = favorite;
    }
    get getTrans() {
        return `${this.trans}`;
    }
    get getDate() {
        return `${this.date}`;
    }
    get getFrom() {
        return `${this.from}`;
    }
    get getTo() {
        return `${this.to}`;
    }
    get getTimeFrom() {
        return `${this.timefrom}`;
    }
    get getTimeTo() {
        return `${this.timeto}`;
    }
    get getPrice() {
        return `${this.price} руб.`;
    }
    get getFavorite() {
        return `${this.favorite}`;
    }
};
//масси в котором хрранится все поездки
let arrRoute = [];

let Route1 = new Route('Автобус', '2019-12-12','Минск','Москва','09:50', '11:40', 100, true);
let Route2 = new Route('Лошадь', '2019-12-13','Минск','Брест','08:00', '20:30', 250, false);

arrRoute.push(Route1);
arrRoute.push(Route2);

console.log(arrRoute);

pageRoute.style.gridTemplateColumns = "650px 650px";
