import throttle from 'lodash.throttle';

const refs = {
  formElement: document.querySelector('.feedback-form'),
  emailElement: document.querySelector('[name = email]'),
  messageElement: document.querySelector('[name = message]'),
  submitButtonElement: document.querySelector('[type = submit]'),
};

console.log(refs.formElement);
console.log(refs.emailElement);
console.log(refs.messageElement);
console.log(refs.submitButtonElement);

refs.formElement.addEventListener('submit', onFormSubmit);

refs.emailElement.addEventListener('input', throttle(onFormInput, 3000));
refs.messageElement.addEventListener('input', throttle(onFormInput, 3000));

function onFormSubmit(event) {
  event.preventDefault();
  console.log('sendint form');
  console.log(event.target[0].value);
  console.log(event.target[1].value);
}

function onFormInput(e) {
  console.log(e.target.name);
  // console.log(e.target.value);
  // formData[e.target.name] = e.target.value;
  // console.log(formData);
}
