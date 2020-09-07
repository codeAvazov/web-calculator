let display = document.querySelector(".display");
let result = null;

function clr() {
  display.innerHTML = 0;
}

function val(value) {
  if (display.textContent == "0" || parseInt(display.textContent) === result) {
    display.innerHTML = "";
  }
  display.innerHTML += value;
}

function calculate() {
  
  result = eval(display.textContent);
  display.innerHTML = result;
}

function statuc() {
  display.innerHTML = -display.textContent;
}


function del() {
  let arr = display.textContent.split('');
  if(arr.length > 1) {
    arr.pop();
  }
  display.innerHTML = arr.join('');
}