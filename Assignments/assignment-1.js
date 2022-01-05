console.log('LECTURE: Values and Variables');

let country = 'Philippines';
let continent = 'Asia';
let population = 110;

console.log(country, continent, population);

console.log('LECTURE: Data Types');

let isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);
console.log(typeof continent);

console.log('LECTURE: let, const and var');

language = 'Tagalog';
const countryDefault = 'Philippines';
const continentDefault = 'Asia';

console.log(language, countryDefault, continentDefault);

console.log('LECTURE: Basic Operators');

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);

let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;

console.log(description);

console.log('LECTURE: Strings and Template Literals');

description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

console.log('LECTURE: Taking Decisions: if/else Statements');

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

console.log('LECTURE: Type Conversion and Coercion');

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //18 - wrong, it should be 1143

console.log('LECTURE: Equality Operator == vs. ===');

// const numberNeighbours = prompt(
//   'How many neighbour countries does your country have?'
// );

const numberNeighbours = 2;

// if (numberNeighbours == 1) {
//   console.log(`Only 1 border`);
// } else if (numberNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

if (Number(numberNeighbours) === 1) {
  console.log(`Only 1 border`);
} else if (numberNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}

console.log('LECTURE: Logical Operators');

if (language === 'English' && population < 50 && !isIsland) {
  console.log(`Hey, Sarah! You should live in ${country}`);
} else {
  console.log(`Hey, Sarah! ${country} does not meet your criteria`);
}

console.log('LECTURE: The switch STATEMENT');

switch (language) {
  case 'Chinese':
  case 'Mandarin':
    console.log(`Most number of native speakers`);
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place in number of native speakers');
    break;
  case 'Tagalog':
    console.log('4th place in number of native speakers');
    break;
  case 'Arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too!');
}

console.log('LECTURE: The Conditional (Ternary) Operator');

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
