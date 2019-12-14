let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let start = document.getElementById("start");
let end = document.getElementById("end");

function* generateNum(start, end) {
  for (let i = start; i <= end; i++) {
  yield i;
  }
};

btn1.addEventListener("click", () => {
  let gen = [...generateNum(start.value, end.value)];
  alert(gen);
  console.log(gen);
});

const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    const iterator = {
      next() {
        step++;
        return console.log((step == 1) ? {value: 'This', done: false} : 
                           (step == 2) ? {value: 'is', done: false} : 
                           (step == 3) ? {value: 'iterable.', done: false} : 
                           {value: undefined, done: true}); 
      }
      
    }
    return iterator;
  }
};
function FirtsIterator() {
  console.log("Begin 1 itetator:");
  var iterator = iterable[Symbol.iterator]();
  iterator.next(); 
  console.log("End.");
}

function SecondIterator() {
  console.log("Begin 2 itetator:");
  var iterator = iterable[Symbol.iterator]();
  iterator.next(); 
  iterator.next(); 
  iterator.next(); 
  iterator.next(); 
  console.log("End.");
}

btn2.addEventListener("click", () => {
  FirtsIterator();
  SecondIterator();
  alert("Check console!");
});

class Base {
  constructor(Name){
  this.Name = Name;
  }
}

let mixinOne = Base => class extends Base {
  testOne(){
    alert(`Test1: ${this.Name}`);
  }
}

let mixinTwo = Base => class extends Base {
  testTwo(){
    alert(`Test2 :${this.teststr}`);
  }
}

class Test extends mixinOne(mixinTwo(Base)) {
  constructor(name, teststr){
    super(name);
    this.teststr = teststr;
  }
}

let testmixin = new Test('Hello', 'Hi');

btn3.addEventListener("click", () => {
  testmixin.testOne();
  testmixin.testTwo();
});

let En = new Intl.DateTimeFormat("en-US");
let De =  new Intl.DateTimeFormat("de-DE");



btn4.addEventListener("click", () => { 
  alert(`Локализация до: ${En.format(Date.now())}`);
  alert(`Локализация после: ${De.format(Date.now())}`);
});


