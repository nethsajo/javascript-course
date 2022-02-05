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

//The event loop in practice
//Event loop

//The top level of code or outside of any callback will run first

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

//Synchronous
//Test start
//Test end

//Asynchronous
//Resolved promise 1
//Resolved promise 2
//0 sec timer

//Promise constructor takes exactly one argument and that is so-called executor function.

//As soon as the promise constructor runs it will automatically execute the executer function that we pass in and as it executes the function, it will do so by passing in two other arguments, and those arguments are the resolve and reject functions

//All of this here we'll create a new promise that we're gonna store into the lotteryPromise variable
const lotteryPromise = new Promise(function (resolve, reject) {
  // if (Math.random() >= 0.5) {
  //So basically calling the resolve function will mark this promise as a fulfilled promise which we can also say a resolved promise

  //Into the resolved function here we pass the fulfilled value of the promise so that it can later be consumed with the then method. This will handle the results of this promise just like we handled any other promise with the then method
  //   resolve('You WIN the lottery 💰');
  // } else {
  //In the reject we pass in the error message that later we want to be able in the catch handler/method
  //   reject('You LOSE the lottery 💩');
  // }

  console.log('Lottery is happening! 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN the lottery 💰');
    } else {
      reject(new Error('You LOSE the lottery 💩'));
    }
  }, 2000);
});

//Consume the promise
lotteryPromise
  .then(response => console.log(response))
  .catch(error => console.error(error));

const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

//This will now create a promise that will wait for 2 seconds and after these two seconds it will resolve

//Then callback function in the then method we are not going to receive any resolved value, so we just leave it empty and then simply log a message. So in the callback we could now run any code that we want to be executed after two seconds
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 1 second');
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));

//*
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  error => console.error(error)
);

console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    //*SAME ON THE ABOVE
    navigator.geolocation.getCurrentPosition(resolve, reject);
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

//Consuming Promises with Async/Await

//Async/Await is simply syntactic sugar over the then method in promises

const whereAmILocated = async function () {
  //Geolocation
  const position = await getPosition();

  const { latitude: lat, longitude: lng } = position.coords;

  const resGeo = await fetch(
    `https://us1.locationiq.com/v1/reverse.php?key=pk.8432b3dac8498ade8e8907be92b0b3f2&lat=${lat}&lon=${lng}&format=json`
  );

  const resGeoData = await resGeo.json();

  const country = resGeoData.address.country;
  // fetch(`https://restcountries.com/v2/name/${country}`).then(
  //   response => response
  // );

  //fetch will return a promise and so in an async function like this, we can use the await keyword to basically await for the result of the promise. So basically await will stop decode execution at this point of the function until the promise is fulfilled or until the data has been fetched. Same code above:

  //Country data
  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await response.json();
  renderCountry(data[0]);
};

//Error handling in Async/Await

const whereAmILocatedTwo = async function () {
  try {
    //Geolocation
    const position = await getPosition();

    const { latitude: lat, longitude: lng } = position.coords;

    //Reverse Geocoding
    const revGeo = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=pk.8432b3dac8498ade8e8907be92b0b3f2&lat=${lat}&lon=${lng}&format=json`
    );

    if (!revGeo.ok)
      throw new Error(`Problem getting location data (${revGeo.status})`);

    const revGeoData = await revGeo.json();

    //Country Data
    const response = await fetch(
      `https://restcountries.com/v2/name/${revGeoData.address.country}`
    );

    if (!response.ok)
      throw new Error(`Problem getting country (${response.status})`);

    const data = await response.json();
    renderCountry(data[0]);
    //String that we want to return
    return `You are in ${revGeoData.address.city}, ${
      revGeoData.address.state
    }, ${revGeoData.address.country_code.toUpperCase()}`;
  } catch (error) {
    console.error(error);
    renderError(`${error.message}`);
    //Reject promise returned from async funciton and rethrow errors
    throw error;
  }
};

