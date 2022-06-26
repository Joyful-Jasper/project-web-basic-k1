const nama = document.getElementById('name')
const phone = document.getElementById('phone')
const nik = document.getElementById('nik')
const penumpang = localStorage.getItem('penumpang');
const dataPenumpang = JSON.parse(penumpang)

const passangerData = () => {
    if(dataPenumpang.genderValue === 'Pria'){
        nama.innerText += `Tn. ${dataPenumpang.firstNameValue} ${dataPenumpang.lastNameValue}`
    } else {
        nama.innerText += `Ny. ${dataPenumpang.firstNameValue} ${dataPenumpang.lastNameValue}`
    }
    phone.innerText += `+62 ${dataPenumpang.phoneValue}`
    nik.innerText += `${dataPenumpang.nikValue}`
}

const bayar = () => {
    window.location.href = "../payment-success/index.html";
}

passangerData()

