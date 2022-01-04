'use strict';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//Enhanced object literals
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////
// console.log('----- Destructuring Array -----');

//Destructuring Array
// const arr = [2, 3, 4];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];

// The same thing with destructuring:
// const [a, b, c] = arr; // we need to define them with const only.
// console.log(a, b, c);

// In the double commas, the second comma will skip the second part. So if you run it will show Italian Vegetarian
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//Switch two values of array using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Receive two return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// console.log(starter, mainCourse);

//Destructuring Nested Array
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;

// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//Default Values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

/////////////////////////////////

//Destructuring Objects
// console.log('----- Destructuring Objects -----');

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

//Change variable names from the property names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

//Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

//Mutating Variables
// let f = 111;
// let s = 999;
// const obj = { f: 23, s: 7, t: 14 };

//Wrap in parenthesis
// ({ f, s } = obj);

// console.log(f, s);

//Destructuring Nested Objects
// const {
//   fri: { open: o, close: cl },
// } = openingHours;
// console.log(o, cl);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

/////////////////////////////////
//Spread Operator

// console.log('----- Spread Operator -----');

// const arrNumbers = [7, 8, 9];
// const badNewArray = [1, 2, arrNumbers[0], arrNumbers[1], arrNumbers[2]];
// console.log(badNewArray);

// const newArray = [1, 2, ...arrNumbers];
// console.log(newArray);

// console.log(...newArray);

//Adding newMenu in the restaurant menu using spread operator
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//Join two arrays or more
// const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menus);

//Iterables are arrays, strings, maps, sets. NOT objects

// const str = 'Kenneth';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

//Multiple values separated by a comma are usually only expected when passing arguments into a function or when build a new array
// console.log(`${...str} Sajo`);

//Function that accepts multiple arguments and using spread operator

//Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

//Create a new restaurant object with all the data from the original one and add some additional data
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };

// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////
//Rest Pattern and Parameter

// console.log('----- Rest Pattern and Parameter -----');

//Spread and Rests syntax both look exactly the same but they work in opposite ways depending on where they are used. Spread operator is used where would otherwise write values separated by a comma while the Rest pattern is used where would otherwise write variable names separated by commas and not values separated by commas.

//1. Destructuring

//SPREAD, because on RIGHT side of assignment operator
// const arrOne = [1, 2, ...[3, 4]];

//REST, because on LEFT side of assignment operator

//Rest pattern basically collects the elements that are unused in destructuring assignment. 3, 4 and 5 are stored in others variable
// const [arrA, arrB, ...others] = [1, 2, 3, 4, 5];

// console.log(arrA, arrB, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

//Objects using Rest pattern
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

//2. Functions
// const add = function (...numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(`Sum: ${sum}`);
// };

// add(9, 7);
// add(1, 13, 16, 2);
// add(5, 8, 1, 6, 10, 2, 23);

// const xAdd = [23, 5, 7];
// add(...xAdd);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

/////////////////////////////////
//Short Circuiting (&& and ||)

// console.log('----- Short Circuiting -----');

//Use ANY data type, return ANY data type, and short-circuitng

//We used to values that are not booleans and it then returned a value.

//OR Short circuiting means that if the first value is a truthy value it will immediately return that first value. So that the returned value is 3

// console.log('----- OR -----');

// console.log(3 || 'Kenneth'); //3
// console.log('' || 'Kenneth'); //Jonas
// console.log(true || 0); //true
// console.log(undefined || null); //null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 20;

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----- AND -----');

//AND Short circuiting means that if the first value is a falsy value it will immediately return that falsy value without evaluating the second operand. When both values are truthy it means that the evaluation continues and the last value is returned

// console.log(0 && 'Kenneth'); //0
// console.log(7 && 'Kenneth'); //Jonas

// console.log('Hello' && 23 && null && 'Kenneth');

//Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

//If the restaurant orderPizza does not exist or undefined it will then short circuit the evaluation and nothing will happen and if does exist or truthy value then the second part here will be evaluated. Exactly the same with if block statement above
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/////////////////////////////////

//Nullish Coalescing Operator (??)

//Nullish operator returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// console.log('----- Nullish Coalescing -----');

// restaurant.numberGuests = 0;
// const guests = restaurant.numberGuests || 10;
// console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numberGuests ?? 10;
// console.log(guestCorrect);

/////////////////////////////////

//Logical Assignment Operators

// console.log('----- Logical Assignment Operators -----');

// const restOne = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const restTwo = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

//OR assignment operator
// restOne.numGuests = restOne.numGuests || 10;

// restTwo.numGuests = restTwo.numGuests || 10;

//Shorthand
// restOne.numGuests ||= 10;
// restTwo.numGuests ||= 10;

//Nullish assignment operator (null or undefined)
// restOne.numGuests ??= 10;
// restTwo.numGuests ??= 10;

//AND assignment operator
//The restOne.owner does not exist and the value is undefined and the operator short circuits when the first value is falsy and then that is immediately returned

// restOne.owner = restOne.owner && '<ANONYMOUS>';
// restTwo.owner = restTwo.owner && '<ANONYMOUS>';

//Falsy value because it didn't exist and nothing will be change or happen so the object stayed exactly the same
// restOne.owner &&= '<ANONYMOUS>';

//Truthy value and the owner value will change the owner to ANONYMOUS
// restTwo.owner &&= '<ANONYMOUS>';

// console.log(restOne);
// console.log(restTwo);

/////////////////////////////////

//for-of loop

// console.log('----- for-of loop -----');

// const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];

