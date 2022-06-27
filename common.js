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

const checkLogin = () => {
  const isLogin = localStorage.getItem('isLogin');
  return (isLogin === 'true');
};

const hideEl = (el) => {
  el.classList.remove('d-none');
  el.classList.toggle('d-none');
};

const showEl = (el) => {
  el.classList.remove('d-none');
};

const logout = () => {
  localStorage.setItem('isLogin', false);
  window.location.href = `${window.location.origin}/`;
};

const login = () => {
  window.location.href = `${window.location.origin}/masuk/`;
};

const pendaftaran = () => {
  window.location.href = `${window.location.origin}/daftar/`;
};

const akun = () => {
  window.location.href = `${window.location.origin}/akun/`;
};

const getNavBar = (document) => {
  const setNavBar = (html) => {
    const navBarEl = document.createElement('div');

    navBarEl.insertAdjacentHTML('beforeEnd', html);
    navBarEl.querySelector('#brandLogo').src = `${window.location.origin}/assets/brand_logo.png`;
    const loggedEl = [
      navBarEl.querySelector('#navMasuk'),
      navBarEl.querySelector('#navDaftar')
    ];
    const notLogged = [
      navBarEl.querySelector('#navKeluar'),
      navBarEl.querySelector('#navProfil')
    ];

    const isLogin = checkLogin();
    if (isLogin) {
      loggedEl.forEach((item) => hideEl(item));
      notLogged.forEach((item) => showEl(item));
      navBarEl.querySelector('#navBtnProfil').addEventListener('click', akun);
      navBarEl.querySelector('#navBtnLogout').addEventListener('click', logout);
    } else {
      loggedEl.forEach((item) => showEl(item));
      notLogged.forEach((item) => hideEl(item));
      navBarEl.querySelector('#navBtnLogin').addEventListener('click', login);
      navBarEl.querySelector('#navBtnDaftar').addEventListener('click', pendaftaran);
    }
    document.querySelector('#navbar').innerHTML = '';
    document.querySelector('#navbar').insertAdjacentElement('beforeEnd', navBarEl);
  };

  lazyLoad(`${window.location.origin}/components/NavBar.html`, setNavBar);
}

const getFooter = (document) => {
  const setFooter = (html) => {
    document.querySelector('#footer').innerHTML = html;
  };
  lazyLoad(`${window.location.origin}/components/Footer.html`, setFooter);
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
  checkLogin,
  hideEl,
  showEl,
  logout,
  login,
  getNavBar,
  getFooter,
};
