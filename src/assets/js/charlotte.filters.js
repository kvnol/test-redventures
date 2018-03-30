((win, doc) => {
  'use strict';

  win.addEventListener('load', () => {
    const hotels = doc.querySelectorAll('[data-js="hotel"]');

    const rangeFilter = () => {
      const range = doc.querySelector('[data-js="price-range"]');

      range.addEventListener('input', (e) => {
        hotels.forEach((item) => {
          if (e.target.value > item.dataset.price)
            item.classList.add('is-hidden');
          else
            item.classList.remove('is-hidden');
        });
      });
    };

    const rateFilter = () => {

    };

    rangeFilter();
    rateFilter();
  });
})(window, document);
