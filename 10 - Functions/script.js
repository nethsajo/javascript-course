'use strict';

console.log('----- Default Parameters -----');
//Create an array to store the booking objects
const bookings = [];

//A function that have a parameter with default values
const createBooking = function (
  flightNumber,
  numberPassengers = 1,
  price = 199 * numberPassengers
) {
  //ES5
  // numberPassengers = numberPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNumber,
    numberPassengers,
    price,
  };

  console.log(booking);

  //Push booking objects to the bookings array
  bookings.push(booking);
};

createBooking('LH123');
createBooking('PH216', 2, 800);
createBooking('MNL912', 5);

createBooking('MNL912', undefined, 100);

////////////////////////////////////////////

console.log('----- Passing Arguments -----');

const flight = 'MNL216';
const details = {
  name: 'Jan Kenneth Sajo',
  passport: 21620208135,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'MNL999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 21620208135) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, details);
console.log(flight);
console.log(details);

//Is the same as doing...
// const flightNumber = flight;
// const passenger = details;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(details);
checkIn(flight, details);

////////////////////////////////////////////

console.log('----- Function Accepting Callback Functions -----');

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

//JS uses callback all the time
const highFive = function () {
  console.log('👋');
};

document.body.addEventListener('click', highFive);

['Kenneth', 'Joy', 'Rhaylie'].forEach(highFive);

////////////////////////////////////////////

console.log('----- Function Returning Function -----');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
//Inside function
greeterHey('Kenneth');
greeterHey('Joy');

greet('Hello')('Kenneth');

//Challenge
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greetArrow('Hi');
greeter('Rhaylie');

////////////////////////////////////////////

console.log('----- call and apply Method -----');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(119, 'Jan Kenneth Sajo');
lufthansa.book(913, 'Joy Reyes');

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//The book function is now just a regular function call, the this keyword points to undefined at least in strict mode. This function is no longer method of lufthansa book, it is now a separate function. The this keyword inside of it (lufthans book method) will now point to undefined
// book(23, 'Rhaylie Reyes');

//The first argument of call method is exactly what we want the this keyword point to and then as usual the rest of the arguments is the flightNumber and name value
book.call(euroWings, 230, 'Rhaylie Reyes');
console.log(euroWings);

book.call(lufthansa, 239, 'Holt Holty');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'John Doe');

//The apply method does basically exactly the same thing. The only difference is that apply does not receive a list of arguments after the this keyword but it's take an array
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

//The bind method does not immediately call the function instead it returns a new function where the this keyword is bound. So it's set to whatever value we pass into bind

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(231, 'Holt Holty');

const bookEW231 = book.bind(euroWings, 231);
bookEW231('Kenneth Sajo');
bookEW231('Joy Reyes');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

//the first argument of bind method is the 'this' keyword, but in the addTax method there's no 'this' keyword at all and so we leave it null or it could be any other value because nothing will happen
const addVAT = addTax.bind(null, 0.23);

//addVAT = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//Challenge
// const addTaxArrow = rate => value => console.log(value + value * rate);

// const vatTotal = addTaxArrow(0.23);
// vatTotal(100);
// vatTotal(23);

////////////////////////////////////////////

console.log('----- IIFE -----');

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//Immediately Invoked Function Expressions
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;

  //var variables can be access even if it's inside a block
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

////////////////////////////////////////////

console.log('----- CLOSURE -----');

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

////////////////////////////////////////////

console.log('----- CLOSURE EXAMPLES -----');

//Example 1
let f;

const g = function () {
  const a = 23;
  //Reassign the f variable and assign it a function value
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

//Call the g function and the result of the function is will be 23
g();

//This proves that the f value of g function really does close over any variables of the execution context in which it was defined
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  console.log(`Will start boarding in ${wait} seconds`);

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
};

const perGroup = 1000;
boardPassengers(180, 3);
