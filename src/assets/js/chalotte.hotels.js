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
            <span class="hotel-info__rate rate-${data.rate}"></span>
            <h3 class="hotel-info__title">${data.name}</h3>
            <p class="hotel-info__description">${data.description}</p>
            <p class="hotel-info__button">
              <a href="#" class="hotel-info__button__book">Book now</a>
              <a href="#" class="hotel-info__button__history" data-js="show-history">Price history</a>
            </p>
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
