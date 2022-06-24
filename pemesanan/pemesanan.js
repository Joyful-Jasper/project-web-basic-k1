import { lazyLoad, getParamsFromUrl, symbols as sym } from '../common.js';
import { itemData } from '../assets/dummy.js';

/* methods */
const getTicketData = () => {
  const params = getParamsFromUrl(document.URL);
  const id = params.get('id');
  let data = { isFound: false };

  itemData.forEach((item) => {
    if (item.id === id) data = item;
  });

  return data;
};

const getPassenger = ({ adult, child, infant }) => {
  const adultStr = adult !== 0 ? `${adult} dewasa` : '';
  const childStr = child !== 0 ? `${child} bocah` : '';
  const infantStr = infant !== 0 ? `${infant} bayi` : '';
  const final = `${adultStr}, ${childStr}, ${infantStr}`
    .replace(/(^, , )|(^, )|(, $)|(, ,$)|(, . )/g, '')
    .replace(/(, . )/g, ', ')
  return final;
};

/* components callbacks */
// navbar
const setNavBar = (html) => {
  document.querySelector('#navbar').insertAdjacentHTML('beforeEnd', html);
};

// pemesanan
const loadPemesanan = ({
  fromName, fromCode, destName, destCode, date, passenger, seatClass,
}) => {
  const setPemesanan = (html) => {
    const hasilEl = document.createElement('div');
    hasilEl.insertAdjacentHTML('beforeEnd', html);
    hasilEl.querySelector('#judulPemesanan').textContent = `Penerbangan dari ${fromName} ke ${destName}`;
    hasilEl.querySelector('#infoPemesanan').textContent = `${fromName} (${fromCode}) ${sym.RIGHT_ARROW} ${destName} (${destCode})
      | ${date}
      | ${getPassenger(passenger)}
      | ${seatClass}`;

    document.querySelector('#pemesananHeader').appendChild(hasilEl);
  };

  lazyLoad('../components/Pemesanan.html', setPemesanan);
};

// item pemesanan
const loadPemesananInfo = ({
  logoMaskapai, nameMaskapai, fromTime, fromCode, estTime, transferCount, destTime, destCode,
}) => {
  const setPemesananInfo = (html) => {
    const hasilEl = document.createElement('div');

    hasilEl.insertAdjacentHTML('beforeEnd', html);
    hasilEl.querySelector('#logoMaskapai').src = logoMaskapai;
    hasilEl.querySelector('#nameMaskapai').textContent = nameMaskapai;
    hasilEl.querySelector('#fromTime').textContent = fromTime;
    hasilEl.querySelector('#fromCode').textContent = fromCode;
    hasilEl.querySelector('#estTime').textContent = estTime;
    hasilEl.querySelector('#transferCount').textContent = transferCount;
    hasilEl.querySelector('#destTime').textContent = destTime;
    hasilEl.querySelector('#destCode').textContent = destCode;

    document.querySelector('#pemesananInfo').appendChild(hasilEl);
  };

  lazyLoad('../components/PemesananItem.html', setPemesananInfo);
};

/* load components */
// load navbar
lazyLoad('../NavBar.html', setNavBar);

const ticketData = getTicketData();
if (ticketData.isFound !== false) {
  // load ticket data and component
  loadPemesanan(ticketData);

  // load pemesanan info
  loadPemesananInfo(ticketData);
}
