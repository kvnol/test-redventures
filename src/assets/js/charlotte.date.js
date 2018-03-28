((win, doc) => {
  'use strict';


  let calendar = document.querySelector('[data-js="dates-calendar"]');
  let single;
  let i18n = {
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekdays: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort: ['S','M','T','W','T','F','S']
  };

  window.addEventListener('load', () => {
    single = document.querySelectorAll('.pika-single');
    single[1].classList.add('is-hidden');
  }, false);

  let startDate,
  endDate,
  updateStartDate = function() {
    startPicker.setStartRange(startDate);
    startPicker.draw();
    endPicker.setStartRange(startDate);
    endPicker.setMinDate(startDate);
  },
  updateEndDate = function() {
    startPicker.setEndRange(endDate);
    startPicker.setMaxDate(endDate);
    endPicker.setEndRange(endDate);
    endPicker.draw();
  },
  startPicker = new Pikaday({
    field: document.querySelector('[data-js="field-checkin"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      startDate = this.getDate();
      updateStartDate();
      single[0].classList.add('is-hidden');
      single[1].classList.remove('is-hidden');
      let date = doc.createTextNode(this.getMoment().format('MMMM D, YYYY'));
      doc.querySelector('[data-js="date-start"]').appendChild(date);
    },
    i18n: i18n,
    firstDay: 0
  }),
  endPicker = new Pikaday({
    field: document.querySelector('[data-js="field-checkout"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      endDate = this.getDate();
      updateEndDate();
      let date = doc.createTextNode(this.getMoment().format('MMMM D, YYYY'));
      doc.querySelector('[data-js="date-end"]').appendChild(date);
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
