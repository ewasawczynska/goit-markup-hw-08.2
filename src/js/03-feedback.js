import throttle from 'lodash.throttle';

const formData = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const inputData = {
  email: '',
  message: '',

  clear() {
    this.email = '';
    this.message = '';
  },
};

function setData(inputData) {
  try {
    localStorage.setItem(formData, JSON.stringify(inputData));
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
    data.email = getInputData.email;
    data.message = getInputData.message;
    return data;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function removeData(key) {
  localStorage.removeItem(key);
}

function completeForm(email, message) {
  form.email.value = email;
  form.message.value = message;
}

completeForm(inputData.email, inputData.message);

function saveForm(event) {
  formData.email = form.email.value;
  formData.message = form.message.value;
  setData(formData);
}

function getFormData() {
  getFormData(formData, inputData);
  completeForm;
  completeForm(inputData.email, inputData.message);
}

function resetData() {
  removeData(formData);
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
