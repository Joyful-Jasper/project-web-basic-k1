import * as Utils from '../common.js';

const setAkun = (html) => {
  const akunEl = document.createElement('div');
  akunEl.insertAdjacentHTML('beforeEnd', html);

  const dataTanggal = localStorage.getItem('tanggal');
  const dataEmail = localStorage.getItem('email');
  const dataNama = localStorage.getItem('FullName');

  const emailEl = akunEl.querySelector('#email');
  const tanggalEL = akunEl.querySelector('#tanggal-lahir');
  const namaEl = akunEl.querySelector('#nama');

  emailEl.innerText = dataEmail;
  namaEl.innerText = dataNama;
  tanggalEL.innerText = dataTanggal;

  const kembali = () => {
    window.location.replace('../');
  };

  akunEl.querySelector('#btnKembali').addEventListener('click', kembali);

  document.querySelector('#formulirAkun').appendChild(akunEl);
};

Utils.lazyLoad('../components/Akun.html', setAkun);

// load navbar
Utils.getNavBar(document);

// load footer
Utils.getFooter(document);
