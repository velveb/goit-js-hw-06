


const inputEl = document.querySelector('#validation-input');
const inputNumber = 6;

inputEl.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
    if (event.currentTarget.value.length === inputNumber) { 
    inputEl.classList.remove('invalid'); 
    return inputEl.classList.add('valid');

  }  inputEl.classList.remove('valid'); 
    return inputEl.classList.add('invalid'); 
  };
