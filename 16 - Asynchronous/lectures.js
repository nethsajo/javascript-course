'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

//Most code is synchronous
//Synchronous Code means executed line by line in the exact order of execution that we defined in our code
//Each line of code waits for previous line to finish

//Asynchronous code is executed after a task that runs in "background" finishes
//Asynchronous code is non-blocking
//Execution doesn't wait for an asynchronous task to finish its work
//Callback functions alone do not make code asynchronous

const getCountryData = function (country) {
  //Old school ajax request
  const request = new XMLHttpRequest();

  //URL to which we will make the AJAX call

  //First parameter is the the type of request and second parameter is the url or api endpoint
  request.open('GET', `https://restcountries.com/v2/name/${country}`);

  //Initiates the request
  request.send();
};

getCountryData('philippines');

//////////////////////////////////////////////////////

//Promise - an object that is used as a placeholder for the future result of an asynchronous operation
//Promise - a container for an asychronously delivered value
//Promise - container for a future value

//Two different types of settled promises: Fulfilled/Resolve Promises and Rejected Promises

//Fulfilled/Resolve - is a promise that has successfully resulted in a value just as we expect it. Example is when we use the promise to fetch data from an API, a fulfilled promise successfully got the data and it's now available to being used

//Rejected - means that there has been an error during the asynchronous task

//The then method always returns a promise no matter if we actually return anything or not but if we do return a value then that value will become the fulfillment/resolve value of the return promise

//The then method need to pass a callback function that want to be executed as soon as the promise is actually fulfilled. Takes a function argument that will receive one argument and that argument is the resulting value

const getCountryData = function (country) {
  //Returns the promise
  //Calling the fetch function will then immediately return a promise so as soon as we start the request and in the beginning this promise (fetch) is of course still pending

  //Assume that the Promise will be fulfilled and a value available to work with. To handle the fulfilled state use the then method
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
      //If the response ok property is false then throw a new error and define a message
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);
      return response.json(); //A json method that is available on all the response objects that is coming from the fetch function. Returns promise
    })
    //This will return the data
    .then(data => {
      renderCountry(data[0]);

      //Get the neighbour
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) return;

      //Country 2
      //Returns this new promise because then when we do that, we will be able to chain a new then method on the result of this then method
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

      // return 23;
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found! (${response.status})`);

      return response.json();
    })
    //This data that we receive here as an input to this function is the fulfilled value of the promise that we're handling
    .then(data => console.log(data))
    //This catch method at the end of the chain will basically catch any errors that occur in any place in this whole promise chain and no matter where that is
    .catch(error => console.log(error));
};

getCountryData('usa');

//Don't do this when handling errors
//.then(response => response.json(), error)

//Use the catch method when handling error

//Helper Function
const getJSON = function (url, errorMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function () {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found!')
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error(`No neighbour found!`);

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found!'
      );
    })
    .then(data => renderCountry(data))
    .catch(error => {
      console.error(`${error} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${error.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('usa');
});
