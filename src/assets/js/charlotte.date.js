((win, doc) => {
  'use strict';

  const picker = new Pikaday({
    field: doc.querySelector('[data-js="checkin"]')[0]
  });
})(window, document);
