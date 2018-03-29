((win, doc) => {
  'use strict';

  const verifyXMLHttp = () => {
    let XMLHttp;

    if (win.XMLHttpRequest)
      return XMLHttp = new XMLHttpRequest();
    return XMLHttp = new ActiveXObject('Microsoft.XMLHTTP');
  };

  const ajax = verifyXMLHttp();
  const url = 'https://www.raphaelfabeni.com.br/rv/hotels.json';

  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status == 200) {
      const data = JSON.parse(ajax.responseText);
      const hotelsList = doc.querySelector('[data-js="hotels-list"]');

      for (var i = 0; i <= data.hotels.length; i++) {
        renderMarkupHotel(data.hotels[i], hotelsList);
      }
    }
  };
  ajax.open('GET', url, true);
  ajax.send();

  const createMarkupHotel = (data) => {
    return (`
      <article class="hotel">
        <figure class="hotel-figure">
          <img src="${data.image}" alt="${data.name}">
        </figure>
        <div class="hotel-content">
          <div class="hotel-info">
            <div class="hotel-info__rate">
            </div>
            <h3 class="hotel-info__title">${data.name}</h3>
            <p class="hotel-info__description">${data.description}</p>
          </div>
          <div class="hotel-prices">
          </div>
        </div>
      </article>
    `);
  };

  const renderMarkupHotel = (data, element) => {
    const markup = createMarkupHotel(data);
    element.innerHTML += markup;
  };

})(window, document);
