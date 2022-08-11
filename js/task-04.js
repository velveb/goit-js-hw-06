//todo DZ4

const minBtnEl = document.querySelector('[data-action="decrement"]');
const maxBtnEl = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

let counterValue = 0;
console.log('0');


minBtnEl.addEventListener('click', onDecreasesVelue);
maxBtnEl.addEventListener('click', onIncreasesVelue);

function onDecreasesVelue() {
  counterValue -= 1;
  console.log(counterValue);
  return (counter.textContent = counterValue);
};


function onIncreasesVelue() {
  counterValue += 1;
  console.log(counterValue);
  return (counter.textContent = counterValue);
  };




// !приклад події

// const targetBtn = document.querySelector(`[data-action="add"]`);

// !добавляємо подію

//    targetBtn.addEventListener('click', () => {
//    console.log('Клік');
//  });
 
//? onTargetButtonClick - вірна назва функції

//   targetBtn.addEventListener('click', onTargetButtonClick);

// function onTargetButtonClick() {
//   console.log('Клік');
//   };

// !виключаємо подію
// targetBtn.removeEventListener('click' , () => {
//   console.log('Клік nan');
//   targetBtn.removeEventListener('click', onTargetButtonClick);
// });
// !функція повинна бути одна і таж сама
// function onTargetButtonClick() {
//   console.log('Клік по кнопці');
// };


//!remowe
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

//! form
// function onFormsubmit(event) {
//   event.preventDefault();//? form - запобігає перезавантаженню сторінки.
// }

//! обєкт посилань на елементи
// const refs = {
//   startBtn : document.querySelector(".js-start");
//   stopBtn : document.querySelector(".js-stop");
// }; 
// refs.stopBtn.addEventListener("focus", function);

//! події клавіатури
// const pressKey = document.querySelector(`.proba`);
// const clearBtn = document.querySelector('#btn');

// window.addEventListener('keydown', onPressKey);
// clearBtn.addEventListener('click', onPressBtn);

// function onPressKey(event) {

  // console.log(event);
  // console.log(event.key);

//   pressKey.textContent += event.key;
// };

// function onPressBtn() {
//   pressKey.textContent = '';
// };

