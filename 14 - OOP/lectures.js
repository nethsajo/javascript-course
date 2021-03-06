'use strict';
//OOP - is a programming paradigm based on the concept of objects

//Paradigm means the style of the code and how we write and organize code

//We use objects to model (describe) real-world or abstract features

//Objects may contain data (properties) and code (methods). By using objects, we pack data and te corresponding behavior into one block;

//In OOP, objects are self-contained pieces/blocks of code;

//Objects are building blocks of applications, and interact with one another;

//Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object

//OOP was developed with the goal of organizing code, to make it more flexible and easier to maintain (avoid "spaghetti code")

//Classes are a template for creating objects. They encapsulate data with code to work on that data.

//Instances is a real object that can use in code which was created from a class and the class itself is not an object

//Abstraction: ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation

//Encapsulation: keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods be exposed as a public interface (API)

//Inheritance: making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between classes. This allows us to reues common logic and to model real-world relationships

//Polymorphism: a child class can overwrite a method it inherited from a parent class[it's more complex that, but enough for our purposes]

//State is simply refers to an object's data

//Classical OOP: Classes
//Instantiation: objects (instances) are instantiated from a class, which functions like a blueprint;
//Behavior (methods) is copied from class to all instances

//OOP in JS: Prototypes
//Ojects are linked to a prototype object
//Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype
//Behavior is delegated to the linked prototype object
//Array.prototype is the prototype of all array objects we create in JavaScript. Therefore, all arrays have access to the map method

//3 ways of implementing prototypal inheritance in JavaScript

//1. Constructor functions
//Technique to create objects from a function
//This is how built-in objects like Arrays, Maps, or Sets are actually implemented

//2. ES6 Classes
//Modern alternative to constructor function syntax
//"Syntatic sugar:" behind the scenes, ES6 classes work exactly like constructor functions
//ES6 classes do not behave like classes in classical OOP

//3. Object.create()
//The easiest and most straightforward way of linking an object to a prototype object

//Constructor Functions and the new Operator

//In OOP, the constructor function always start with a capital letter

//Function expression and function declaration will both work in constructor function. An arrow function will actually not work as a function constructor and that's because it doesn't have its own this keyword

/* const Person = function (firstName, birthYear) {
  //console.log(this); //empty object that's because we are calling it with new keyword

  //Create a property on the 'this' keyword and then set it to that value (parameter)
  this.firstName = firstName;
  this.birthYear = birthYear;
};*/

// new Person('Kenneth', 1998);

//To call the constructor, use the 'new' keyword. The new operator is a special operator because what it does is to call the Person function but it does a whole lot more than just that

//When the function with new operator is called:
//1. First a new {} (object) is created
//2. Then afterwards, the function is called, the 'this' keyword will be set to the new empty object
//3. The newly created object {} is linked to prototype
//4. Finally, the object that was created in the beginning is then automatically return from the constructor function / Function automatically returns the {} (object)

//Prototypes
/*const Person = function (firstName, birthYear) {
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

//Check kenneth if it is instance of Person; returns true or false
console.log(kenneth instanceof Person);

//Prototypes
console.log(Person.prototype);

//It exists only one copy of the calcAge function but then all of the objects that are created using the Person constructor function can basically reuse the function on themselves

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

//The this keyword of course in each of them is as always set to the object that is calling the method and so here that's kenneth, joy and rhaylie

//The this keyword is set to the object that is calling the method
kenneth.calcAge();
joy.calcAge();
rhaylie.calcAge();*/

//Any objects has access to the methods and properties from its prototype. The prototype of kenneth, joy and rhaylie is Person.prototype

//Prototypal Inhertance / Delegation Works

//Remember, Person.prototype is actually not the prototype of Person but of all the objects that are created through the Person function

//How an object is created using the 'new' operator and the constructor function (Person)

//1. When calling a function, any function with the new operator the first thing that will happen is an empty object is created instantly

//2. Then the 'this' keyword and the function call is set to the newly created object. So, inside the function's execution context 'this' is now the new empty object

//3. The new object is linked (__proto__ property) to the constructor function's prototype property

//4. The new object is returned from the constructor function call

//kenneth.calcAge();

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
  console.log(this);
  return [...new Set(this)];
};

console.log(arr.unique());

// const heading = document.querySelector('h1');
// console.dir(x => x + 1);

//ES6 classes

//class expression
// const PersonClass = class {};

//class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance Methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}! ????`);
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

  //Static Method
  static hey() {
    console.log('Hey there! ????');
    console.log(this);
  }
}

const joyjoy = new PersonClass('Joy Christian Reyes', 1998);

console.log(joyjoy);
joyjoy.calcAge();
console.log(joyjoy.age);

// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.fullName.slice(0, this.fullName.indexOf(' '))}! ????`);
// };

joyjoy.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const jan = new PersonClass('Kenneth Sajo', 1998);

//Calling static method
PersonClass.hey();

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
