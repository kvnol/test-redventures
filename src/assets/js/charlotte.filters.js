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
      const rate = doc.querySelectorAll('.rate-filter__checkbox');

      rate.forEach((item) => {
        item.addEventListener('change', (e) => {
          const checked = e.target;
          if (e.target.checked) {
            hotels.forEach((item) => {
              if (checked.dataset.rate !== item.dataset.rate)
                item.classList.add('is-hidden');
              else
                item.classList.remove('is-hidden');
            });
          }
          else {
            hotels.forEach((item) => {
              if (checked.dataset.rate !== item.dataset.rate)
                item.classList.remove('is-hidden');
            });
          }
        });
      });
    };

    rangeFilter();
    rateFilter();
  });
})(window, document);
