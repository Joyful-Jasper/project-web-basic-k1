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

const symbols = {
  RIGHT_ARROW: '\u2794',
};

export { lazyLoad, getParamsFromUrl, symbols };
