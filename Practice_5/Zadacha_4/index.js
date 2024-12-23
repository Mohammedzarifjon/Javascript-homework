let count = 0;

const counterElement = document.querySelector(".counter");
const myButton = document.querySelector(".myButton");

function increaseCounter() {
  count++; 
  counterElement.textContent = "Счётчик: " + count; 
}

myButton.onclick = increaseCounter;
