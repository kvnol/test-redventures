((win, doc) => {
  'use strict';

  const field = doc.querySelector('[data-js="date-input"]');
  const calendar = doc.querySelector('[data-js="dates-calendar"]');
  const picker = new Pikaday({
    field: field,
    container: calendar,
    bound: false,
    firstDay: 1,
    onSelect: () => {
      field.value = moment().format('MMMM D, YYYY');
    }
  });
})(window, document);
