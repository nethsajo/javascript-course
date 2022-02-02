'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////

/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

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

    countriesContainer.style.opacity = 1;
  });
};

getCountryData('usa');


//////////////////////////////////////////////////////

//Create a sequence of AJAX calls so that the second one runs only after the first one has finished

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
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

  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener('load', function () {
    //AJAX call country 1
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    //Get neighbour country
    //Destructure the first element in array
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call 2
    const requestNeighbour = new XMLHttpRequest();
    requestNeighbour.open(
      'GET',
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    requestNeighbour.send();

    requestNeighbour.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
      renderCountry(data, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
*/

//////////////////////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
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

  countriesContainer.style.opacity = 1;
};

/*
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error('No neighbour found!');

      //Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.log(`${error} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/

/*Arrow Function
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(error => {
      console.log(`${error} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${error.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});

// getCountryData('dsfddsfsdf');

//////////////////////////////////////////////////////

//Event loop

//code outside of any callback will run first

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);

//Promises are queue in micro-task
//So the callback of the resolved promise will be put on the micro-tasks queue and the micro-tasks queue has priority over the callback queue. The one from the micro-tasks queue should be executed first
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000; i++) {}
  console.log(res);
});

console.log('Test end');


//////////////////////////////////////////////////////

//Building a Simple Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win the lottery! 💰');
    } else {
      reject(new Error('You lost your money! 💸'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(error => console.error(error));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));

//////////////////////////////////////////////////////

//Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   error => reject(error)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(position => console.log(position))
  .catch(`Can't get your position`);

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

const whereAmI = function () {
  getPosition()
    .then(position => {
      const { latitude: lat, longitude: lng } = position.coords;

      return fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.8432b3dac8498ade8e8907be92b0b3f2&lat=${lat}&lon=${lng}&format=json`
      );
    })
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

btn.addEventListener('click', whereAmI);


//////////////////////////////////////////////////////

//Consuming Promises with Async/Await
const getCountryData = async function (country) {
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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

//Same to this:
//fetch(`https://restcountries.com/v2/name/${country}`).then(res => res.json());

const whereAmI = async function () {
  try {
    const position = await getPosition();

    const { latitude: lat, longitude: lng } = position.coords;

    const resRevGeo = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=pk.8432b3dac8498ade8e8907be92b0b3f2&lat=${lat}&lon=${lng}&format=json`
    );

    if (!resRevGeo.ok) throw new Error('Problem getting location data');

    const dataRes = await resRevGeo.json();
    const country = dataRes.address.country;

    const response = await fetch(
      `https://restcountries.com/v2/name/${country}?fullText=true`
    );

    if (!response.ok) throw new Error('Problem getting country');
    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataRes.address.city}, ${dataRes.address.country}`;
  } catch (error) {
    console.error(error);
    renderError(`💥 ${error.message}`);

    //Reject promise returned from async function

    throw error;
  }
};

console.log('1. Will get location');
//Returning values from async functions
// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(error => console.error(`2. ${error.message} 💥`))
//   .finally(() => {
//     console.log('3. Finished getting location');
//   });

(async function () {
  try {
    const result = await whereAmI();
    console.log(result);
  } catch (error) {
    console.error(`2. ${error.message} 💥`);
  }
  console.log('3. Finished getting location');
})();


//////////////////////////////////////////////////////

//Running Promises in Parallel
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);

    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);

    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    //Promise.all - receives an array and returns an array
    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v2/name/${c1}`),
      await getJSON(`https://restcountries.com/v2/name/${c2}`),
      await getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('portugal', 'canada', 'tanzania');
*/

//////////////////////////////////////////////////////

//Other Promise Combinators: race, allSettled, any
