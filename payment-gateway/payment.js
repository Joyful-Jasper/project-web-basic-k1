import * as Utils from '../common.js';

const loadPayment = () => {
  const setPayment = (html) => {
    const paymentEl = document.createElement('div');
    paymentEl.insertAdjacentHTML('beforeEnd', html);

    document.querySelector('#payment').appendChild(paymentEl);
  };

  Utils.lazyLoad('../components/Payment.html', setPayment);
};

// load navbar
Utils.getNavBar(document);

// load
loadPayment();

// load footer
Utils.getFooter(document);
