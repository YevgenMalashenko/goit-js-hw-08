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

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  const userInfo = {};
  userInfo.email = `${email.value}`;
  userInfo.message = `${message.value}`;

  console.log(userInfo);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;

  const userInfo = {};
  userInfo.email = `${email.value}`;
  userInfo.message = `${message.value}`;

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
