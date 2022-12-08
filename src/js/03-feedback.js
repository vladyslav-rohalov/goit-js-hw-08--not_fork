const throttle = require('lodash.throttle');
const feedbackFormRef = document.querySelector('.feedback-form');
const emailFormRef = document.querySelector('.feedback-form input');
const textFormRef = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const cachedValues = JSON.parse(localStorage.getItem(STORAGE_KEY));

feedbackFormRef.addEventListener('submit', onFormSubmit);

ifCached();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(
    `E-mail: ${cachedValues.email}, Message: ${cachedValues.message}`
  );
  localStorage.removeItem(STORAGE_KEY);
}

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function ifCached() {
  if (cachedValues) {
    emailFormRef.value = cachedValues.email || '';
    textFormRef.value = cachedValues.message || '';
  }
}
