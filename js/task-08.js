
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
 event.preventDefault(); //сторінка не повинна перезавантажуватися

   const formElements = event.currentTarget.elements;

 const mail = formElements.email.value;
 const password = formElements.password.value;
 
const formData = {
  mail,
  password,
};

if (mail === "" || password === "") {
  return alert("Всі поля повинні бути заповнені!");
}

console.log(formData);
event.currentTarget.reset();
};
