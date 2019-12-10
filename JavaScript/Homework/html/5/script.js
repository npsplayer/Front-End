 

let TypeSelect = document.getElementById("typetrig");
let history = document.getElementById("history");
var icon = document.createElement("svg");
      icon.classList.add("fas", "fa-history");
      history.append(icon);
      icon.style.color = "#50d640";
let memories = [];

history.addEventListener("click", () => {
  if(memories.length == 0 ) {
  alert("История: пусто");
  } else 
   {
    alert("История: " + memories);
    }
});

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

//All Operators
const allCalculation = {
  '+': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 + secondOperand*1000000000000000)/1000000000000000,

  '-': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 - secondOperand*1000000000000000)/1000000000000000,

  '*': (firstOperand, secondOperand) => Math.round(firstOperand * secondOperand*1000000000000000)/1000000000000000,

  '/': (firstOperand, secondOperand) => Math.round(firstOperand*1000000000000000 / secondOperand)/1000000000000000,

  '%': (firstOperand, secondOperand) => firstOperand % secondOperand,

  'n!': (firstOperand, secondOperand) => factorial(firstOperand),

  'a^b': (firstOperand, secondOperand) => firstOperand ** secondOperand,

  'cos': (firstOperand, secondOperand) => cos(firstOperand),

  'sin': (firstOperand, secondOperand) => sin(firstOperand),

  'tg': (firstOperand, secondOperand) => tg(firstOperand),

  'ctg': (firstOperand, secondOperand) => ctg(firstOperand),

  '=': (firstOperand, secondOperand) => secondOperand
};

function factorial(n) {
  let result = (n == 0) ? 1 : (n > 0) ? ((n != 1) ? n * factorial(n - 1) : 1) : "Ошибка";
  return result;
}

function cos(n) {
  let result = (TypeSelect.value = 'RAD') ? Math.cos(n) : Math.cos(n*(Math.PI/180));
  return result;
}
function sin(n) {
  let result = (TypeSelect.value = 'RAD') ? Math.sin(n) : Math.sin(n*(Math.PI/180));
  return result;
}
function tg(n) {
  let result = (TypeSelect.value = 'RAD') ? Math.tan(n) : Math.tan(n*(Math.PI/180));
  return result;
}
function ctg(n) {
  let result = (TypeSelect.value = 'RAD') ? 1/Math.tan(n) : 1/Math.tan(n*(Math.PI/180));
  return result;
}

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}

function inputOperand(ourOperand) {
  const {
      displayValue,
      waitingForSecondOperand
  } = calculator;

  if (waitingForSecondOperand === true) {
      calculator.displayValue = ourOperand;
      calculator.waitingForSecondOperand = false;
  } else {
      calculator.displayValue = displayValue === '0' ? ourOperand : displayValue + ourOperand;
  }
  console.log(calculator);
}



function handleOperator(nextOperator) {
  
  const {
      firstOperand,
      displayValue,
      operator
  } = calculator;

  const inputValue = parseFloat(displayValue);
  if (operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
  }

  if (firstOperand == null) {
      calculator.firstOperand = inputValue;
  } else if (operator) {
      const currentValue = firstOperand || 0;
      if(operator == '/' && inputValue == 0){
        calculator.displayValue = "Error: деление на 0";
      }
      else {
      const result = allCalculation[operator](currentValue, inputValue);
      
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
      
      memories.push(currentValue + calculator.operator + inputValue +"=" +result);
      }
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  
}

function updateDisplay() {
  const display = document.querySelector('.calc_all');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calc_keys');
keys.addEventListener('click', (event) => {
  const {
      target
  } = event;
  if (!target.matches('button')) {
      return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if(target.classList.contains('trigoperator')) {
    handleOperator(target.value);
    calculator.waitingForSecondOperand = false;
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    resetCalculator();
    updateDisplay();
    return;
 }
  inputOperand(target.value);
  updateDisplay();
}); 