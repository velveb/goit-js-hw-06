
const divEl = document.querySelector(".widge");
const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");


buttonEl.addEventListener('click', onChangeRgb);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; // ! генерування випадкового кольору

function onChangeRgb() {
  let changeColor = getRandomHexColor();
  spanEl.textContent = changeColor;
  document.body.setAttribute('style', `background-color: ${changeColor}`)
  
};





