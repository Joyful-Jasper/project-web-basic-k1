import * as Utils from '../common.js';
/* ------------------------------------------------------------------------------ */

/* methods */
// api get: ticket
const getBookingData = () => {
  const params = Utils.getParamsFromUrl(document.URL);
  const bookingId = params.get('id');
  const dbBookings = Utils.jsonLoad('db_bookings');
  const booking = dbBookings.filter((booking) => booking.id === bookingId);
  if (booking.length !== 0) return booking[0];
  return null;
};

const ticketNames = {
  adult: 'tiket dewasa',
  child: 'tiket bocah',
  infant: 'tiket bayi',
};

/* components callbacks */
// navbar
const setNavBar = (html) => {
  document.querySelector('#navbar').innerHTML = html;
};

// pemesanan
const loadPemesanan = (data) => {
  const setPemesanan = (html) => {
    const pesanEl = document.createElement('div');
    pesanEl.insertAdjacentHTML('beforeEnd', html);
    pesanEl.querySelector('#headerJudulPemesanan').textContent = `
      Penerbangan dari ${data.fromName} ke ${data.destName}`;
    pesanEl.querySelector('#headerSubJudulPemesanan').textContent = `
      ${data.fromName} (${data.fromCode}) ${Utils.symbols.RIGHT_ARROW} ${data.destName} (${data.destCode})
        | ${data.depart}
        | ${Utils.getPassengers(data.passengers)}
        | ${data.seatClass}`;

    document.querySelector('#pemesananHeader').appendChild(pesanEl);
  };

  Utils.lazyLoad('../components/PemesananHeader.html', setPemesanan);
};

// item pemesanan
const loadPemesananInfo = (data) => {
  const setPemesananInfo = (html) => {
    const infoEl = document.createElement('div');

    infoEl.insertAdjacentHTML('beforeEnd', html);
    infoEl.querySelector('#logoMaskapai').src = data.logoMaskapai;
    infoEl.querySelector('#nameMaskapai').textContent = data.nameMaskapai;
    infoEl.querySelector('#fromTime').textContent = data.fromTime;
    infoEl.querySelector('#fromCode').textContent = data.fromCode;
    infoEl.querySelector('#estTime').textContent = data.estTime;
    infoEl.querySelector('#transferCount').textContent = data.transferCount;
    infoEl.querySelector('#destTime').textContent = data.destTime;
    infoEl.querySelector('#destCode').textContent = data.destCode;

    document.querySelector('#pemesananInfo').appendChild(infoEl);
  };

  Utils.lazyLoad('../components/PemesananInfo.html', setPemesananInfo);
};

// item pemesanan
const loadPemesananRincian = ({
  id, priceList, priceTotal, passengers,
}) => {
  const setPemesananRincian = (html) => {
    // container
    const rincianEl = document.createElement('div');
    rincianEl.insertAdjacentHTML('beforeEnd', html);

    // generate price items
    const rincianItems = document.createElement('div');
    priceList.forEach(({ name, price }) => {
      if (passengers[name] !== 0) {
        rincianItems.insertAdjacentHTML('beforeEnd', `
        <div class="row mb-2">
          <div id="priceTitle_${name}" class="col">Harga ${ticketNames[name] ? ticketNames[name] : name}</div>
          <div id="priceValue_${price}" class="col text-end">${Utils.toIDR(price)}</div>
        </div>
      `);
      }
    });

    // set values
    rincianEl.querySelector('#listRincian').appendChild(rincianItems); // append price items
    rincianEl.querySelector('#priceTotal').textContent = Utils.toIDR(priceTotal);
    rincianEl.addEventListener('click', () => {
      window.location.href = `../pembayaran/?id=${id}`; // booking id
    });

    document.querySelector('#pemesananRincian').appendChild(rincianEl);
  };

  Utils.lazyLoad('../components/PemesananRincian.html', setPemesananRincian);
};

/* load components */
// load navbar
Utils.lazyLoad('../components/NavBar.html', setNavBar);

const bookingData = getBookingData();
if (bookingData !== null) {
  // load ticket data and component
  loadPemesanan(bookingData);

  // load pemesanan info
  loadPemesananInfo(bookingData);

  // load pemesanan rincian
  loadPemesananRincian(bookingData);
}
