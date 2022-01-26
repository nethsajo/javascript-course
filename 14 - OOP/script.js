'use strict';
/////////////////////////////////////////////////////////////////////
//Constructor Function and the new Operator
//Person constructor function
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

Person.hey = function () {
  console.log('Hey there! 👋');
  console.log(this);
};

//Calling the static method
Person.hey();

/////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////
//ES6 Classes
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

  //Static Method - are defined on the class itself not in the prototype.
  static hey() {
    console.log('Hey there! 👋');
    // console.log(this);
  }
}

const joyjoy = new PersonClass('Joy Christian Reyes', 1998);

console.log(joyjoy);
joyjoy.calcAge();
console.log(joyjoy.age);

joyjoy.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

const jan = new PersonClass('Kenneth Sajo', 1998);

//Calling static method
PersonClass.hey();

/////////////////////////////////////////////////////////////////////
//Getters and Setters
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

/////////////////////////////////////////////////////////////////////
//Object.create()

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

//Create a person object (steven) with a PersonProto as the prototype

//Steven object is now an empty object here and it will be linked to the PersonProto object which will be its prototype
const steven = Object.create(PersonProto);
console.log(steven);

//Sets a property on the object
steven.name = 'Steven';
steven.birthYear = 2000;

//Call the calcAge prototype
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const holt = Object.create(PersonProto);
holt.init('Holty', 2019);
holt.calcAge();

/////////////////////////////////////////////////////////////////////
//Coding Challenge #2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
//   }

//   get speedUS() {
//     return `${this.make} is going at ${this.speed / 1.6} mi/h 🏁`;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const fordCar = new Car('Ford', 120);
// console.log(fordCar);
// console.log(fordCar.speedUS);
// fordCar.accelerate();
// fordCar.speedUS = 50;
// console.log(fordCar);

/////////////////////////////////////////////////////////////////////
//Inheritance between "Classes": Constructor Functions

const PersonI = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonI.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  console.log(this);
  PersonI.call(this, firstName, birthYear);
  this.course = course;
};

//Linking Prototypes
Student.prototype = Object.create(PersonI.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const angel = new Student('Angel', 1995, 'Computer Science');

console.log(angel);
angel.introduce();
angel.calcAge();

console.log(angel.__proto__);
console.log(angel.__proto__.__proto__);

console.log(angel instanceof Student);
console.log(angel instanceof PersonI);
console.log(angel instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

/////////////////////////////////////////////////////////////////////
//Coding Challenge #3
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} is going at ${this.speed} km/h 🚫`);
// };

// const EV = function (make, speed, currentBattery) {
//   Car.call(this, make, speed);
//   this.currentBattery = currentBattery;
// };

//Link the prototypes. The prototype property of EV will inherit from the Car prototype property
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.currentBattery = chargeTo;
// };

//This will override the accelerate() prototype of parent class (Car). JavaScript of course used to first one

//So when there are two methods or properties with the same in a property chain then the first one that appears in the chain is the one that's gonna be used.

//So basically a child class can overwrite a method that inherited from the parent class
// EV.prototype.accelerate = function () {
//   this.speed = this.speed + 20;
//   this.currentBattery -= 1;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h 🏁, with a charge of ${this.currentBattery}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// tesla.brake();

// const nikola = new EV('Nikola', 210, 90);
// nikola.accelerate();
// nikola.accelerate();

/////////////////////////////////////////////////////////////////////
//Inheritance between "Classes": ES6 Classes

class PersonIClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}! 👋`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there! 👋');
  }
}

class StudentClass extends PersonIClass {
  constructor(fullName, birthYear, course) {
    //Always need to happen first!!
    //Super is basically the constructor function of the parent class
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //Overwrite the calcAge method from the parent class
  calcAge() {
    console.log(
      `I'm ${
        new Date().getFullYear() - this.birthYear
      } years old, but as a student I feel more like ${
        new Date().getFullYear() - this.birthYear + 10
      } years old 👴`
    );
  }
}

const love = new StudentClass('Joy Reyes', 1998, 'BSIT');
love.introduce();
love.calcAge();

/////////////////////////////////////////////////////////////////////
//Inheritance between "Classes": Object.create()

const PersonIProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const me = Object.create(PersonIProto);

//Create an object that will be the prototype of students and the prototype will be PersonIProto
const StudentProto = Object.create(PersonIProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonIProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

//We can use the StudentProto to create new students

//Let's create a pepper object that will inherit from StudentProto. The StudentProto object is now the prototype of the pepper object and the PersonIProto is in turn the prototype of StudentProto and therefore PersonIProto is the parent prototype of pepper object which means that it's in its prototype chain
const pepper = Object.create(StudentProto);
pepper.init('Pepper', 2020, 'BSIT');
pepper.introduce();
pepper.calcAge();

/////////////////////////////////////////////////////////////////////
//Another Class Example with Data Privacy and Encapsulation

//1. Public fields
//2. Private fields
//3. Public methods
//4. Private methods
// (there is also the static version)

class Account {
  //1. Defining public fields (instances)
  locale = navigator.language;

  //2. Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property
    //This does not actually make the property truly private
    // this._movements = [];
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3. Public methods
  //Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    // console.log(this);
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.#movements.push(-val);
    return this;
    //this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this;
    }
  }

  //Static methods will not be available on all the instances but only on the class itself
  static helper() {
    console.log('Helper');
  }

  //4. Private methods
  // #approveLoan(val) {
  //   return true;
  // }
}

const account1 = new Account('Kenneth', 'EUR', 1111);

// account1._movements.push(250);
// account1._movements.push(-140);
account1.deposit(250);
account1.withdraw(140);
account1.requestLoan(1000);
console.log(account1.getMovements());

console.log(account1);
console.log(account1.pin);
console.log(account1._approveLoan(1000));
Account.helper();

/////////////////////////////////////////////////////////////////////
//Chaining Methods
account1
  .deposit(300)
  .deposit(500)
  .withdraw(35)
  .requestLoan(25000)
  .withdraw(4000);

console.log(account1.getMovements());

/////////////////////////////////////////////////////////////////////
//Coding Challenge #4

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h 🚫`);
    return this;
  }

  get speedUS() {
    return `${this.make} is going at ${this.speed / 1.6} mi/h`;
  }
}

class EVClass extends CarClass {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Battery is now ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h 🏁, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h 🏁`);
    return this;
  }
}

const rivian = new EVClass('Rivian', 120, 23);

rivian.accelerate().brake().chargeBattery(90).accelerate().brake();

console.log(rivian.speedUS);
