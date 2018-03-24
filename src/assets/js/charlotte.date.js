((win, doc) => {
  'use strict';

  const field = doc.querySelector('[data-js="date-input"]');
  const calendar = doc.querySelector('[data-js="dates-calendar"]');
  const picker = new Pikaday({
    field: field,
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020]
  });

  picker.setMoment(moment().dayOfYear(366));
})(window, document);
