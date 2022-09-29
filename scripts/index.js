const buttonsSubmitList = document.querySelectorAll('.write-us__button');
const emailsList = document.querySelectorAll('.write-us__input');
const writeUsFormsList = document.querySelectorAll('.write-us__form');
let onSubmit = false;

const buttonSubmitText = {
  dekstop: 'Отремонтируйте камеру ✌️',
  mobile: '✌️',
}

const buttonSubmitTextCheck = {
  dekstop: 'Круто, спасибо за доверие!',
  mobile: '✔',
}

function setButtonText(button, text) {
  if (window.innerWidth <= 650 && button.textContent !== text.mobile) {
    button.textContent = text.mobile;
  }

  if (window.innerWidth > 650 && button.textContent !== text.dekstop) {
    button.textContent = text.dekstop;
  }
}

function checkOnSubmit(email) {
  if (onSubmit && email.value) {
    setButtonText(email.nextElementSibling, buttonSubmitTextCheck);
  } else {
    setButtonText(email.nextElementSibling, buttonSubmitText);
  }
}

function checkForm(event) {
  event.preventDefault();
  const input = event.target.querySelector('.write-us__input');
  const button = event.target.querySelector('.write-us__button');
  if (input.checkValidity()) {
    setButtonText(button, buttonSubmitTextCheck);
    onSubmit = true;
  }
}

window.addEventListener('resize', () => {
  emailsList.forEach(email => checkOnSubmit(email));
})

emailsList.forEach(email => email.addEventListener('input', (event) => {
  setButtonText(event.target.nextElementSibling, buttonSubmitText);
  onSubmit = false;
}));

writeUsFormsList.forEach(form => form.addEventListener('submit', checkForm));

buttonsSubmitList.forEach(button => {
  setButtonText(button, buttonSubmitText);
});
