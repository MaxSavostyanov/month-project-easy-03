const submitButtonsList = document.querySelectorAll('.write-us__button');

function setSubmitButtonText() {
  if (window.innerWidth <= 750) {
    submitButtonsList.forEach(item => item.textContent = '✌️');
  } else {
    submitButtonsList.forEach(item => item.textContent = 'Отремонтируйте камеру ✌️');
  }
}

window.addEventListener('resize', setSubmitButtonText)

setSubmitButtonText();
