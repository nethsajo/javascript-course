// Lecture: Values and Variables
// let country = "Philippines";
// let continent = "Asia";
// let population = 111719390;

// console.log(country);
// console.log(continent);
// console.log(population);

//Lecture: Data Types
let isIsland = true;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

//Lecture: let, const, var
const country = "Philippines";
const continent = "Asia";
let population = 100;
const language = "Tagalog";
isIsland = false;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(language);
// console.log(isIsland);

//Lecture: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
// let description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;

//Lecture: Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//Lecture: Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}' population is above average`);
} else {
  console.log(
    `${country}' population is ${population - 33} million below average`
  );
}

console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