//Async function runs in the background and so JavaScript immediately moves on the next line to print the logs. If it is a regular function and there would be a console.log in that regular function then that would be appear between the two logs but in the case it's an async function and so therefore it runs in the background until the results are there

console.log('1. Will get location');
whereAmILocatedTwo();
console.log('3. Finished getting location');

//Output
//Will get location
//Finished getting location
//Location data

//Async function always return a promise

console.log('1. Will get location');
//Return a data from the whereAmILocatedTwo function.

//At this point JavaScript has simply no way of knowing yet the string that we want to returned from the whereAmILocatedTwo function because the function is still running but it is also not blocking the code out here and so therefore all that this function does return a promise

//Now the value (string) that we return from an async function will become the fulfilled value of the promise that is returned by the function. The fulfilled value of the promise is going to be the string (You are in...) because that is the value that we return from the async function
// const city = whereAmILocatedTwo();
// console.log(city);

//Consume promise and use the then method to get the fulfilled value.

//The then method was called which in turn means that this promise was actually fulfilled and not rejected. So even though there was an error in the async function, the promise that the asyc function returns is still fulfilled and not rejected. If we add a catch handler and if we want to be able to catch the error then we would have to rethrow that error

//Rethrowing the error means to basically throw the error again so that we can then propagate it down
whereAmILocatedTwo()
  .then(city => console.log(city))
  .catch(error => console.error(`2: ${error.message}`))
  .finally(() => console.log('3. Finished getting location'));

//If we wanted to fix the three is printed before the two, we can simply add finally method

//Convert to async/await using IIFE
(async () => {
  try {
    const city = await whereAmILocatedTwo();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2: ${error.message}`);
  }
  console.log('3. Finished getting location');
})();

//Running Promises in Parallel
//Promise.all takes in an array of promises and it will return a new promise which will then run all the promises in the array at the same time

//Promise.all if one of the promises rejects then the whole promis.all actually rejects as well. Promise.all short circuits when one promise rejects because one rejected promise is enough for the entire thing to reject as well
const getThreeCountries = async function (c1, c2, c3) {
  try {
    const capital = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(capital.map(data => data[0].capital));
  } catch (err) {
    console.error(err);
  }
};

getThreeCountries('portugal', 'usa', 'london');

//Promise.race - receives an array of promises and it also returns a promise. This promise returned by Promise.race is settled as soon as one of the input promises settles.

//Settled simply means that a value is available. So basically the first settled promise wins the race

//These three promises will basically race against each other, like in a real race. If the winning promise is then a fulfilled promise, then the fulfillment value of this whole race promise is gonna be the fulfillment value of the winning promise. We only get one result and not an array of the results of all the three. A promise that gets rejected can actually also win the race.

//Promise.race short circuits whenever one of the promises gets settled so that means no matter if fulfilled or rejected
(async () => {
  try {
    const response = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/italy`),
      getJSON(`https://restcountries.com/v2/name/egypt`),
      getJSON(`https://restcountries.com/v2/name/mexico`),
    ]);
    console.log(response[0]);
  } catch (error) {
    console.log(error);
  }
})();

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, seconds * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  timeout(0.3),
])
  .then(response => console.log(response))
  .catch(error => console.error(error));

//Promise.allSettled - takes in an array of promises again and it will simply return an array of all the settled promises. No matter if the promises got rejected or not.

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Rejected'),
  Promise.resolve('Another success!'),
])
  .then(response => console.log(response))
  .catch(error => console.log(error));

//Promise.any [ES2021] - takes in an array of multiple promises and this one will return the first fulfilled promise and it will simply ignore rejected promise. So therefore the Promise.any is always gonna be a fulfilled promise unless of course all of them reject

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Rejected'),
  Promise.resolve('Another success!'),
])
  .then(response => console.log(response))
  .catch(error => console.log(error));
