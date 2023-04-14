const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const emailD = document.getElementById('emailDesktop');
const messageD = document.getElementById('txtSDesktop');
const dataD = localStorage.getItem('formData');
const storageDataD = JSON.parse(dataD)

if (storageDataD) {
    fname.value = storageDataD.firstname;
    lname.value = storageDataD.lastname;
    emailD.value = storageDataD.emailDesktop;
    messageD.value = storageDataD.txtSDesktop;
} else {
    fname.value = "";
    lname.value = "";
    emailD.value = "";
    messageD.value = "";
}

formValidatorD.addEventListener('input', () => {
    const formDataD = {
        firstname: fname.value,
        lastname: lname.value,
        emailDesktop: emailD.value,
        txtSDesktop: messageD.value,
    };
    localStorage.setItem('formData', JSON.stringify(formDataD));
});


