((win, doc) => {
  'use strict';

  let field = doc.querySelector('[data-js="field-checkout"]');
  let button = doc.querySelector('[data-js="date-search"]');

  field.addEventListener('change', (e) => {
    if (e.target.value !== '')
      button.removeAttribute('disabled');
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    let results = doc.querySelector('[data-js="results"]');
    results.classList.remove('is-hidden');
    results.classList.add('is-show');
  });
})(window, document);
