import * as Utils from '../common.js';
/* ------------------------------------------------------------------------------ */

/* methods */
// bend: get ticket
const getTicket = (ticketId) => {
  const tickets = Utils.jsonLoad('db_tickets');
  const ticket = tickets.filter((ticket) => ticket.id === ticketId);
  if (ticket.length !== 0) return ticket[0];
  return null;
};

// bend: get price
const getPriceTotal = (passengers, prices) => {
  let total = 0
  for (const pass in passengers) {
    for (const price of prices) {
      if (pass === price.name) total = total + (passengers[pass] * price.price);
    }
  }

  return total;
};

// bend: validate traveler data
const validateParams = (args, params) => {
  let isValid = false;
  args.forEach((item) => {
    isValid = params.has(item);
  });

  return isValid;
};

// api get: tickets from traveler data
const getTickets = (args) => {
  const params = Utils.getParamsFromUrl(document.URL);
  const isValid = validateParams(args, params);
  if (isValid) {
    const fromNameCode = params.get('from');
    const destNameCode = params.get('dest');
    const depart = params.get('depart');
    const adult = parseInt(params.get('adult'));
    const child = parseInt(params.get('child'));
    const infant = parseInt(params.get('infant'));
    const seatClass = params.get('seat');

    /* bend: tickets from db */
    const tickets = Utils.jsonLoad('db_tickets');
    const filteredTickets = tickets.filter((ticket) => (
      ticket.fromNameCode === fromNameCode
      && ticket.destNameCode === destNameCode));

    return {
      tickets: filteredTickets,
      travelerData: {
        fromNameCode,
        destNameCode,
        depart,
        passengers: {
          adult,
          child,
          infant,
        },
        seatClass,
      },
    };
  }

  return [];
};

// api post: booking
const createBooking = (userId, ticketId, passengers) => {
  const ticket = getTicket(ticketId);
  if (ticket === null) {
    alert('404 Ticket not found!');
    return false;
  }

  const priceTotal = getPriceTotal(passengers, ticket.prices);
  const booking = {
    id: 'booking-abc123',
    userId,
    ticketId,
    passengers,
    priceTotal,
    bookDate: new Date().toISOString(),
    logoMaskapai: ticket.logoMaskapai,
    nameMaskapai: ticket.nameMaskapai,
    fromName: ticket.fromName,
    fromNameCode: ticket.fromNameCode,
    fromCode: ticket.fromCode,
    fromTime: ticket.fromTime,
    estTime: ticket.estTime,
    transferCount: ticket.transferCount,
    destName: ticket.destName,
    destNameCode: ticket.destNameCode,
    destCode: ticket.destCode,
    destTime: ticket.destTime,
    depart: ticket.depart,
    seatClass: ticket.seatClass,
    pricePerTix: ticket.pricePerTix,
    priceList: ticket.prices,
  };

  // bend: db save
  const dbBookings = Utils.jsonLoad('db_bookings');

  Utils.jsonSave('db_bookings', [...dbBookings, booking])

  return booking.id;
};

/* components callbacks */
// navbar
const setNavBar = (html) => {
  document.querySelector('#navbar').innerHTML = html;
};

// pencarian
const loadItemPencarian = (data) => {
  const setPencarian = (html) => {
    const hasilEl = document.createElement('div');
    hasilEl.insertAdjacentHTML('beforeEnd', html);
    hasilEl.querySelector('#judulPencarian').textContent = `
      ${Utils.cityCodes[data.fromNameCode]} (${data.fromNameCode})
      ${Utils.symbols.RIGHT_ARROW}
      ${Utils.cityCodes[data.destNameCode]} (${data.destNameCode})`;
    hasilEl.querySelector('#infoPencarian').textContent = `
      ${data.depart} | ${Utils.getPassengers(data.passengers)} | ${data.seatClass}`;

    document.querySelector('#pencarian').appendChild(hasilEl);
  };

  Utils.lazyLoad('../components/pencarian/PencarianItem.html', setPencarian);
};

