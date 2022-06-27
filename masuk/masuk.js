import * as Utils from '../common.js';

const setMasuk = (html) => {
  const sandi = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const masuk = (el) => {
    const emailInput = el.querySelector("#email").value;
    const passwordInput = el.querySelector("#password").value;

    const dataLocal = localStorage.getItem("data");
    const dataParse = JSON.parse(dataLocal);

    if (emailInput === dataParse.email && passwordInput === dataParse.password) {
      localStorage.setItem('isLogin', false);
      window.location.replace("../");
    } else {
      alert("email atau password ada yang salah");
      el.querySelector("#email").value = "";
      el.querySelector("#password").value = "";
    }
  };

  const masukEl = document.createElement('div');
  masukEl.insertAdjacentHTML('beforeEnd', html);

  masukEl.querySelector('#btnShowPassword').addEventListener('click', sandi);
  masukEl.querySelector('#btnLogin').addEventListener('click', () => masuk(masukEl));
  document.querySelector('#formulirMasuk').appendChild(masukEl);
};

// load
Utils.lazyLoad('../components/Masuk.html', setMasuk);

// load navbar
Utils.getNavBar(document);

// load footer
Utils.getFooter(document);
