import { ticketsData } from '../assets/dummy.js'; // api get: tickets
localStorage.setItem('db_tickets', JSON.stringify(ticketsData));
localStorage.setItem('db_bookings', '[]');
/* ------------------------------------------------------------------------------ */

// is login
localStorage.setItem('isLogin', false);
// currrent user id
localStorage.setItem('currentUserId', 'user-anon-987xyz');
// localStorage.setItem('currentUserId', 'user-abc123');

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
});
