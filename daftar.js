//// js pendaftaran
function daftar() {
  const emailInput = document.querySelector("#email").value;
  const fullNameInput = document.querySelector("#FullName").value;
  const tanggalInput = document.querySelector("#Tanggal").value;
  const passwordInput = document.querySelector("#password").value;
  const kofirmasiPasswordInput = document.querySelector("#konfirmasipassword").value;

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
  window.location.replace("./jadwal.html");

  localStorage.setItem("email", emailInput);
  localStorage.setItem("FullName", fullNameInput);
  localStorage.setItem("tanggal", tanggalInput);
  localStorage.setItem("password", passwordInput);
  localStorage.setItem("kofirmasipassword", kofirmasiPasswordInput);
}

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
    window.location.replace("./jadwal.html");
    alert("Login sukses");
  } else {
    console.log("email atau password ada yang salah");
    alert("email atau password ada yang salah");
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
  }
};
///// logout
const logout = () => {
  localStorage.setItem("isLogin", false);
  window.location.replace("./masuk.html");
};
////// login
const login = () => {
  window.location.replace("./masuk.html");
};

const pendaftaran = () => {
  window.location.replace("./daftar.html");
};
//// tampilkan kata sandi
const sandi = () => {
  console.log("bandung");
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};
////////

const get1 = () => {
  const dataJSON = localStorage.getItem("data");
  innerHTML = "data";
  document.querySelector("#data akun");
};
