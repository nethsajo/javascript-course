'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
};

const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(response => {
      if (!response.ok) throw new Error('Country not found!');
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => {
      renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//API: locationiq.com
const whereAmI = function (lat, lng) {
  fetch(
    `https://us1.locationiq.com/v1/reverse.php?key=pk.8432b3dac8498ade8e8907be92b0b3f2&lat=${lat}&lon=${lng}&format=json`
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`There's a problem with the API. ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      getCountryData(data.address.country);
    })
    .catch(error =>
      renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`)
    );
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
