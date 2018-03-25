((win, doc) => {
  'use strict';

  const calendar = doc.querySelector('[data-js="dates-calendar"]');
  let single = '';
  const i18n = {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort: ['S','M','T','W','T','F','S']
  };
  
  win.addEventListener('load', () => {
    single = doc.querySelectorAll('.pika-single');
    single[1].classList.add('is-hidden');
  }, false);

  let startDate;
  let endDate;
  const updateStartDate = function() {
    startPicker.setStartRange(startDate);
    endPicker.setStartRange(startDate);
    endPicker.setMinDate(startDate);
  },
  updateEndDate = function() {
    startPicker.setEndRange(endDate);
    startPicker.setMaxDate(endDate);
    endPicker.setEndRange(endDate);
  },
  startPicker = new Pikaday({
    field: doc.querySelector('[data-js="field-checkin"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2027, 12, 31),
    onSelect: function() {
      startDate = this.getDate();
      updateStartDate();
      single[0].classList.add('is-hidden');
      single[1].classList.remove('is-hidden');
    },
    i18n: i18n,
    firstDay: 0
  }),
  endPicker = new Pikaday({
    field: doc.querySelector('[data-js="field-checkout"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2027, 12, 31),
    onSelect: function() {
      startDate = this.getDate();
      updateEndDate();
    },
    i18n: i18n,
    firstDay: 0
  }),
  _startDate = startPicker.getDate(),
  _endDate = endPicker.getDate();

  if (_startDate) {
    startDate = _startDate;
    updateStartDate();
  }

  if (_endDate) {
    endDate = _endDate;
    updateEndDate();
  }
})(window, document);
