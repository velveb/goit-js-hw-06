


const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onChengFontSize);

function onChengFontSize() {
  spanEl.style.fontSize = `${inputEl.value}px`;
};






