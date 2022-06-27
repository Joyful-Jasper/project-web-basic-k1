import * as Utils from './common.js'; // api get: tickets
import { ticketsData } from './assets/dummy.js'; // api get: tickets
localStorage.setItem('db_tickets', JSON.stringify(ticketsData));
localStorage.setItem('db_bookings', '[]');
// is login test
// localStorage.setItem('isLogin', true);
// currrent user id
// localStorage.setItem('currentUserId', 'user-anon-987xyz');
// localStorage.setItem('currentUserId', 'user-abc123');
/*
const from = 'JKTA';
const dest = 'SUB';
const depart = '25-06-2022';
const adult = 1;
const child = 1;
const infant = 0;
const seat = 'ECONOMY';
document.querySelector('#searchTix').addEventListener('click', () => {
  window.location.href = `./pencarian/?
    from=${from}
    &dest=${dest}
    &depart=${depart}
    &adult=${adult}
    &child=${child}
    &infant=${infant}
    &seat=${seat}`.replace(/(\n)|(\s)/g, '');
}); */

/* ------------------------------------------------------------------------------- */

/* components callbacks */
// navbar

// jadwal
const setJadwal = (html) => {
  document.querySelector('#formulirJadwal').innerHTML = html;

  const jadwal = () => {
    // const berangkatInput = document.querySelector('#berangkat').value;
    const from = document.querySelector('#kotaAsal').value;
    const dest = document.querySelector('#tujuan').value;
    const seat = document.querySelector('#kelasPenerbangan').value;
    const adult = document.querySelector('#jumlahPenumpang').value;
    const depart = document.querySelector('#tanggalPergi').value;

    const child = 0;
    const infant = 0;

    window.location.href = `./pencarian/?
    from=${from}
    &dest=${dest}
    &depart=${depart}
    &adult=${adult}
    &child=${child}
    &infant=${infant}
    &seat=${seat}`.replace(/(\n)|(\s)/g, '');
  };

  document.querySelector('#searchTicket').addEventListener('click', jadwal);
};

// galeri
const setGaleri = (html) => {
  document.querySelector('#gallery').innerHTML = html;
};

/* load components */
// load navbar
Utils.getNavBar(document);

// load jadwal
Utils.lazyLoad('./components/Jadwal.html', setJadwal);

// load galeri
Utils.lazyLoad('./components/Gallery.html', setGaleri);

// load footer
Utils.getFooter(document);

/* ------------------------------------------------------------------------------- */

const get = () => {
  const dataJSON = localStorage.getItem('data');
  console.log(dataJSON);
};

const logout = Utils.logout;
//// akun
const akun = () => {
  window.location.replace('./akun/');
};


