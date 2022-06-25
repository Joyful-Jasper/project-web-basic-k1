const data1 = localStorage.getItem("tanggal");
const data2 = localStorage.getItem("email");
const data3 = localStorage.getItem("FullName");
console.log(data1);

const email = document.querySelector("#email");
const tanggal = document.querySelector("#tanggal-lahir");
const nama = document.querySelector("#nama");

email.innerHTML += data2;
tanggal.innerHTML += data1;
nama.innerHTML += data3;

const kembali = () => {
  window.location.replace("./jadwal.html");
};
