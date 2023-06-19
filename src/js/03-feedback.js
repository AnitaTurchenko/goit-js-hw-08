import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const KEY_STORAGE = "feedback-form-state";
const {email, message} = form.elements;

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormInput, 500));
reloadPage();

function onFormSubmit(evt) {
    evt.preventDefault();
    if(email.value === "" || message.value === "") {
       return alert(`Всі поля повинні бути заповнені`)
    };
    console.log({email: email.value, message: message.value});
    localStorage.removeItem(KEY_STORAGE);
    evt.currentTarget.reset();
};

function onFormInput() {
    let dataForm = JSON.stringify({email: email.value, message: message.value});
    localStorage.setItem(KEY_STORAGE, dataForm);
};

function reloadPage() {
    let savedInfo = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if(savedInfo) {
        email.value = savedInfo.email;
        message.value = savedInfo.message;
    }
};