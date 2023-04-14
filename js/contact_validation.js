const formValidatorM = document.getElementById('formMobile');
const formValidatorD = document.getElementById('formDesktop');
const emailValidatorM = document.getElementById('emailMobile');
const emailValidatorD = document.getElementById('emailDesktop');
const errorM = document.querySelector('.email-validatorMobile');
const errorD = document.querySelector('.email-validatorDesktop');
const errorMessage = document.createElement('div');
errorMessage.classList.add('message');

formValidatorM.addEventListener('submit', (event) => {
  if ((/[A-Z]/).test(emailValidatorM.value)) {
    event.preventDefault();

    errorMessage.innerHTML = ` 
      Please use lowercase letters in your email address `;

    errorM.appendChild(errorMessage);
  }
});

formValidatorD.addEventListener('submit', (event) => {
  if ((/[A-Z]/).test(emailValidatorD.value)) {
    event.preventDefault();

    errorMessage.innerHTML = ` 
      Please use lowercase letters in your email address `;

    errorD.appendChild(errorMessage);
  }
});

emailValidatorM.addEventListener('click', () => {
  errorMessage.innerHTML = '';
});

emailValidatorD.addEventListener('click', () => {
  errorMessage.innerHTML = '';
});