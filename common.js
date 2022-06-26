const cityCodes = {
  JKTA: 'Jakarta',
  SUB: 'Surabaya',
  MLG: 'Malang',
  BDG: 'Bandung',
};

const symbols = {
  RIGHT_ARROW: '\u2794',
};

const params = {
  travelerDataNames: [
    'from', 'dest', 'depart', 'adult', 'child', 'infant', 'seat',
  ],
};

const toIDR = ($int) => $int.toLocaleString('id-ID', {
  style: 'currency',
  currency: 'IDR'
});

const lazyLoad = (href, callback) => {
  fetch(href)
    .then((res) => res.text())
    .then((html) => callback(html))
    .catch((err) => console.log(err));
};

const getParamsFromUrl = (url) => {
  const newUrl = new URL(url);
  const searchParams = new URLSearchParams(newUrl.search);
  return searchParams;
};

const getPassengers = ({ adult, child, infant }) => {
  const adultStr = adult !== 0 ? `${adult} dewasa` : '';
  const childStr = child !== 0 ? `${child} bocah` : '';
  const infantStr = infant !== 0 ? `${infant} bayi` : '';
  let final = `${adultStr}, ${childStr}, ${infantStr}`;
  final = final
    .trim()
    .replace(/(^, , )|(^, )|(,$)|(, ,$)/g, '')
    .replace(/(, , )/g, ', ');
  // console.log(final);
  return final;
};

const jsonSave = ($key, $jsonData) => {
  localStorage.setItem($key, JSON.stringify($jsonData));
};

const jsonLoad = ($key) => {
  return JSON.parse(localStorage.getItem($key));
};

export {
  cityCodes,
  symbols,
  params,
  toIDR,
  lazyLoad,
  getParamsFromUrl,
  getPassengers,
  jsonSave,
  jsonLoad,
};
