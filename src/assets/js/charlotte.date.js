((win, doc) => {
  'use strict';

  const field = doc.querySelector('[data-js="date-input"]');
  const calendar = doc.querySelector('[data-js="dates-calendar"]');
  const i18n = {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort: ['S','M','T','W','T','F','S']
  };
  const picker = new Pikaday({
    field: field,
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(2017, 0, 1),
    maxDate: new Date(2027, 12, 31),
    yearRange: [2017,2027],
    i18n: i18n,
    firstDay: 0
  });

  picker.setMoment(moment().dayOfYear(366));
})(window, document);
