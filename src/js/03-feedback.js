import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const localStorageKey = 'feedback-form-state';
const throttledonFormInput = throttle(onFormInput, 500);

form.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttledonFormInput);
textarea.addEventListener('input', throttledonFormInput);

populateFormData();

function onFormInput() {
    const userData = {
        email: emailInput.value,
        message: textarea.value
    }
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
};

function populateFormData() {
    const savedFormData = localStorage.getItem(localStorageKey);

    if (savedFormData) {
        const saveData = JSON.parse(savedFormData);
        emailInput.value = saveData.email;
        textarea.value = saveData.message;
    }
};

function onFormSubmit(event) {
    event.preventDefault();
    const object = localStorage.getItem(localStorageKey);
    console.log(object);
    localStorage.removeItem(localStorageKey);
    event.currentTarget.reset();
    
};

