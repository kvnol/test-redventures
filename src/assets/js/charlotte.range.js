((win, doc) => {
  'use strict';

  const range = doc.querySelector('[data-js="price-range"]');
  range.addEventListener('input', (e) => {
    let value = e.target.value;
    let subtitle = doc.querySelector('[data-js="subtitle-minvalue"]');

    subtitle.innerHTML = value;
  });
})(window, document);
