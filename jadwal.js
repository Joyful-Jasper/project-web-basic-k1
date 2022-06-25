const jadwal = () => {
  const berangkatInput = document.querySelector("#berangkat").value;
  const kotaAsalInput = document.querySelector("#kotaAsal").value;
  const tujuanInput = document.querySelector("#tujuan").value;
  const kelasPenerbanganInput = document.querySelector("#kelasPenerbangan").value;
  const jumlahPenumpangInput = document.querySelector("#jumlahPenumpang").value;
  const tanggalPergiInput = document.querySelector("#tanggalPergi").value;

  const data = {
    berangkat: berangkatInput,
    jumlahPenumpang: jumlahPenumpangInput,
    tanggalPergi: tanggalPergiInput,
    kotaAsal: kotaAsalInput,
    tujuan: tujuanInput,
    kelasPenerbangan: kelasPenerbanganInput,
  };
  console.log(data);
  const dataJSON = JSON.stringify(data);
  console.log(dataJSON);

  localStorage.setItem("data", dataJSON);

  localStorage.setItem("berangkat", berangkatInput);
  localStorage.setItem("tanggalPergi", tanggalPergiInput);
  localStorage.setItem("jumlahPenumpang", jumlahPenumpangInput);
  localStorage.setItem("kotaAsal", kotaAsalInput);
  localStorage.setItem("tujuan", tujuanInput);
  localStorage.setItem("kelasPenerbangan", kelasPenerbanganInput);

  window.location.href = "./pencarian/";
};
const get = () => {
  const dataJSON = localStorage.getItem("data");
  console.log(dataJSON);
};
const logout = () => {
  localStorage.setItem("isLogin", false);
  window.location.replace("./masuk.html");
};

//// akun
const akun = () => {
  window.location.replace("./akun.html");
};
