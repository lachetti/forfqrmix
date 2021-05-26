"use strict"; 

const buttonMessage = document.querySelector('#buttonMessage');
const buttonSend = document.querySelector('#send-button');
const form = document.querySelector('.setMessage');

buttonMessage.addEventListener("click", () => {
    form.classList.toggle("showForm");
});

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailInput = document.querySelector('#email-input');
function validateEmail(value) {
    return EMAIL_REGEXP.test(value);
}
function updateInputEmail() {
    if (validateEmail(emailInput.value)) {
        emailInput.style.borderColor = '#00ff00';
    } else {
        emailInput.style.borderColor = '#ff0000';
    }
}
emailInput.addEventListener('input', updateInputEmail);

const NAME_REGEXP = /^[A-Za-zА-Яа-я]+$/;
const nameInput = document.querySelector('#name-input');
function validateName(value) {
    return NAME_REGEXP.test(value);
}
function updateInputName() {
    if (validateName(nameInput.value)) {
        nameInput.style.borderColor = '#00ff00';
    } else {
        nameInput.style.borderColor = '#ff0000';
    }
}
nameInput.addEventListener('input', updateInputName);