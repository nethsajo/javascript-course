'use strict';

console.log('--- Converting and Checking Number ---');

console.log(23 === 23.0); //true

//Base 10 - 0 to 9
//Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.3....4
console.log(0.1 + 0.2 === 0.3); //false

//Convert string to number
console.log(Number('23')); //23

//When JavaScript sees the plus operator it will do type coercion, it will automatically convert all the operands to numbers
console.log(+'23'); //23

//Parsing
console.log(Number.parseInt('30', 10)); //20
console.log(Number.parseInt('e16', 10)); //NaN

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5
console.log(parseFloat('2.5rem')); //2.5

//Check if value is not a number
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('16')); //false
console.log(Number.isNaN(+'16X')); //true
console.log(Number.isNaN(16 / 0)); //false

//Checking if value is Number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

////////////////////////////////////////////////////////

console.log('--- Math and Rounding ---');

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

console.log(Math.min(5, 18, 23, 11, 2)); //2

console.log('PI: ', Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20)); //Generate random number between 10 to 20

//Rounding integers
console.log('Trunc: ', Math.trunc(23.3)); //23

console.log('Round: ', Math.round(23.3)); //23
console.log('Round: ', Math.round(23.9)); //24

console.log('Ceil: ', Math.ceil(23.3)); //24
console.log('Ceil: ', Math.ceil(23.9)); //24

console.log('Floor: ', Math.floor(23.3));
console.log('Floor: ', Math.floor(23.9));

console.log('Trunc: ', Math.trunc(-23.3)); //-23
console.log('Floor: ', Math.floor(-23.3)); //-24

//Rounding decimals
console.log('To fixed: ', (2.7).toFixed(0)); //3
console.log('To fixed: ', (2.7).toFixed(3)); //2.700
console.log('To fixed: ', +(2.345).toFixed(2)); //2.35

////////////////////////////////////////////////////////

console.log('--- Remainder Operator ---');

console.log(5 % 2); //1
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3); //2
console.log(8 / 3); // 8 = 3 * 2 + 2

const oddEven = function (number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

console.log(oddEven(0));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     //0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';

//     //0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'royalblue';
//   });
// });

////////////////////////////////////////////////////////

console.log('--- Numeric Separators ---');

//287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(transferFee1);
console.log(transferFee2);

const PI = 3.141516;
console.log(PI);

console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230

////////////////////////////////////////////////////////

console.log('--- Working with BigInt ---');

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(BigInt(56459689));

//Operations
console.log(10000n + 10000n);
console.log(46723423567567223423657582390895n * 100000000000n);

//Does not work
// console.log(Math.sqrt(16n));

const huge = 23239834583451234n;
const num = 16;

console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

//Divisions
console.log(12n / 3n);

////////////////////////////////////////////////////////

console.log('--- Creating Dates ---');

//Create a date

// const now = new Date();
// console.log(now);

// console.log(new Date('Jan 10 2022 17:11:57'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2022, 12 - 1, 19, 15, 23, 5));
// console.log(new Date(2022, 10, 33));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
const futureDate = new Date(2022, 10, 19, 15, 23);
console.log(futureDate);
console.log(futureDate.getFullYear());
console.log(futureDate.getMonth());
console.log(futureDate.getDate());
console.log(futureDate.getDay());
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());
console.log(futureDate.toISOString());
console.log(futureDate.getTime());

console.log(new Date(1668842580000));

console.log(Date.now());

futureDate.setFullYear(2023);
console.log(futureDate);

////////////////////////////////////////////////////////

console.log('--- Operation with Dates ---');

const future = new Date(2022, 10, 19, 15, 23);
console.log(+future);

const caclDaysPassed = (date1, date2) =>
  Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);

const days = caclDaysPassed(new Date(2022, 1, 14), new Date(2022, 1, 16));

console.log(days);

const now = new Date();
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth() + 1}`.padStart(2, '0');
const year = now.getFullYear();
const hour = now.getHours();
const minutes = `${now.getMinutes()}`.padStart(2, '0');
console.log(`${month}/${day}/${year}, ${hour}:${minutes}`);

////////////////////////////////////////////////////////

console.log('--- Internationalizing Dates ---');

const today = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;

console.log(new Intl.DateTimeFormat(locale, options).format(today));

////////////////////////////////////////////////////////

console.log('--- Internationalizing Numbers ---');

const numFormat = 3884764.23;
const option = {
  style: 'currency',
  currency: 'USD',
};

console.log('US:', new Intl.NumberFormat('en-US', option).format(numFormat));

console.log(
  'Germany:',
  new Intl.NumberFormat('de-DE', option).format(numFormat)
);

console.log('Japan:', new Intl.NumberFormat('ja-JP', option).format(numFormat));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(numFormat)
);

////////////////////////////////////////////////////////

console.log('-- - Timers: setTimeout and setInterval ---');

//setTimeout method sets a timer which executes a function or specified piece of code once the timer expires
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
// setInterval(() => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
