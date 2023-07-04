import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const inputData = {
  emailAddress: '',
  message: '',

  clear() {
    this.emailAddress = '';
    this.message = '';
  },
};

function setData(data) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function getData(key, data) {
  try {
    const serializedState = localStorage.getItem(key);
    const getInputData =
      serializedState === null ? undefined : JSON.parse(serializedState);
    data.emailAddress = getInputData.emailAddress;
    data.message = getInputData.message;
    return data;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

getData(LOCALSTORAGE_KEY, inputData);

function removeData(key) {
  localStorage.removeItem(key);
}

function completeForm(emailAddress, message) {
  form.email.value = emailAddress;
  form.message.value = message;
}

completeForm(inputData.emailAddress, inputData.message);

function saveForm(event) {
  inputData.emailAddress = form.email.value;
  inputData.message = form.message.value;
  setData(inputData);
}

function getFormData() {
  getFormData(LOCALSTORAGE_KEY, inputData);
  completeForm;
  completeForm(inputData.email, inputData.message);
}

function resetData() {
  removeData(LOCALSTORAGE_KEY);
  inputData.clear();
  completeForm(' ', ' ');
}

function sendForm(event) {
  event.preventDefault();
  console.log(inputData);
  resetData();
}

form.addEventListener('input', throttle(saveForm, 1000));
form.addEventListener('submit', sendForm);
