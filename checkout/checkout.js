const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const phone = document.getElementById("phone");
const nik = document.getElementById("nik");

// event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkData();
    if (checkData() === true){
        window.location.href = "http://google.com";
    }
});



// Check data di form
const checkData = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneValue = phone.value.trim();
    const nikValue = nik.value.trim();

    let firstNameValid = false;
    let lastNameValid = false;
    let phoneValid = false;
    let nikValid = false;

    if(firstNameValue === ''){
        setErrorFor(firstName);
    } else {
        setSuccessFor(firstName);
        firstNameValid = true;
    }

    if(lastNameValue === ''){
        setErrorFor(lastName);
    } else {
        setSuccessFor(lastName);
        lastNameValid = true;
    }

    if(phoneValue === '' || phoneValue === isNaN || phoneValue.length < 11 || phoneValue.length > 12){
        setErrorFor(phone);
    } else {
        setSuccessFor(phone);
        phoneValid = true;
    }

    if(nikValue === '' || nikValue === isNaN || nikValue.length < 16 || nikValue.length > 16){
        setErrorFor(nik);
    } else {
        setSuccessFor(nik);
        nikValid = true;
    }

    if (!firstNameValid || !lastNameValid || !nikValid || !phoneValid) {
        return false
    } else {
        return true
    }
}

let data = getData();

const getData = () => {
    return {firstNameValue : firstName.value.trim(),
            lastNameValue : lastName.value.trim(),
            phoneValue : phone.value.trim(),
            nikValue : nik.value.trim()}

}

// memunculkan pesan error
const setErrorFor = (x) => {
    x.className += " is-invalid";
}

// memunculkan pesan sukses 'is-valid' 
const setSuccessFor = (x) => {
    x.className = "form-control is-valid";
}
