import throttle from 'lodash.throttle';

const refs = {
  formElement: document.querySelector('.feedback-form'),
  emailElement: document.querySelector('[name = email]'),
  messageElement: document.querySelector('[name = message]'),
  submitButtonElement: document.querySelector('[type = submit]'),
};

fillUpFormFields();

refs.formElement.addEventListener('submit', onFormSubmit);
refs.formElement.addEventListener('input', throttle(onFormInput, 500));

const userInfo = {};

function onFormSubmit(event) {
  event.preventDefault();
  userInfo[refs.emailElement.name] = refs.emailElement.value;
  userInfo[refs.messageElement.name] = refs.messageElement.value;

  console.log(userInfo);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
  userInfo[refs.emailElement.name] = refs.emailElement.value;
  userInfo[refs.messageElement.name] = refs.messageElement.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}

function fillUpFormFields() {
  const savedUserInfo = localStorage.getItem('feedback-form-state');
  const parsedUserInfo = JSON.parse(savedUserInfo);

  if (savedUserInfo) {
    refs.emailElement.value = parsedUserInfo.email;
    refs.messageElement.value = parsedUserInfo.message;
  }
}
