//SEMICOLON is not mandatory in Javascript but using the semicolon is a good practice and cleaner code
// let js = "amazing";

//Able to see the output in the log of the browser
// console.log(40 + 8 + 23 - 10);

// console.log("Kenneth");
// console.log(23);

//Variable Declaration
// let firstName = "Joy";
// console.log(firstName);

//Illegal Variables are starts with numbers and using special characters. The characters that can be accepted in variable declaration are _ and $. Also the reserved keywords of javascript is illegal variable.

//These are the examples of valid variables

// let kenneth_joy = "JK";
// let $function = 27;
// let _number = 16;
// let PI = 3.1415;

//Descriptive Variables
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

//Don't do this
// let job1 = "Programmer";
// let job2 = "Teacher";

//Output
// console.log(myFirstJob);

//A Value is either an object or primitive value. A value is only primitive when it's not an object

//Primitive Data Types:
//I. Number - used for decimals and integers

//II. String - used for text

//III. Boolean - logical type that can only be true or false, used for taking decisions

//IV. Undefined - value that is not yet defined or empty value

//V. NULL - also means empty value

//VI. Symbol - value that is unique and cannot be changed

//VII. BigInt - larger integers than the Number type can hold

//////////////////////////////////////////////////
//Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Kenneth");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);

//////////////////////////////////////////////////
//Variable Keywords
//let - variables that can change later or during the execution of the program

//const - varibles that are fixed value and not supposed to change at any point in the future

//var - it works similar to let

//Examples
// let age = 30;
//Reassigning a value or mutate the variable in this case
// age = 23;
// console.log(age);

// const birthYear = 1991;
//Reassigning a value but this won't work. This is an immutable variables
//birthYear = 1990;
// console.log(birthYear);

//We cannot declare an empty const variables
//const job;

//Always recommend to use const by default and let only when the variable needs to change

// var job = "programmer";
// job = "teacher";

// console.log(job);

//Even without declaring a variable keyword this will work
// lastName = "Sajo";
// console.log(lastName);

//////////////////////////////////////////////////
//Math Operators
// const now = 2022;
// const ageKenneth = now - 1998;
// const ageJoy = now - 1999;
// console.log(ageKenneth, ageJoy);

// 2 ** 3 means 2 to the power of 3: 2 * 2 * 2 = 8
// console.log(ageKenneth * 2, ageKenneth / 10, 2 ** 3);

// const firstName = "Jan Kenneth";
// const lastName = "Sajo";

// console.log(firstName + " " + lastName);

//Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = 15 + 10 = 25
// x *= 4; // x = 25 * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

//Comparison Operators (>, <, >=, <=)
// console.log(ageKenneth > ageJoy); //Is the age of Kenneth is greater than Joy?

// console.log(ageJoy >= 18);

// const isFullAge = ageJoy >= 18;

// 24 > 23
// console.log(now - 1998 > now - 1999);

//Precedence Operators
// const now = 2022;
// const ageKenneth = now - 1998;
// const ageJoy = now - 1999;

// console.log(now - 1998 > now - 1999);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageKenneth + ageJoy) / 2;
// console.log(ageKenneth, ageJoy, averageAge);

//////////////////////////////////////////////////

//Template Literals
// const firstName = "Jan Kenneth";
// const lastName = "Sajo";
// const job = "Web Developer";
// const birthYear = 1998;
// const age = 2022 - birthYear;

// console.log(
//   "I'm " + firstName + " " + lastName + ", a " + age + " years old " + job
// );

// console.log(
//   `I'm ${firstName} ${lastName}. I am ${age} years old and my dream job is to be a ${job}!`
// );

//If-Else Statement
// const age = 15;

// if (age >= 18) {
//   console.log(`Joy can start driving license 🚗`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Joy is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

//////////////////////////////////////////////////

//Type Conversion
// const inputYear = "1991";

//Converting string to a number
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

//NaN - Not a Number
// console.log(Number("Kenneth"));
// console.log(typeof NaN);

//Converting number to a string
// console.log(String(23), 23);

//Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1; // '11'
// n = n - 1; // '11' - 1 = 10
// console.log(n);

//////////////////////////////////////////////////

// 5 Falsy Values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Kenneth"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
//This will turn to false because 0 is a falsy value
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job!`);
// }

//Height is undefined or no value
// let height;

//So this will turn to false because undefined is falsy value
// if (height) {
//   console.log(`Yay! Height is defined`);
// } else {
//   console.log(`Height is undefined`);
// }

//////////////////////////////////////////////////

//Equality Operators
// == - loose eqaulity operator
// === - strict equality operator
// const age = 18;

// if (age === 18) console.log(`You just became an adult :D (strict)`);

// if (age == 18) console.log(`You just became an adult :D (loose)`);

// const favourite = Number(prompt(`What's your favourite number?`));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   console.log(`Cool! 23 is an amazing number!`);
// } else if (favourite === 7) {
//   console.log(`7 is also a cool number!`);
// } else if (favourite === 9) {
//   console.log(`9 is also a cool number!`);
// } else {
//   console.log(`Number is not 23 or 7`);
// }

// if (favourite !== 23) {
//   console.log(`Why 6not 23?`);
// }

//////////////////////////////////////////////////

//Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

//false
console.log(hasDriversLicense && hasGoodVision);

//true
console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Joy is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Joy is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}

//////////////////////////////////////////////////

//Switch Statement

const day = "Monday";

switch (day) {
  case "Monday":
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case "Tuesday":
    console.log(`Prepare theory videos`);
    break;
  case "Wednesday":
  case "Thursday":
    console.log(`Write code examples`);
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekends");
    break;
  default:
    console.log(`Not a valid day!`);
}

//Convert to if-else statements
if (day === "Monday") {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === "Tuesday") {
  console.log(`Prepare theory videos`);
} else if (day === "Wednesday" || day === "Thursday") {
  console.log(`Write code examples`);
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekends");
} else {
  console.log(`Not a valid day!`);
}

//////////////////////////////////////////////////

//Statements and Expressions
3 + 4;
1998;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1998} years old`);

//////////////////////////////////////////////////

//The Conditional (Ternary) Operator

const age = 23;

age >= 18 ? console.log(`I link to drink wine`) : console.log(`I like to drink water`);

const drink = age >= 23 ? "wine" : "water";

console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`I link to drink ${age >= 23 ? "wine" : "water"}`);

//////////////////////////////////////////////////
