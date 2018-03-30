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

  const dhm = (t) => {
    let cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor( (t - d * cd) / ch),
        m = Math.round( (t - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
    if( m === 60 ){
      h++;
      m = 0;
    }

    if( h === 24 ){
      d++;
      h = 0;
    }
    return d;
  };

  let startDate, endDate, totalDay;
  let updateStartDate = function() {
    startPicker.setStartRange(startDate);
    startPicker.draw();
    endPicker.setStartRange(startDate);
    endPicker.setMinDate(startDate);
  };

  let updateEndDate = function() {
    startPicker.setEndRange(endDate);
    startPicker.setMaxDate(endDate);
    endPicker.setEndRange(endDate);
    endPicker.draw();
  };

  let startPicker = new Pikaday({
    field: document.querySelector('[data-js="field-checkin"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      let date = this.getMoment().format('MMMM D, YYYY');
      startDate = this.getDate();
      updateStartDate();
      single[0].classList.add('is-hidden');
      single[1].classList.remove('is-hidden');
      doc.querySelector('[data-js="date-start"]').innerHTML = date;
    },
    i18n: i18n,
    firstDay: 0
  });
  let endPicker = new Pikaday({
    field: document.querySelector('[data-js="field-checkout"]'),
    container: calendar,
    bound: false,
    format: 'MMMM D, YYYY',
    minDate: new Date(),
    maxDate: new Date(2020, 12, 31),
    onSelect: function() {
      endDate = this.getDate();
      updateEndDate();
      let date = this.getMoment().format('MMMM D, YYYY');
      doc.querySelector('[data-js="date-end"]').innerHTML = date;

      totalDay = this.getDate() - startPicker.getDate();
      let $totalNight = doc.querySelectorAll('[data-js="total-nights"]');
      $totalNight.forEach((item) => {
        if (dhm(totalDay) === 1)
          return item.innerHTML = `${dhm(totalDay)} night`;
        return item.innerHTML = `${dhm(totalDay)} nights`;
      });
    },
    i18n: i18n,
    firstDay: 0
  });

  let _startDate = startPicker.getDate();
  let _endDate = endPicker.getDate();

  if (_startDate) {
    startDate = _startDate;
    updateStartDate();
  }

  if (_endDate) {
    endDate = _endDate;
    updateEndDate();
  }

})(window, document);
