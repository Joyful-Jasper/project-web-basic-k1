import { lazyLoad, symbols as sym } from '../common.js';
import { itemData } from '../assets/dummy.js';

/* components callbacks */
// navbar
const setNavBar = (html) => {
  document.querySelector('#navbar').insertAdjacentHTML('beforeEnd', html);
};
// pencarian
const setPencarian = (html) => {
  const hasilEl = document.createElement('div');
  hasilEl.insertAdjacentHTML('beforeEnd', html);
  hasilEl.querySelector('#judulPencarian').textContent = `Bakarta (JKTA) ${sym.RIGHT_ARROW} Wurabaya (SUB)`;
  hasilEl.querySelector('#infoPencarian').textContent = 'Rabu, 22 Juni 2022 | 2 dewasa | Ekonomi';

  document.querySelector('#pencarian').appendChild(hasilEl);
};

// saring
const setSaring = (html) => {
  document.querySelector('#saring').insertAdjacentHTML('beforeEnd', html);
};
// list hasil
const loadItemHasil = (data) => {
  const setHasil = (html) => {
    const hasilEl = document.createElement('div');

    hasilEl.insertAdjacentHTML('beforeEnd', html);
    hasilEl.querySelector('#logoMaskapai').src = data.logoMaskapai;
    hasilEl.querySelector('#nameMaskapai').textContent = data.nameMaskapai;
    hasilEl.querySelector('#fromTime').textContent = data.fromTime;
    hasilEl.querySelector('#fromCode').textContent = data.fromCode;
    hasilEl.querySelector('#estTime').textContent = data.estTime;
    hasilEl.querySelector('#transferCount').textContent = data.transferCount;
    hasilEl.querySelector('#destTime').textContent = data.destTime;
    hasilEl.querySelector('#destCode').textContent = data.destCode;
    hasilEl.querySelector('#pricePerTix').textContent = data.pricePerTix;

    const btId = `selectTix_${data.id}`;
    hasilEl.querySelector('#selectTix').addEventListener('click', () => {
      window.location.href = `../pemesanan/?id=${data.id}`;
    });
    hasilEl.querySelector('#selectTix').id = btId;

    document.querySelector('#listHasil').appendChild(hasilEl);
  };

  // load list hasil
  lazyLoad('../components/Hasil.html', setHasil);
};

/* load components */
// load navbar
lazyLoad('../components/NavBar.html', setNavBar);
// load pencarian
lazyLoad('../components/PencarianItem.html', setPencarian);
// load saring
lazyLoad('../components/Saring.html', setSaring);
// load item
itemData.forEach((item) => loadItemHasil(item));
