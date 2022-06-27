import * as Utils from '../common.js';

// memunculkan pesan error
const setErrorFor = (x) => {
  x.className += ' is-invalid';
};

// memunculkan pesan sukses 'is-valid'
const setSuccessFor = (x) => {
  x.className = 'form-control is-valid';
};

const loadCheckout = () => {
  const setCheckout = (html) => {
    const checkoutEl = document.createElement('div');
    checkoutEl.insertAdjacentHTML('beforeEnd', html);
    // event listener
    checkoutEl.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = checkoutEl.querySelector('#firstname');
      const lastName = checkoutEl.querySelector('#lastname');
      const phone = checkoutEl.querySelector('#phone');
      const nik = checkoutEl.querySelector('#nik');
      const dataTraveler = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        phone: phone.value.trim(),
        nik: nik.value.trim(),
        firstNameEl: firstName,
        lastNameEl: lastName,
        phoneEl: phone,
        nikEl: nik,
      };

      const isValid = checkData(dataTraveler);
      if (isValid === true) {
        window.location.href = '../payment-gateway/';
      }
    });

    document.querySelector('#formulirTraveler').appendChild(checkoutEl);
  };

  Utils.lazyLoad('../components/FormTraveler.html', setCheckout);
};

// Check data di form
const checkData = ({
  firstName, lastName, phone, nik, firstNameEl, lastNameEl, phoneEl, nikEl
}) => {
  let firstNameValid = false;
  let lastNameValid = false;
  let phoneValid = false;
  let nikValid = false;

  if (firstName === '') {
    setErrorFor(firstNameEl);
  } else {
    setSuccessFor(firstNameEl);
    firstNameValid = true;
  }

  if (lastName === '') {
    setErrorFor(lastNameEl);
  } else {
    setSuccessFor(lastNameEl);
    lastNameValid = true;
  }

  if (phone === '' || phone === isNaN || phone.length < 11 || phone.length > 12) {
    setErrorFor(phoneEl);
  } else {
    setSuccessFor(phoneEl);
    phoneValid = true;
  }

  if (nik === '' || nik === isNaN || nik.length < 16 || nik.length > 16) {
    setErrorFor(nikEl);
  } else {
    setSuccessFor(nikEl);
    nikValid = true;
  }

  if (!firstNameValid || !lastNameValid || !nikValid || !phoneValid) {
    return false
  } else {
    return true
  }
};

// load navbar
Utils.getNavBar(document);

// load
loadCheckout();

// load footer
Utils.getFooter(document);
