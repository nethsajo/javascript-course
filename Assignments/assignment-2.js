console.log('LECTURE: Functions');

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const ph = describeCountry('Philippines', 110, 'Manila');
const us = describeCountry('USA', 1130, 'Washington');
const jpn = describeCountry('Japan', 126, 'Tokyo');

console.log(ph);
console.log(us);
console.log(jpn);

console.log('LECTURE: Function Declarations vs. Expressions');

console.log('FUNCTION DECLARATION');
function percentageWorld1(population) {
  return (population / 7900) * 100;
}

const phPopulation = percentageWorld1(110);
const usPopulation = percentageWorld1(1130);
const jpnPopulation = percentageWorld1(126);

console.log(phPopulation);
console.log(usPopulation);
console.log(jpnPopulation);

console.log('FUNCTION EXPRESSION');

const percentageWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageWorld2(110));
console.log(percentageWorld2(1130));
console.log(percentageWorld2(126));

console.log('ARROW FUNCTION');

const percentageWorld3 = population => (population / 7900) * 100;

console.log(percentageWorld3(110));
console.log(percentageWorld3(1130));
console.log(percentageWorld3(126));

console.log('LECTURE: Functions calling other Functions');

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageWorld2(
    population
  )}% of the world.`;
};

console.log(describePopulation('China', 1441));

console.log('LECTURE: Arrays');

const populations = [110, 1130, 126, 1441];

console.log(populations.length === 4);

const percentages = [
  percentageWorld2(populations[0]),
  percentageWorld2(populations[1]),
  percentageWorld2(populations[2]),
  percentageWorld2(populations[3]),
];

console.log(percentages);

console.log('LECTURE: Basic Array Operations (Methods)');

const neighbours = ['Japan', 'Korea'];

neighbours.push('Utopia');

console.log(neighbours);

neighbours.pop('Utopia');

console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European country`);
}

neighbours[0] = 'Republic of Japan';

console.log(neighbours);

console.log('LECTURE: Introduction to Objects');

const myCountry = {
  country: 'Philippines',
  capital: 'Manila',
  language: 'Tagalog',
  population: 110,
  neighbours: ['Japan', 'Korea', 'India'],
};

console.log(myCountry);

console.log('LECTURE: Dot vs. Bracket Notation');

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population + 2;
console.log(myCountry);

myCountry['population'] = myCountry['population'] - 2;
console.log(myCountry);

console.log('LECTURE: Object Methods');

const myCountry2 = {
  country: 'Philippines',
  capital: 'Manila',
  language: 'Tagalog',
  population: 110,
  neighbours: ['Japan', 'Korea', 'India'],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsIsland: function () {
    return (this.isIsland = this.neighbours.length === 0 ? true : false);
  },
};

console.log(myCountry2.describe());
console.log(myCountry2.checkIsIsland());

console.log('LECTURE: The for Loop');

for (let i = 1; i <= 50; i++)
  console.log(`Voter number ${i} is currently voting`);

console.log('LECTURE: Looping Arrays, Breaking and Continuing');

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageWorld1(populations[i]));
}
console.log(percentages2);

console.log('LECTURE: Looping Backwards and Loops in Loops');

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbours: ${listOfNeighbours[i][y]}`);
  }
}

console.log('LECTURE: The while loop');

const percentages3 = [];
let i = 0;

while (i < populations.length) {
  percentages3.push(percentageWorld1(populations[i]));

  i++;
}

console.log(percentages3);
