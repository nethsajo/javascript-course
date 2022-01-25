'use strict';

//constructor Person
const Person = function (firstName, birthYear) {
  // console.log(this);

  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never to do this
  // this.calcAge = function () {
  //   console.log(new Date().getFullYear() - this.birthYear);
  // };
};

const kenneth = new Person('Kenneth', 1998);
console.log(kenneth);

const joy = new Person('Joy', 1998);
const rhaylie = new Person('Rhaylie', 2014);
console.log(joy, rhaylie);

console.log(kenneth instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

kenneth.calcAge();
joy.calcAge();
rhaylie.calcAge();

//Object has a special property .__proto__
console.log(kenneth.__proto__);
console.log(kenneth.__proto__ === Person.prototype);

//This confirms that Person.prototype is the prototype of Kenneth and Joy
console.log(Person.prototype.isPrototypeOf(kenneth));
console.log(Person.prototype.isPrototypeOf(joy));
//But Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(kenneth.species, joy.species);
console.log(kenneth.hasOwnProperty('firstName'));

//Returns false because species is a prototype
console.log(kenneth.hasOwnProperty('species'));

console.log(kenneth.__proto__);

//Object.prototype (top of prototype chain)
// console.log(kenneth.__proto__.__proto__);
// console.log(kenneth.__proto__.__proto__.__proto__);

//Returns the constructor of Person function
// console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
//Prototypes of array
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

//The 'this' keyword is going to be the array on which this method will be called
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// const heading = document.querySelector('h1');
// console.dir(x => x + 1);

//Coding Challenge #1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
//   console.log(`${this.make} is going at ${this.speed} km/h 🚗`);
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h 🚫`);
// };

// const bmwCar = new Car('BMW', 120);
// bmwCar.accelerate();
// bmwCar.brake();
// bmwCar.accelerate();

// const mercedesCar = new Car('Mercedes', 95);
// mercedesCar.accelerate();
// mercedesCar.accelerate();
// mercedesCar.brake();
// mercedesCar.accelerate();

// console.log(bmwCar.__proto__);

//ES6 classes

//class expression
// const PersonClass = class {};

//class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}! 👋`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  //Set property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' '))
      //Creates a new property name and the convention, so when we have a setter which is trying to set a property that does already exist then here as a convention we add an underscore
      this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const joyjoy = new PersonClass('Joy Christian Reyes', 1998);

console.log(joyjoy);
joyjoy.calcAge();
console.log(joyjoy.age);

// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.fullName.slice(0, this.fullName.indexOf(' '))}! 👋`);
// };

joyjoy.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const jan = new PersonClass('Kenneth Sajo', 1998);

//Getters and Setters are basically functions that get and set a value

const account = {
  owner: 'Kenneth',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(move) {
    this.movements.push(move);
  },
};

//Get the latest movement
console.log(account.latest);

//To set a latest movement, just use on how to set a property and not a method that pass a parameter
account.latest = 50;
console.log(account.movements);
