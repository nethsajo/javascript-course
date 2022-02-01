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

const getCountryData = function (country) {
  //Returns the promise
  //The then method need to pass a callback function that want to be executed as soon as the promise is actually fulfilled. Takes a function argument that will receive one argument and that argument is the resulting value
  fetch(`https://restcountries.com/v2/name/${country}`).then(function (
    response
  ) {
    console.log(response);
    return response.json(); //A json method that is available on all the response objects that is coming from the fetch function
  });
};

getCountryData('usa');
