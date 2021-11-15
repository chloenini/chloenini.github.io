
let navElement = document.querySelector(".nav");
console.log("my nav element:", navElement);

function turnOnLight() {
  console.log("Lights on!");
}


let body = document.body;

function turnOnLight() {
  body.classList.toggle("light");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);