import * as Utils from '../common.js';

const setDaftar = (html) => {
  const daftarAkun = () => {
    const emailInput = daftarEl.querySelector("#email").value;
    const fullNameInput = daftarEl.querySelector("#FullName").value;
    const tanggalInput = daftarEl.querySelector("#Tanggal").value;
    const passwordInput = daftarEl.querySelector("#password").value;
    const kofirmasiPasswordInput = daftarEl.querySelector("#konfirmasipassword").value;

    const data = {
      email: emailInput,
      FullName: fullNameInput,
      Tanggal: tanggalInput,
      password: passwordInput,
      kofirmasipassword: kofirmasiPasswordInput,
    };
    console.log(data);
    const dataJSON = JSON.stringify(data);
    console.log(dataJSON);

    localStorage.setItem("data", dataJSON);
    window.location.replace("../");

    localStorage.setItem("email", emailInput);
    localStorage.setItem("FullName", fullNameInput);
    localStorage.setItem("tanggal", tanggalInput);
    localStorage.setItem("password", passwordInput);
    localStorage.setItem("kofirmasipassword", kofirmasiPasswordInput);
  };

  const daftarEl = document.createElement('div');
  daftarEl.insertAdjacentHTML('beforeEnd', html);
  daftarEl.querySelector('#btnDaftar').addEventListener('click', daftarAkun);

  document.querySelector('#formulirDaftar').appendChild(daftarEl);
};

Utils.lazyLoad('../components/Daftar.html', setDaftar);

// load navbar
Utils.getNavBar(document);

// load footer
Utils.getFooter(document);

const get = () => {
  const dataJSON = localStorage.getItem("data");
  console.log(dataJSON);
};

/////// masuk
const masuk = () => {
  const emailInput = document.querySelector("#email").value;
  const passwordInput = document.querySelector("#password").value;

  console.log(emailInput, passwordInput);

  const dataLocal = localStorage.getItem("data");
  const dataParse = JSON.parse(dataLocal);

  console.log(dataParse);

  if (emailInput === dataParse.email && passwordInput === dataParse.password) {
    console.log("email dan password sama");
    window.location.href = "./jadwal.html";
    alert("Login sukses");
  } else {
    console.log("email atau password ada yang salah");
    alert("email atau password ada yang salah");
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
  }
};

const get1 = () => {
  const dataJSON = localStorage.getItem("data");
  innerHTML = "data";
  document.querySelector("#data akun");
};