//Log all the menus using for-of loop
// for (const menu of menus) console.log(menu);

// for (const [index, value] of menus.entries()) {
//   console.log(`${index + 1}: ${value}`);
// }

// console.log([...menus.entries()]);

/////////////////////////////////

//Optional chaining

// console.log('----- Optional chaining -----');

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//Without optional chaining
// console.log(restaurant.openingHours.mon.open);

//With optional chaining operator. If a certain property does not exist the undefined is returned immediately
// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

//Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(restaurant.openingHours['thu']?.open);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//Optional chaining methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//This optional chaining operator will check if the orderRisotto method actually exists and if doesn't then it will returned it undefined. The first operand returns undefined and in the nullish coalescing operator immediately go to that second operand and therefore the result of the log is the second operand
// console.log(restaurant.orderRisotto?.(0) ?? 'Method does not exist');

//Optional chaining arrays
// const users = [
//   {
//     name: 'Kenneth',
//     email: 'hello@kenneth.io',
//   },

//   {
//     name: 'Joy',
//     email: 'hello@joy.io',
//   },
// ];

// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

//Without optional chaining

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

/////////////////////////////////

//Looping Objects: Object Keys, Values and Entries

// console.log('----- Object Keys, Values and Entries -----');

//Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//Property Values
// const values = Object.values(openingHours);

//Returns values
// console.log(values);

//Entire object
// const entries = Object.entries(openingHours);

//Returns values and keys
// console.log(entries);

//[key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/////////////////////////////////

//Sets

// console.log('----- Sets -----');

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Kenneth'));

//Counts the size of the ordersSet
// console.log(ordersSet.size);

//Checks if ordersSet has a Pizza, returns true or false value

//This is similar to includes method of array
// console.log(ordersSet.has('Pizza'));

//Checks if ordersSet has a Bread, returns true or false value
// console.log(ordersSet.has('Bread'));

//Add element to the ordersSet
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

//Delete element to the ordersSet
// ordersSet.delete('Risotto');

//Clear all elements in ordersSet
// ordersSet.clear();
// console.log(ordersSet);

//Retrieve values out of a set
// for (const order of ordersSet) console.log(order);

//Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jankennethsajo').size);

/////////////////////////////////

//Maps: Fundamentals

// console.log('----- Map -----');

// const rest = new Map();
// rest.set('name', 'Classic Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//Maps: Iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again! 😢'],
// ]);
// console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

//Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer: '));

// const answer = 3;
// console.log(answer);

//console.log(answer === 3 ? question.get(true) : question.get(false));

// const correct =
//   question.get('correct') === answer ? question.get(true) : question.get(false);

// console.log(correct);

// console.log(question.get(question.get('correct') === answer));

//Convert map to array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/////////////////////////////////

console.log('----- Working with Strings -----');

//Working with String - Part 1
const airline = 'TAP Philippine Airlines';
// const plane = 'A350-900';

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //3
console.log('B737'[0]); //B
console.log(airline.length); //23
console.log('B737'.length); //4

console.log(airline.indexOf('l')); //7
console.log(airline.lastIndexOf('p')); //10
console.log(airline.indexOf('Airlines')); //15

//Slice method needs indexes as arguments
console.log(airline.slice(4)); //Philippine Airlines
console.log(airline.slice(4, 15)); //Philippine

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Airlines
console.log(airline.slice(-2)); //es
console.log(airline.slice(1, -1)); //AP Philippine Airline

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  const check = s === 'B' || s === 'E' ? 'You got the middle seat 🎉' : 'You got lucky 😎';
  console.log(check);
};

checkMiddleSeat('11B'); //B
checkMiddleSeat('23C'); //C
checkMiddleSeat('3E'); //E

console.log(new String('Kenneth'));
console.log(typeof new String('Kenneth'));
console.log(typeof new String('Kenneth').slice(1));

//Working with String - Part 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in name
const passenger = 'kEnNetH'; //Kenneth
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// const checkEmail = function (correct, email) {
//   const normalized = email.toLowerCase().trim();
//   const check = normalized === correct;
//   console.log(check);
// };

// checkEmail('hello@kenneth.io', '  Hello@Kenneth.Io \n');

//Comparing emails
const email = 'hello@kenneth.io';
const loginEmail = '  Hello@Kenneth.Io \n';

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail); //hello@kenneth.io
console.log(email === normalizedEmail); //true

//Replacing
const priceUS = '288.98$';
const pricePH = priceUS.replace('$', '₱').replace('.', ',');
console.log(pricePH);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));

//Replacing all door string to gate
console.log(announcement.replaceAll('door', 'gate'));

//Another way to replace all door string to gate
// console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A321neo';
console.log(plane.includes('A321')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('Air')); //true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for a protection');

//Working with String - Part 3

//Split allows us to split a string into multiple parts based on a divider string

console.log('a+very+nice+string'.split('+'));
console.log('Kenneth Sajo'.split(' '));

const [firstName, lastName] = 'Kenneth Sajo'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');

  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('joy christian reyes');
capitalizeName('jan kenneth sajo');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Kenneth'.padStart(20, '+').padEnd(30, '+'));

const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskedCreditCard(77129315));
console.log(maskedCreditCard(4444931517732861));
console.log(maskedCreditCard('3355472900985135'));

//Repeat Method
const message2 = 'Bad weater... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

/////////////////////////////////

//String Method Practice

console.log('----- String Methods Practice -----');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

const getCode = code => {
  return code.slice(0, 3).toUpperCase();
};

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  // console.log(type, from, to, time);

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50);

  console.log(output);
}
