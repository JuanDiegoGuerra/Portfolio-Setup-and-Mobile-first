const namesM = document.getElementById('fullname');
const emailM = document.getElementById('emailMobile');
const messageM = document.getElementById('txtSMobile');
const dataM = localStorage.getItem('formDatamo');
const storageDataM = JSON.parse(dataM);

if (storageDataM) {
  namesM.value = storageDataM.fullname;
  emailM.value = storageDataM.emailMobile;
  messageM.value = storageDataM.txtSMobile;
} else {
  namesM.value = '';
  emailM.value = '';
  messageM.value = '';
}

formValidatorM.addEventListener('input', () => {
  const formDataM = {
    fullname: namesM.value,
    emailMobile: emailM.value,
    txtSMobile: messageM.value,
  };
  localStorage.setItem('formDatamo', JSON.stringify(formDataM));
});
