////////////////////////////////////

//Activating Strict Mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = "Audio";
// const private = 534;

////////////////////////////////////

//Functions

function logger() {
  console.log(`My name is Kenneth`);
}

//Calling or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} ${apples > 0 ? "apples" : "apple"} and ${oranges} ${oranges > 0 ? "oranges" : "orange"}.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

////////////////////////////////////

//Function Declaration and Expression

//Function Declaration
function calcAge(birthYear) {
  return 2022 - birthYear;
}

const age = calcAge(1998);

//Function Expression
const calcAgeTwo = function (birthYear) {
  return 2022 - birthYear;
};

const ageTwo = calcAgeTwo(1998);

console.log(age, ageTwo);

//Arrow Functions
const calcAgeThree = (birthYear) => 2022 - birthYear;

const ageThree = calcAgeThree(1998);

console.log(ageThree);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, "Joy"));

console.log(yearsUntilRetirement(1997, "Kenneth"));

////////////////////////////////////

//Functions Calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);

  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcessor(2, 3));

////////////////////////////////////

//Reviewing Functions
const calcAgeFour = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetire = function (birthYear, firstName) {
  const age = calcAgeFour(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetire(1998, "Joy"));

console.log(yearsUntilRetire(1970, "Kenneth"));

////////////////////////////////////

//Arrays

// const friend1 = "Kenneth";
// const friend2 = "Joy";
// const friend3 = "Holt";

//Literal syntax of an array
// const friends = ["Kenneth", "Joy", "Holt"];

// console.log(friends);

//Another method to create an array
// const years = new Array(1998, 1999, 2000, 2021);

//Arrays are zero base or always starts with zero
// console.log(friends[0]);
// console.log(friends[2]);

//To count the number of items in an array use the length. The count will start with 1 and it is not zero base
// console.log(friends.length);

//To get the last index of an array
// console.log(friends[friends.length - 1]);

//Changing the item in array
// friends[2] = "Rhaylie";
// console.log(friends);

// const myFirstName = "Kenneth";
// const myInfo = [myFirstName, "Sajo", 2022 - 1998, "Programmer", friends];

// console.log(myInfo);

//Exercise

// function calcAgeArray(birthYear) {
//   return 2022 - birthYear;
// }

// const y = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAgeArray(y[0]);
// const age2 = calcAgeArray(y[1]);
// const age3 = calcAgeArray(y[y.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAgeArray(y[0]), calcAgeArray(y[1]), calcAgeArray([y[y.length - 1]])];

// console.log(ages);

////////////////////////////////////

// Array Methods

const friends = ["Kenneth", "Joy", "Holt"];

//This will add a new item to the end of an array
// friends.push("Rhaylie");

const newLength = friends.push("Rhaylie");

// console.log(friends);

//This will return the length of an array
console.log(newLength);

//This will add a new item to the beginning of an array
friends.unshift("Love");
// console.log(friends);

//This will remove item to the end of an array
friends.pop();

//This will return the last removed value
const poppedFriend = friends.pop();
console.log(friends, poppedFriend);

//This will remove item to the beginning of an array
friends.shift();
console.log(friends);

//This will return the index of Joy
console.log(`Index: ${friends.indexOf("Joy")}`);

console.log(`Index: ${friends.indexOf("Rhaylie")}`);

//This will check if the item is in the array. Returns true or false
console.log(friends.includes("Kenneth"));

console.log(friends.includes("Rhaylie"));

if (friends.includes("Kenneth")) {
  console.log("You have a friend called Kenneth");
}

////////////////////////////////////

//Objects

const myDetails = ["Kenneth", "Sajo", 2022 - 1998, "Programmer", ["Joy", "Rhaylie", "Holt"]];

// const details = {
//   firstName: "Kenneth",
//   lastName: "Sajo",
//   age: 2022 - 1998,
//   job: "Programmer",
//   friends: ["Joy", "Rhaylie", "Holt"],
// };

// Dot vs. Bracket Notation

const details = {
  firstName: "Kenneth",
  lastName: "Sajo",
  age: 2022 - 1998,
  job: "Programmer",
  friends: ["Joy", "Rhaylie", "Holt"],
};

//Display all the details
console.log(details);

//Displaying the specific key/property within the object
console.log(details.lastName);

//We can put any expression like some operations
console.log(details["lastName"]);

// const interestedIn = prompt("What do you want to know about Keneth? Choose between firstName, lastName, age, job, and friends");

//details["job"] Returns Programmer

// if (details[interestedIn]) {
//   console.log(details[interestedIn]);
// } else {
//   console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
// }

details.location = "Philippines";
details["twitter"] = "@nethsajo_";
console.log(details);

//Challenge
console.log(`${details.firstName} has ${details.friends.length} friends, and his girlfriend is ${details.friends[0]} 💖`);

//Object Methods
const info = {
  firstName: "Kenneth",
  lastName: "Sajo",
  birthYear: 1998,
  job: "Programmer",
  friends: ["Joy", "Rhaylie", "Holt"],
  hasDriversLicense: false,

  //A function can also be a property
  // calcAgeObject: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  //this keyword is basically equal to the object on which the method is called or it is equal to the object calling the method

  // calcAgeObject: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAgeObject: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAgeObject()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(info.calcAgeObject());
// console.log(info["calcAgeObject"](1998));

console.log(info.age);

//Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(info.getSummary());

////////////////////////////////////

//Loops
console.log(`Lifting weights repetition 🏋️‍♂️`);

//for loop keeps running while condition is true
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
}

//Loops with Array
const detailsArray = ["Kenneth", "Sajo", 2022 - 1998, "Programmer", ["Joy", "Rhaylie", "Holt"], true];

const types = [];

for (let i = 0; i < detailsArray.length; i++) {
  //Reading from details array
  console.log(detailsArray[i], typeof detailsArray[i]);

  //Filling types array
  // types[i] = typeof detailsArray[i];

  types.push(typeof detailsArray[i]);
}

console.log(types);

const birthYears = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < birthYears.length; i++) {
  const age = 2037 - birthYears[i];
  ages.push(age);
}

console.log(ages);

//Continue and break
//continue - is to exit the current iteration of the loop and continue to the next

//break - used to completely terminate the whole loop

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < detailsArray.length; i++) {
  if (typeof detailsArray[i] !== "string") continue;

  console.log(detailsArray[i], typeof detailsArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < detailsArray.length; i++) {
  if (typeof detailsArray[i] === "number") break;

  console.log(detailsArray[i], typeof detailsArray[i]);
}

//Backwards Loop with Array
const infoArray = ["Kenneth", "Sajo", 2022 - 1998, "Programmer", ["Joy", "Rhaylie", "Holt"], true];

for (let i = infoArray.length - 1; i >= 0; i--) {
  console.log(i, infoArray[i]);
}

//Loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----- Staring exercise ${exercise} -----`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

//While Loop
let i = 1;
while (i <= 10) {
  console.log(`WHILE: Lifting weight repetition ${i} 🏋️‍♂️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