// saring
const setSaring = (html) => {
  const menuSaring = document.querySelector('#saring');
  menuSaring.insertAdjacentHTML('beforeEnd', html);

  const menuSaringWaktu = document.createElement('div');
  menuSaringWaktu.insertAdjacentHTML('beforeEnd', `
    <input type="checkbox" class="form-check-input" id="ddcWaktu_00.00">
    <label class="form-check-label" for="ddcWaktu_00.00">
      00:00
    </label>
    <br/>
    <input type="checkbox" class="form-check-input" id="ddcWaktu_12.00">
    <label class="form-check-label" for="ddcWaktu_12.00">
      12:00
    </label>
  `);

  const menuSaringMaskapai = document.createElement('div');
  menuSaringMaskapai.insertAdjacentHTML('beforeEnd', `
    <input type="checkbox" class="form-check-input" id="ddcMaskapai_Lorem.Ipsum">
    <label class="form-check-label" for="ddcMaskapai_Lorem.Ipsum">
      Lorem Ipsum
    </label>
    <br/>
    <input type="checkbox" class="form-check-input" id="ddcMaskapai_Ipsum.Lorem">
    <label class="form-check-label" for="ddcMaskapai_Ipsum.Lorem">
      Ipsum Lorem
    </label>
  `);

  menuSaring
    .querySelector('#listDropdownMenuWaktu')
    .insertAdjacentElement('beforeEnd', menuSaringWaktu);
  menuSaring
    .querySelector('#listDropdownMenuMaskapai')
    .insertAdjacentElement('beforeEnd', menuSaringMaskapai);
};

// list hasil
const loadItemHasil = (ticketData) => {
  const setHasil = (html) => {
    const hasilEl = document.createElement('div');

    hasilEl.insertAdjacentHTML('beforeEnd', html);
    hasilEl.querySelector('#logoMaskapai').src = ticketData.logoMaskapai;
    hasilEl.querySelector('#nameMaskapai').textContent = ticketData.nameMaskapai;
    hasilEl.querySelector('#fromTime').textContent = ticketData.fromTime;
    hasilEl.querySelector('#fromCode').textContent = ticketData.fromCode;
    hasilEl.querySelector('#estTime').textContent = ticketData.estTime;
    hasilEl.querySelector('#transferCount').textContent = ticketData.transferCount;
    hasilEl.querySelector('#destTime').textContent = ticketData.destTime;
    hasilEl.querySelector('#destCode').textContent = ticketData.destCode;
    hasilEl.querySelector('#pricePerTix').textContent = Utils.toIDR(ticketData.pricePerTix);

    const btId = `selectTix_${ticketData.id}`;
    hasilEl.querySelector('#selectTix').addEventListener('click', () => {
      const userId = localStorage.getItem('currentUserId');
      /* api post: booking return booking id */
      const bookingId = createBooking(userId, ticketData.id, travelerData.passengers);
      localStorage.setItem('currentBookingId', bookingId);
      /* with history (logged in) */
      // const bookingHistoryId = localStorage.getItem('bookingHistoryIds');
      // localStorage.setItem('bookingHistoryIds', [...bookingHistoryId, bookingId]);
      if (bookingId != null) {
        window.location.href = `../pemesanan/?id=${bookingId}`;
      } else {
        alert('Gagal membuat pemesanan!');
      }
    });
    hasilEl.querySelector('#selectTix').id = btId;

    document.querySelector('#listHasil').appendChild(hasilEl);
  };

  // load list hasil
  Utils.lazyLoad('../components/pencarian/Hasil.html', setHasil);
};

/* load components */
// load navbar
Utils.lazyLoad('../components/NavBar.html', setNavBar);

/* api get: traveler data */
const { tickets, travelerData } = getTickets(Utils.params.travelerDataNames)
// local: current traveler data
Utils.jsonSave('currentTravelerData', travelerData);
if (travelerData !== null) {
  // load pencarian
  loadItemPencarian(travelerData);

  // load saring
  Utils.lazyLoad('../components/pencarian/Saring.html', setSaring);

  // load hasil items
  tickets.forEach((item) => loadItemHasil(item));

} else {
  alert('Data error!');
}