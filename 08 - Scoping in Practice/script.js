'use strict';

//calcAge is defined as global scope because it is here in the top level code and creates its own scope and that scope is gonna be equivalent to the variable environment of its execution context
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//This firstName variable is not actually not in this scope of the calcAge function. However it is a global variable that we defined out and therefore through the scope chain it's gonna be made available also inside of this scope (calcAge function)
// console.log(firstName);

//Child scope of calcAge function and prints the firstName, age and birth year
// function printAge() {
//   var millenial = true;
//const and let variables are block scoped, they are only avaible inside the block in which they were created
// let output = `${firstName}, you are ${age} and born in ${birthYear}`;
// console.log(output);

// if (birthYear >= 1981 && birthYear <= 1998) {
//Creating new variable with same name as outer scope's variable
// const firstName = 'Steven';

//Reassigning outer scope's variable
// output = 'New Output';
// const str = `Oh, and you're a millenial ${firstName}`;
// console.log(str);

//Child scope printAge function
//   function add(x, y) {
//     return x + y;
//   }

//   console.log(add(9, 7));
// }
//console.log(str);

//var variables are function scoped, so they simply ignore the block because they are not block scoped at all so therefore we can then access the millenial variable inside of its scope
// console.log(millenial);

//We will get a new output here that is because we manipulated an existing variable (output) inside of a child scope
// console.log(output);

//This will get an error, add is not defined. The scope of this add function is only the block in which it was defined (printAge function). Can only use inside the printAge function
// add(8, 8);
//   }

//   printAge();

//   return age;
// }

//Global Variable
// const firstName = 'Kenneth';
// calcAge(1998);

//Scope chain is a one way street. So meaning only an inner scope can have access to the variables of its outer scope. In this example the age variable is inside the calcAge function so therefore it can't be accessible
// console.log(age); //age is not defined

/////////////////////////////////

//Hoisting and TDZ in Practice

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Kenneth';
let job = 'Web Developer';
const year = 1998;

//Functions with Hoisting
console.log(addDeclaration(2, 3));
// console.log(addExpression(5, 11));
console.log(addArrow);
// console.log(addArrow(7, 9));

function addDeclaration(x, y) {
  return x + y;
}

const addExpression = function (x, y) {
  return x + y;
};

var addArrow = (x, y) => x + y;

//Example

if (!products) deleteShoppingCart();

var products = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

/////////////////////////////////

//this keyword
// console.log(this);

const calculateAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};

calculateAge(1998);

const calculateAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};

calculateAgeArrow(1995);

const details = {
  year: 1998,
  calcAge: function () {
    //Will log the details object
    console.log(this);
    console.log(2022 - this.year);
  },
};

details.calcAge();

const joy = {
  year: 2000,
};

//This is method borrowing and  will copy the calcAge function of details object
joy.calcAge = details.calcAge;
joy.calcAge();

const f = details.calcAge;
// f();

/////////////////////////////////

//Regular vs. Arrow Functions
console.log('----- Regular vs. Arrow Functions -----');
// var firstName = 'Joy';

const info = {
  firstName: 'Kenneth',
  birthYear: 1998,
  calcAge: function () {
    console.log(this);
    console.log(`Age: ${2022 - this.birthYear}`);

    //Solution 1: Create a variable to have access to this keyword outside of isMillenial function
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1998);
    //   // console.log(this.birthYear >= 1981 && this.birthYear <= 1998);
    // };

    //Solution 2: Use arrow function - this will work because this arrow function uses the this keyword from its parent scope. In this case, the parent scope of 'this' keyword is info obj. So basically an arrow function inherits the this keyword from the parent scope
    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1998);
    };

    //Regular function call even though it happens inside of a method. The rule says that this keyword must be undefined
    isMillenial();
  },

  //An arrow function does not get its own this keyword, it will simply use the this keyword from its surroundings. So in other words, its parents this keyword

  //As a best practice, should never use an arrow function as a method if not even using the this keyword in a particular method. Just use a normal function expression and prevent this kind of mistakes
  greet: () => {
    console.log(this);
    console.log(`Hey, ${this.firstName}!`);
  },
};

info.greet();
info.calcAge();

//Arguments Keyword - only exists in regular function not in arrow function
console.log('----- Arguments Keyword -----');
const addExpr = function (x, y) {
  console.log(arguments);
  return x + y;
};

addExpr(7, 9);
addExpr(7, 9, 8, 12);

var sumArrow = (x, y) => {
  console.log(arguments);
  return x + y;
};

// sumArrow(2, 5, 8);

/////////////////////////////////

//Primitives vs. Objects/Reference Types

console.log('----- Primitives vs. Objects -----');
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const i = {
  name: 'Kenneth',
  age: 23,
};

const friend = i;
friend.age = 26;

console.log('Friend: ', friend);
console.log('Me: ', i);

//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const joyInfo = {
  firstName: 'Joy',
  lastName: 'Reyes',
  age: 23,
};

const joyMarriedInfo = joyInfo;
joyMarriedInfo.lastName = 'Sajo';

console.log('Before marriage: ', joyInfo);

console.log('After marriage: ', joyMarriedInfo);

//Copying Objects
const joyObject = {
  firstName: 'Joy',
  lastName: 'Reyes',
  age: 23,
  family: ['Rhaylie', 'Holt'],
};

const joyCopy = Object.assign({}, joyObject);
joyCopy.lastName = 'Sajo';

joyCopy.family.push('Bob');
joyCopy.family.push('John');

console.log('Before marriage: ', joyObject);
console.log('After marriage: ', joyCopy);
