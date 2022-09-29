const buttonsSubmitList = document.querySelectorAll('.write-us__button');
const emailsList = document.querySelectorAll('.write-us__input');
console.log(emailsList);

const buttonSubmitText = {
  dekstop: 'Отремонтируйте камеру ✌️',
  mobile: '✌️',
}

const buttonSubmitTextCheck = {
  dekstop: 'Круто, спасибо за доверие!',
  mobile: '✔',
}

function setButtonText(button, text) {
  if (window.innerWidth <= 750 && button.textContent !== text.mobile) {
    button.textContent = text.mobile;
  }

  if (window.innerWidth > 750 && button.textContent !== text.dekstop) {
    button.textContent = text.dekstop;
  }
}

function checkEmail (email) {
  if (email.checkValidity()) {
    setButtonText(email.nextElementSibling, buttonSubmitTextCheck);
  } else {
    setButtonText(email.nextElementSibling, buttonSubmitText);
  }
}

window.addEventListener('resize', () => {
  emailsList.forEach(email => checkEmail(email));
})

emailsList.forEach(email => email.addEventListener('input', (event) => checkEmail(event.target)));

buttonsSubmitList.forEach(button => {
  setButtonText(button, buttonSubmitText);
  button.disabled = true;
});
